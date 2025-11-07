# `infraAlertCondition` Submodule <a name="`infraAlertCondition` Submodule" id="@cdktf/provider-newrelic.infraAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InfraAlertCondition <a name="InfraAlertCondition" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition newrelic_infra_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertCondition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  policy_id: typing.Union[int, float],
  type: str,
  comparison: str = None,
  critical: InfraAlertConditionCritical = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  event: str = None,
  id: str = None,
  integration_provider: str = None,
  process_where: str = None,
  runbook_url: str = None,
  select: str = None,
  violation_close_timer: typing.Union[int, float] = None,
  warning: InfraAlertConditionWarning = None,
  where: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.name">name</a></code> | <code>str</code> | The Infrastructure alert condition's name. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the alert policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.comparison">comparison</a></code> | <code>str</code> | The operator used to evaluate the threshold value. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Infrastructure alert condition. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the condition is turned on or off. Valid values are true and false. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.event">event</a></code> | <code>str</code> | The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#id InfraAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.integrationProvider">integration_provider</a></code> | <code>str</code> | For alerts on integrations, use this instead of event. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.processWhere">process_where</a></code> | <code>str</code> | Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.select">select</a></code> | <code>str</code> | The attribute name to identify the metric being targeted; |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.violationCloseTimer">violation_close_timer</a></code> | <code>typing.Union[int, float]</code> | Determines how much time, in hours, will pass before an incident is automatically closed. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | warning block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.where">where</a></code> | <code>str</code> | If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.name"></a>

- *Type:* str

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#name InfraAlertCondition#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.policyId"></a>

- *Type:* typing.Union[int, float]

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#policy_id InfraAlertCondition#policy_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.type"></a>

- *Type:* str

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#type InfraAlertCondition#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.comparison"></a>

- *Type:* str

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#comparison InfraAlertCondition#comparison}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.critical"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#critical InfraAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.description"></a>

- *Type:* str

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#description InfraAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#enabled InfraAlertCondition#enabled}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.event"></a>

- *Type:* str

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#event InfraAlertCondition#event}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#id InfraAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_provider`<sup>Optional</sup> <a name="integration_provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.integrationProvider"></a>

- *Type:* str

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}

---

##### `process_where`<sup>Optional</sup> <a name="process_where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.processWhere"></a>

- *Type:* str

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#process_where InfraAlertCondition#process_where}

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.select"></a>

- *Type:* str

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#select InfraAlertCondition#select}

---

##### `violation_close_timer`<sup>Optional</sup> <a name="violation_close_timer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.violationCloseTimer"></a>

- *Type:* typing.Union[int, float]

Determines how much time, in hours, will pass before an incident is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.warning"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#warning InfraAlertCondition#warning}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.where"></a>

- *Type:* str

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#where InfraAlertCondition#where}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical">put_critical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning">put_warning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical">reset_critical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent">reset_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider">reset_integration_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere">reset_process_where</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl">reset_runbook_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect">reset_select</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer">reset_violation_close_timer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning">reset_warning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere">reset_where</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_critical` <a name="put_critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical"></a>

