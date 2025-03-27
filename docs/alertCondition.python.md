# `alertCondition` Submodule <a name="`alertCondition` Submodule" id="@cdktf/provider-newrelic.alertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCondition <a name="AlertCondition" id="@cdktf/provider-newrelic.alertCondition.AlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition newrelic_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertCondition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entities: typing.List[typing.Union[int, float]],
  metric: str,
  name: str,
  policy_id: typing.Union[int, float],
  term: typing.Union[IResolvable, typing.List[AlertConditionTerm]],
  type: str,
  condition_scope: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  gc_metric: str = None,
  id: str = None,
  runbook_url: str = None,
  user_defined_metric: str = None,
  user_defined_value_function: str = None,
  violation_close_timer: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.entities">entities</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The instance IDs associated with this condition. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.metric">metric</a></code> | <code>str</code> | The metric field accepts parameters based on the type set. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.name">name</a></code> | <code>str</code> | The title of the condition. Must be between 1 and 128 characters, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.term">term</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]</code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.conditionScope">condition_scope</a></code> | <code>str</code> | One of (application, instance). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the condition is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.gcMetric">gc_metric</a></code> | <code>str</code> | A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#id AlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.userDefinedMetric">user_defined_metric</a></code> | <code>str</code> | A custom metric to be evaluated. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.userDefinedValueFunction">user_defined_value_function</a></code> | <code>str</code> | One of: (average, min, max, total, sample_size, percent, rate). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.violationCloseTimer">violation_close_timer</a></code> | <code>typing.Union[int, float]</code> | Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.entities"></a>

- *Type:* typing.List[typing.Union[int, float]]

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#entities AlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.metric"></a>

- *Type:* str

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#metric AlertCondition#metric}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.name"></a>

- *Type:* str

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#name AlertCondition#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.policyId"></a>

- *Type:* typing.Union[int, float]

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#policy_id AlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.term"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#term AlertCondition#term}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.type"></a>

- *Type:* str

The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#type AlertCondition#type}

---

##### `condition_scope`<sup>Optional</sup> <a name="condition_scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.conditionScope"></a>

- *Type:* str

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#condition_scope AlertCondition#condition_scope}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#enabled AlertCondition#enabled}

---

##### `gc_metric`<sup>Optional</sup> <a name="gc_metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.gcMetric"></a>

- *Type:* str

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#gc_metric AlertCondition#gc_metric}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#id AlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#runbook_url AlertCondition#runbook_url}

---

##### `user_defined_metric`<sup>Optional</sup> <a name="user_defined_metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.userDefinedMetric"></a>

- *Type:* str

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#user_defined_metric AlertCondition#user_defined_metric}

---

##### `user_defined_value_function`<sup>Optional</sup> <a name="user_defined_value_function" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.userDefinedValueFunction"></a>

- *Type:* str