```python
def put_critical(
  duration: typing.Union[int, float],
  time_function: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical.parameter.duration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

###### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical.parameter.timeFunction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

##### `put_warning` <a name="put_warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning"></a>

```python
def put_warning(
  duration: typing.Union[int, float],
  time_function: str = None,
  value: typing.Union[int, float] = None
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning.parameter.duration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

###### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning.parameter.timeFunction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

##### `reset_comparison` <a name="reset_comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_critical` <a name="reset_critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical"></a>

```python
def reset_critical() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_event` <a name="reset_event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent"></a>

```python
def reset_event() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_provider` <a name="reset_integration_provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider"></a>

```python
def reset_integration_provider() -> None
```

##### `reset_process_where` <a name="reset_process_where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere"></a>

```python
def reset_process_where() -> None
```

##### `reset_runbook_url` <a name="reset_runbook_url" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl"></a>

```python
def reset_runbook_url() -> None
```

##### `reset_select` <a name="reset_select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect"></a>

```python
def reset_select() -> None
```

##### `reset_violation_close_timer` <a name="reset_violation_close_timer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer"></a>

```python
def reset_violation_close_timer() -> None
```

##### `reset_warning` <a name="reset_warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning"></a>

```python
def reset_warning() -> None
```

##### `reset_where` <a name="reset_where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere"></a>

```python
def reset_where() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertCondition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertCondition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertCondition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertCondition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the InfraAlertCondition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing InfraAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InfraAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid">entity_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput">critical_input</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput">event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput">integration_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput">policy_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput">process_where_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput">runbook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput">select_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput">violation_close_timer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput">warning_input</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput">where_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event">event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider">integration_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere">process_where</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl">runbook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select">select</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer">violation_close_timer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where">where</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical"></a>

```python
critical: InfraAlertConditionCriticalOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a>

---

##### `entity_guid`<sup>Required</sup> <a name="entity_guid" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid"></a>

```python
entity_guid: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning"></a>

```python
warning: InfraAlertConditionWarningOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a>

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `critical_input`<sup>Optional</sup> <a name="critical_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput"></a>

```python
critical_input: InfraAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput"></a>

```python
event_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_provider_input`<sup>Optional</sup> <a name="integration_provider_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput"></a>

```python
integration_provider_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput"></a>

```python
policy_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_where_input`<sup>Optional</sup> <a name="process_where_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput"></a>

```python
process_where_input: str
```

- *Type:* str

---

##### `runbook_url_input`<sup>Optional</sup> <a name="runbook_url_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput"></a>

```python
runbook_url_input: str
```

- *Type:* str

---

##### `select_input`<sup>Optional</sup> <a name="select_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput"></a>

```python
select_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `violation_close_timer_input`<sup>Optional</sup> <a name="violation_close_timer_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput"></a>

```python
violation_close_timer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warning_input`<sup>Optional</sup> <a name="warning_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput"></a>

```python
warning_input: InfraAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `where_input`<sup>Optional</sup> <a name="where_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput"></a>

```python
where_input: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event"></a>

```python
event: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_provider`<sup>Required</sup> <a name="integration_provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider"></a>

```python
integration_provider: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `process_where`<sup>Required</sup> <a name="process_where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere"></a>

```python
process_where: str
```

- *Type:* str

---

##### `runbook_url`<sup>Required</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select"></a>

```python
select: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `violation_close_timer`<sup>Required</sup> <a name="violation_close_timer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer"></a>

```python
violation_close_timer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where"></a>

```python
where: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### InfraAlertConditionConfig <a name="InfraAlertConditionConfig" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertConditionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  policy_id: typing.Union[int, float],
  type: str,
  comparison: str = None,
  critical: InfraAlertConditionCritical = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  event: str = None,
  id: str = None,
  integration_provider: str = None,
  process_where: str = None,
  runbook_url: str = None,
  select: str = None,
  violation_close_timer: typing.Union[int, float] = None,
  warning: InfraAlertConditionWarning = None,
  where: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name">name</a></code> | <code>str</code> | The Infrastructure alert condition's name. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the alert policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type">type</a></code> | <code>str</code> | The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison">comparison</a></code> | <code>str</code> | The operator used to evaluate the threshold value. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description">description</a></code> | <code>str</code> | The description of the Infrastructure alert condition. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the condition is turned on or off. Valid values are true and false. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event">event</a></code> | <code>str</code> | The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#id InfraAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider">integration_provider</a></code> | <code>str</code> | For alerts on integrations, use this instead of event. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere">process_where</a></code> | <code>str</code> | Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select">select</a></code> | <code>str</code> | The attribute name to identify the metric being targeted; |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer">violation_close_timer</a></code> | <code>typing.Union[int, float]</code> | Determines how much time, in hours, will pass before an incident is automatically closed. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | warning block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where">where</a></code> | <code>str</code> | If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#name InfraAlertCondition#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#policy_id InfraAlertCondition#policy_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#type InfraAlertCondition#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#comparison InfraAlertCondition#comparison}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical"></a>

```python
critical: InfraAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#critical InfraAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#description InfraAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#enabled InfraAlertCondition#enabled}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event"></a>

```python
event: str
```

- *Type:* str

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#event InfraAlertCondition#event}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#id InfraAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_provider`<sup>Optional</sup> <a name="integration_provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider"></a>

```python
integration_provider: str
```

- *Type:* str

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}

---

##### `process_where`<sup>Optional</sup> <a name="process_where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere"></a>

```python
process_where: str
```

- *Type:* str

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#process_where InfraAlertCondition#process_where}

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select"></a>

```python
select: str
```

- *Type:* str

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#select InfraAlertCondition#select}

---

##### `violation_close_timer`<sup>Optional</sup> <a name="violation_close_timer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer"></a>

```python
violation_close_timer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Determines how much time, in hours, will pass before an incident is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning"></a>

```python
warning: InfraAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#warning InfraAlertCondition#warning}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where"></a>

```python
where: str
```

- *Type:* str

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#where InfraAlertCondition#where}

---

### InfraAlertConditionCritical <a name="InfraAlertConditionCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertConditionCritical(
  duration: typing.Union[int, float],
  time_function: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction">time_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

### InfraAlertConditionWarning <a name="InfraAlertConditionWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertConditionWarning(
  duration: typing.Union[int, float],
  time_function: str = None,
  value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction">time_function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InfraAlertConditionCriticalOutputReference <a name="InfraAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertConditionCriticalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction">reset_time_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_function` <a name="reset_time_function" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```python
def reset_time_function() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput">time_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction">time_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_function_input`<sup>Optional</sup> <a name="time_function_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```python
time_function_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_function`<sup>Required</sup> <a name="time_function" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue"></a>

```python
internal_value: InfraAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---


### InfraAlertConditionWarningOutputReference <a name="InfraAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import infra_alert_condition

infraAlertCondition.InfraAlertConditionWarningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction">reset_time_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_function` <a name="reset_time_function" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction"></a>

```python
def reset_time_function() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput">time_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction">time_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_function_input`<sup>Optional</sup> <a name="time_function_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```python
time_function_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_function`<sup>Required</sup> <a name="time_function" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue"></a>

```python
internal_value: InfraAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---