One of: (average, min, max, total, sample_size, percent, rate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `violation_close_timer`<sup>Optional</sup> <a name="violation_close_timer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.violationCloseTimer"></a>

- *Type:* typing.Union[int, float]

Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified.

Must be between 1 and 720 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#violation_close_timer AlertCondition#violation_close_timer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm">put_term</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope">reset_condition_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric">reset_gc_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl">reset_runbook_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric">reset_user_defined_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction">reset_user_defined_value_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer">reset_violation_close_timer</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_term` <a name="put_term" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm"></a>

```python
def put_term(
  value: typing.Union[IResolvable, typing.List[AlertConditionTerm]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]

---

##### `reset_condition_scope` <a name="reset_condition_scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope"></a>

```python
def reset_condition_scope() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_gc_metric` <a name="reset_gc_metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric"></a>

```python
def reset_gc_metric() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_runbook_url` <a name="reset_runbook_url" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl"></a>

```python
def reset_runbook_url() -> None
```

##### `reset_user_defined_metric` <a name="reset_user_defined_metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric"></a>

```python
def reset_user_defined_metric() -> None
```

##### `reset_user_defined_value_function` <a name="reset_user_defined_value_function" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction"></a>

```python
def reset_user_defined_value_function() -> None
```

##### `reset_violation_close_timer` <a name="reset_violation_close_timer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer"></a>

```python
def reset_violation_close_timer() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertCondition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertCondition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertCondition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertCondition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlertCondition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid">entity_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term">term</a></code> | <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput">condition_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput">entities_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput">gc_metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput">policy_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput">runbook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput">term_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput">user_defined_metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput">user_defined_value_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput">violation_close_timer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope">condition_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities">entities</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric">gc_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl">runbook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric">user_defined_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction">user_defined_value_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer">violation_close_timer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entity_guid`<sup>Required</sup> <a name="entity_guid" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid"></a>

```python
entity_guid: str
```

- *Type:* str

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term"></a>

```python
term: AlertConditionTermList
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a>

---

##### `condition_scope_input`<sup>Optional</sup> <a name="condition_scope_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput"></a>

```python
condition_scope_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `entities_input`<sup>Optional</sup> <a name="entities_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput"></a>

```python
entities_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `gc_metric_input`<sup>Optional</sup> <a name="gc_metric_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput"></a>

```python
gc_metric_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput"></a>

```python
policy_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runbook_url_input`<sup>Optional</sup> <a name="runbook_url_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput"></a>

```python
runbook_url_input: str
```

- *Type:* str

---

##### `term_input`<sup>Optional</sup> <a name="term_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput"></a>

```python
term_input: typing.Union[IResolvable, typing.List[AlertConditionTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_defined_metric_input`<sup>Optional</sup> <a name="user_defined_metric_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput"></a>

```python
user_defined_metric_input: str
```

- *Type:* str

---

##### `user_defined_value_function_input`<sup>Optional</sup> <a name="user_defined_value_function_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput"></a>

```python
user_defined_value_function_input: str
```

- *Type:* str

---

##### `violation_close_timer_input`<sup>Optional</sup> <a name="violation_close_timer_input" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput"></a>

```python
violation_close_timer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `condition_scope`<sup>Required</sup> <a name="condition_scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope"></a>

```python
condition_scope: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities"></a>

```python
entities: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `gc_metric`<sup>Required</sup> <a name="gc_metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric"></a>

```python
gc_metric: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runbook_url`<sup>Required</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_metric`<sup>Required</sup> <a name="user_defined_metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric"></a>

```python
user_defined_metric: str
```

- *Type:* str

---

##### `user_defined_value_function`<sup>Required</sup> <a name="user_defined_value_function" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction"></a>

```python
user_defined_value_function: str
```

- *Type:* str

---

##### `violation_close_timer`<sup>Required</sup> <a name="violation_close_timer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer"></a>

```python
violation_close_timer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlertConditionConfig <a name="AlertConditionConfig" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertConditionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entities: typing.List[typing.Union[int, float]],
  metric: str,
  name: str,
  policy_id: typing.Union[int, float],
  term: typing.Union[IResolvable, typing.List[AlertConditionTerm]],
  type: str,
  condition_scope: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  gc_metric: str = None,
  id: str = None,
  runbook_url: str = None,
  user_defined_metric: str = None,
  user_defined_value_function: str = None,
  violation_close_timer: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities">entities</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The instance IDs associated with this condition. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric">metric</a></code> | <code>str</code> | The metric field accepts parameters based on the type set. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name">name</a></code> | <code>str</code> | The title of the condition. Must be between 1 and 128 characters, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term">term</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]</code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type">type</a></code> | <code>str</code> | The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope">condition_scope</a></code> | <code>str</code> | One of (application, instance). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the condition is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric">gc_metric</a></code> | <code>str</code> | A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#id AlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric">user_defined_metric</a></code> | <code>str</code> | A custom metric to be evaluated. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction">user_defined_value_function</a></code> | <code>str</code> | One of: (average, min, max, total, sample_size, percent, rate). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer">violation_close_timer</a></code> | <code>typing.Union[int, float]</code> | Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities"></a>

```python
entities: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#entities AlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric"></a>

```python
metric: str
```

- *Type:* str

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#metric AlertCondition#metric}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#name AlertCondition#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#policy_id AlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term"></a>

```python
term: typing.Union[IResolvable, typing.List[AlertConditionTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#term AlertCondition#term}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#type AlertCondition#type}

---

##### `condition_scope`<sup>Optional</sup> <a name="condition_scope" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope"></a>

```python
condition_scope: str
```

- *Type:* str

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#condition_scope AlertCondition#condition_scope}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#enabled AlertCondition#enabled}

---

##### `gc_metric`<sup>Optional</sup> <a name="gc_metric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric"></a>

```python
gc_metric: str
```

- *Type:* str

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#gc_metric AlertCondition#gc_metric}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#id AlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#runbook_url AlertCondition#runbook_url}

---

##### `user_defined_metric`<sup>Optional</sup> <a name="user_defined_metric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric"></a>

```python
user_defined_metric: str
```

- *Type:* str

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#user_defined_metric AlertCondition#user_defined_metric}

---

##### `user_defined_value_function`<sup>Optional</sup> <a name="user_defined_value_function" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction"></a>

```python
user_defined_value_function: str
```

- *Type:* str

One of: (average, min, max, total, sample_size, percent, rate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `violation_close_timer`<sup>Optional</sup> <a name="violation_close_timer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer"></a>

```python
violation_close_timer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified.

Must be between 1 and 720 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#violation_close_timer AlertCondition#violation_close_timer}

---

### AlertConditionTerm <a name="AlertConditionTerm" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertConditionTerm(
  duration: typing.Union[int, float],
  threshold: typing.Union[int, float],
  time_function: str,
  operator: str = None,
  priority: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | In minutes, must be in the range of 5 to 120, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Must be 0 or greater. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction">time_function</a></code> | <code>str</code> | One of (all, any). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator">operator</a></code> | <code>str</code> | One of (above, below, equal). Defaults to equal. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority">priority</a></code> | <code>str</code> | One of (critical, warning). Defaults to critical. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#duration AlertCondition#duration}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Must be 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#threshold AlertCondition#threshold}

---

##### `time_function`<sup>Required</sup> <a name="time_function" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

One of (all, any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#time_function AlertCondition#time_function}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator"></a>

```python
operator: str
```

- *Type:* str

One of (above, below, equal). Defaults to equal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#operator AlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority"></a>

```python
priority: str
```

- *Type:* str

One of (critical, warning). Defaults to critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/alert_condition#priority AlertCondition#priority}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConditionTermList <a name="AlertConditionTermList" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertConditionTermList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlertConditionTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlertConditionTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]]

---


### AlertConditionTermOutputReference <a name="AlertConditionTermOutputReference" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import alert_condition

alertCondition.AlertConditionTermOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority">reset_priority</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput">time_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction">time_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_function_input`<sup>Optional</sup> <a name="time_function_input" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput"></a>

```python
time_function_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_function`<sup>Required</sup> <a name="time_function" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlertConditionTerm]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>]

---



