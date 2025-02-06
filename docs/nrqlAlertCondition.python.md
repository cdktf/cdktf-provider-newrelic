# `nrqlAlertCondition` Submodule <a name="`nrqlAlertCondition` Submodule" id="@cdktf/provider-newrelic.nrqlAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NrqlAlertCondition <a name="NrqlAlertCondition" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition newrelic_nrql_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertCondition(
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
  nrql: NrqlAlertConditionNrql,
  policy_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  aggregation_delay: str = None,
  aggregation_method: str = None,
  aggregation_timer: str = None,
  aggregation_window: typing.Union[int, float] = None,
  baseline_direction: str = None,
  close_violations_on_expiration: typing.Union[bool, IResolvable] = None,
  critical: NrqlAlertConditionCritical = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  evaluation_delay: typing.Union[int, float] = None,
  expiration_duration: typing.Union[int, float] = None,
  fill_option: str = None,
  fill_value: typing.Union[int, float] = None,
  id: str = None,
  ignore_on_expected_termination: typing.Union[bool, IResolvable] = None,
  open_violation_on_expiration: typing.Union[bool, IResolvable] = None,
  runbook_url: str = None,
  slide_by: typing.Union[int, float] = None,
  term: typing.Union[IResolvable, typing.List[NrqlAlertConditionTerm]] = None,
  timeouts: NrqlAlertConditionTimeouts = None,
  title_template: str = None,
  type: str = None,
  violation_time_limit: str = None,
  violation_time_limit_seconds: typing.Union[int, float] = None,
  warning: NrqlAlertConditionWarning = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.name">name</a></code> | <code>str</code> | The title of the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.nrql">nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | nrql block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID for managing your NRQL alert conditions. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationDelay">aggregation_delay</a></code> | <code>str</code> | How long we wait for data that belongs in each aggregation window. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationMethod">aggregation_method</a></code> | <code>str</code> | The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationTimer">aggregation_timer</a></code> | <code>str</code> | How long we wait after each data point arrives to make sure we've processed the whole batch. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationWindow">aggregation_window</a></code> | <code>typing.Union[int, float]</code> | The duration of the time window used to evaluate the NRQL query, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.baselineDirection">baseline_direction</a></code> | <code>str</code> | The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.closeViolationsOnExpiration">close_violations_on_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to close all open incidents when the signal expires. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the NRQL alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.evaluationDelay">evaluation_delay</a></code> | <code>typing.Union[int, float]</code> | How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.expirationDuration">expiration_duration</a></code> | <code>typing.Union[int, float]</code> | The amount of time (in seconds) to wait before considering the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.fillOption">fill_option</a></code> | <code>str</code> | Which strategy to use when filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.fillValue">fill_value</a></code> | <code>typing.Union[int, float]</code> | If using the 'static' fill option, this value will be used for filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.ignoreOnExpectedTermination">ignore_on_expected_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.openViolationOnExpiration">open_violation_on_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to create a new incident to capture that the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.slideBy">slide_by</a></code> | <code>typing.Union[int, float]</code> | The duration of overlapping time windows used to smooth the chart line, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.term">term</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]</code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.titleTemplate">title_template</a></code> | <code>str</code> | This field allows you to create a custom title to be used when incidents are opened by the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of NRQL alert condition to create. Valid values are: 'static', 'baseline'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.violationTimeLimit">violation_time_limit</a></code> | <code>str</code> | Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.violationTimeLimitSeconds">violation_time_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | warning block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.name"></a>

- *Type:* str

The title of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#name NrqlAlertCondition#name}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.nrql"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#nrql NrqlAlertCondition#nrql}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.policyId"></a>

- *Type:* typing.Union[int, float]

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#policy_id NrqlAlertCondition#policy_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID for managing your NRQL alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#account_id NrqlAlertCondition#account_id}

---

##### `aggregation_delay`<sup>Optional</sup> <a name="aggregation_delay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationDelay"></a>

- *Type:* str

How long we wait for data that belongs in each aggregation window.

Depending on your data, a longer delay may increase accuracy but delay notifications. Use aggregationDelay with the EVENT_FLOW and CADENCE aggregation methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#aggregation_delay NrqlAlertCondition#aggregation_delay}

---

##### `aggregation_method`<sup>Optional</sup> <a name="aggregation_method" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationMethod"></a>

- *Type:* str

The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents.

Default is EVENT_FLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#aggregation_method NrqlAlertCondition#aggregation_method}

---

##### `aggregation_timer`<sup>Optional</sup> <a name="aggregation_timer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationTimer"></a>

- *Type:* str

How long we wait after each data point arrives to make sure we've processed the whole batch.

Use aggregationTimer with the EVENT_TIMER aggregation method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#aggregation_timer NrqlAlertCondition#aggregation_timer}

---

##### `aggregation_window`<sup>Optional</sup> <a name="aggregation_window" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationWindow"></a>

- *Type:* typing.Union[int, float]

The duration of the time window used to evaluate the NRQL query, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#aggregation_window NrqlAlertCondition#aggregation_window}

---

##### `baseline_direction`<sup>Optional</sup> <a name="baseline_direction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.baselineDirection"></a>

- *Type:* str

The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#baseline_direction NrqlAlertCondition#baseline_direction}

---

##### `close_violations_on_expiration`<sup>Optional</sup> <a name="close_violations_on_expiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.closeViolationsOnExpiration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to close all open incidents when the signal expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#close_violations_on_expiration NrqlAlertCondition#close_violations_on_expiration}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.critical"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#critical NrqlAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.description"></a>

- *Type:* str

The description of the NRQL alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#description NrqlAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#enabled NrqlAlertCondition#enabled}

---

##### `evaluation_delay`<sup>Optional</sup> <a name="evaluation_delay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.evaluationDelay"></a>

- *Type:* typing.Union[int, float]

How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#evaluation_delay NrqlAlertCondition#evaluation_delay}

---

##### `expiration_duration`<sup>Optional</sup> <a name="expiration_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.expirationDuration"></a>

- *Type:* typing.Union[int, float]

The amount of time (in seconds) to wait before considering the signal expired.

Must be in the range of 30 to 172800 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#expiration_duration NrqlAlertCondition#expiration_duration}

---

##### `fill_option`<sup>Optional</sup> <a name="fill_option" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.fillOption"></a>

- *Type:* str

Which strategy to use when filling gaps in the signal.

If static, the 'fill value' will be used for filling gaps in the signal. Valid values are: 'NONE', 'LAST_VALUE', or 'STATIC' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#fill_option NrqlAlertCondition#fill_option}

---

##### `fill_value`<sup>Optional</sup> <a name="fill_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.fillValue"></a>

- *Type:* typing.Union[int, float]

If using the 'static' fill option, this value will be used for filling gaps in the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#fill_value NrqlAlertCondition#fill_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_on_expected_termination`<sup>Optional</sup> <a name="ignore_on_expected_termination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.ignoreOnExpectedTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#ignore_on_expected_termination NrqlAlertCondition#ignore_on_expected_termination}

---

##### `open_violation_on_expiration`<sup>Optional</sup> <a name="open_violation_on_expiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.openViolationOnExpiration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to create a new incident to capture that the signal expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#open_violation_on_expiration NrqlAlertCondition#open_violation_on_expiration}

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#runbook_url NrqlAlertCondition#runbook_url}

---

##### `slide_by`<sup>Optional</sup> <a name="slide_by" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.slideBy"></a>

- *Type:* typing.Union[int, float]

The duration of overlapping time windows used to smooth the chart line, in seconds.

Must be a factor of `aggregation_window` and less than the aggregation window. If `aggregation_window` is less than or equal to 3600 seconds, it should be greater or equal to 30 seconds. If `aggregation_window` is greater than 3600 seconds but less than 7200 seconds, it should be greater or equal to `aggregation_window / 120`.  If `aggregation_window` is greater than 7200 seconds, it should be greater or equal to `aggregation_window / 24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#slide_by NrqlAlertCondition#slide_by}

---

##### `term`<sup>Optional</sup> <a name="term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.term"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#term NrqlAlertCondition#term}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#timeouts NrqlAlertCondition#timeouts}

---

##### `title_template`<sup>Optional</sup> <a name="title_template" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.titleTemplate"></a>

- *Type:* str

This field allows you to create a custom title to be used when incidents are opened by the condition.

Setting this field will override the default title. Must be Handlebars format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#title_template NrqlAlertCondition#title_template}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.type"></a>

- *Type:* str

The type of NRQL alert condition to create. Valid values are: 'static', 'baseline'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#type NrqlAlertCondition#type}

---

##### `violation_time_limit`<sup>Optional</sup> <a name="violation_time_limit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.violationTimeLimit"></a>

- *Type:* str

Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select.

Possible values are 'ONE_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS', 'TWELVE_HOURS', 'TWENTY_FOUR_HOURS', 'THIRTY_DAYS' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#violation_time_limit NrqlAlertCondition#violation_time_limit}

---

##### `violation_time_limit_seconds`<sup>Optional</sup> <a name="violation_time_limit_seconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.violationTimeLimitSeconds"></a>

- *Type:* typing.Union[int, float]

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#violation_time_limit_seconds NrqlAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.warning"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#warning NrqlAlertCondition#warning}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical">put_critical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql">put_nrql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm">put_term</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning">put_warning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationDelay">reset_aggregation_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationMethod">reset_aggregation_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationTimer">reset_aggregation_timer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationWindow">reset_aggregation_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetBaselineDirection">reset_baseline_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCloseViolationsOnExpiration">reset_close_violations_on_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCritical">reset_critical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEvaluationDelay">reset_evaluation_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetExpirationDuration">reset_expiration_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillOption">reset_fill_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillValue">reset_fill_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetIgnoreOnExpectedTermination">reset_ignore_on_expected_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOpenViolationOnExpiration">reset_open_violation_on_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetRunbookUrl">reset_runbook_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSlideBy">reset_slide_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTerm">reset_term</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTitleTemplate">reset_title_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimit">reset_violation_time_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimitSeconds">reset_violation_time_limit_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetWarning">reset_warning</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_critical` <a name="put_critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical"></a>

```python
def put_critical(
  threshold: typing.Union[int, float],
  duration: typing.Union[int, float] = None,
  operator: str = None,
  threshold_duration: typing.Union[int, float] = None,
  threshold_occurrences: str = None,
  time_function: str = None
) -> None
```

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical.parameter.duration"></a>

- *Type:* typing.Union[int, float]

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical.parameter.operator"></a>

- *Type:* str

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

###### `threshold_duration`<sup>Optional</sup> <a name="threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical.parameter.thresholdDuration"></a>

- *Type:* typing.Union[int, float]

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

###### `threshold_occurrences`<sup>Optional</sup> <a name="threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical.parameter.thresholdOccurrences"></a>

- *Type:* str

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

###### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical.parameter.timeFunction"></a>

- *Type:* str

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

##### `put_nrql` <a name="put_nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql"></a>

```python
def put_nrql(
  query: str,
  data_account_id: typing.Union[int, float] = None,
  evaluation_offset: typing.Union[int, float] = None,
  since_value: str = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#query NrqlAlertCondition#query}.

---

###### `data_account_id`<sup>Optional</sup> <a name="data_account_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql.parameter.dataAccountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID to use as the basis for the NRQL alert condition's `query`;

will default to `account_id` if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#data_account_id NrqlAlertCondition#data_account_id}

---

###### `evaluation_offset`<sup>Optional</sup> <a name="evaluation_offset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql.parameter.evaluationOffset"></a>

- *Type:* typing.Union[int, float]

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `evaluation_offset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#evaluation_offset NrqlAlertCondition#evaluation_offset}

---

###### `since_value`<sup>Optional</sup> <a name="since_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql.parameter.sinceValue"></a>

- *Type:* str

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `since_value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#since_value NrqlAlertCondition#since_value}

---

##### `put_term` <a name="put_term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm"></a>

```python
def put_term(
  value: typing.Union[IResolvable, typing.List[NrqlAlertConditionTerm]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#create NrqlAlertCondition#create}.

---

##### `put_warning` <a name="put_warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning"></a>

```python
def put_warning(
  threshold: typing.Union[int, float],
  duration: typing.Union[int, float] = None,
  operator: str = None,
  threshold_duration: typing.Union[int, float] = None,
  threshold_occurrences: str = None,
  time_function: str = None
) -> None
```

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning.parameter.duration"></a>

- *Type:* typing.Union[int, float]

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning.parameter.operator"></a>

- *Type:* str

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

###### `threshold_duration`<sup>Optional</sup> <a name="threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning.parameter.thresholdDuration"></a>

- *Type:* typing.Union[int, float]

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

###### `threshold_occurrences`<sup>Optional</sup> <a name="threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning.parameter.thresholdOccurrences"></a>

- *Type:* str

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

###### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning.parameter.timeFunction"></a>

- *Type:* str

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_aggregation_delay` <a name="reset_aggregation_delay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationDelay"></a>

```python
def reset_aggregation_delay() -> None
```

##### `reset_aggregation_method` <a name="reset_aggregation_method" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationMethod"></a>

```python
def reset_aggregation_method() -> None
```

##### `reset_aggregation_timer` <a name="reset_aggregation_timer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationTimer"></a>

```python
def reset_aggregation_timer() -> None
```

##### `reset_aggregation_window` <a name="reset_aggregation_window" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationWindow"></a>

```python
def reset_aggregation_window() -> None
```

##### `reset_baseline_direction` <a name="reset_baseline_direction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetBaselineDirection"></a>

```python
def reset_baseline_direction() -> None
```

##### `reset_close_violations_on_expiration` <a name="reset_close_violations_on_expiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCloseViolationsOnExpiration"></a>

```python
def reset_close_violations_on_expiration() -> None
```

##### `reset_critical` <a name="reset_critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCritical"></a>

```python
def reset_critical() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_evaluation_delay` <a name="reset_evaluation_delay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEvaluationDelay"></a>

```python
def reset_evaluation_delay() -> None
```

##### `reset_expiration_duration` <a name="reset_expiration_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetExpirationDuration"></a>

```python
def reset_expiration_duration() -> None
```

##### `reset_fill_option` <a name="reset_fill_option" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillOption"></a>

```python
def reset_fill_option() -> None
```

##### `reset_fill_value` <a name="reset_fill_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillValue"></a>

```python
def reset_fill_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_on_expected_termination` <a name="reset_ignore_on_expected_termination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetIgnoreOnExpectedTermination"></a>

```python
def reset_ignore_on_expected_termination() -> None
```

##### `reset_open_violation_on_expiration` <a name="reset_open_violation_on_expiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOpenViolationOnExpiration"></a>

```python
def reset_open_violation_on_expiration() -> None
```

##### `reset_runbook_url` <a name="reset_runbook_url" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetRunbookUrl"></a>

```python
def reset_runbook_url() -> None
```

##### `reset_slide_by` <a name="reset_slide_by" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSlideBy"></a>

```python
def reset_slide_by() -> None
```

##### `reset_term` <a name="reset_term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTerm"></a>

```python
def reset_term() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_title_template` <a name="reset_title_template" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTitleTemplate"></a>

```python
def reset_title_template() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_violation_time_limit` <a name="reset_violation_time_limit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimit"></a>

```python
def reset_violation_time_limit() -> None
```

##### `reset_violation_time_limit_seconds` <a name="reset_violation_time_limit_seconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimitSeconds"></a>

```python
def reset_violation_time_limit_seconds() -> None
```

##### `reset_warning` <a name="reset_warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetWarning"></a>

```python
def reset_warning() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NrqlAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertCondition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertCondition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertCondition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertCondition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NrqlAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NrqlAlertCondition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NrqlAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NrqlAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference">NrqlAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.entityGuid">entity_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrql">nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference">NrqlAlertConditionNrqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.term">term</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList">NrqlAlertConditionTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference">NrqlAlertConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference">NrqlAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelayInput">aggregation_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethodInput">aggregation_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimerInput">aggregation_timer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindowInput">aggregation_window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirectionInput">baseline_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpirationInput">close_violations_on_expiration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.criticalInput">critical_input</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelayInput">evaluation_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDurationInput">expiration_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOptionInput">fill_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValueInput">fill_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTerminationInput">ignore_on_expected_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrqlInput">nrql_input</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpirationInput">open_violation_on_expiration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyIdInput">policy_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrlInput">runbook_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideByInput">slide_by_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.termInput">term_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplateInput">title_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitInput">violation_time_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSecondsInput">violation_time_limit_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warningInput">warning_input</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelay">aggregation_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethod">aggregation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimer">aggregation_timer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindow">aggregation_window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirection">baseline_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpiration">close_violations_on_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelay">evaluation_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDuration">expiration_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOption">fill_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValue">fill_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTermination">ignore_on_expected_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpiration">open_violation_on_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrl">runbook_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideBy">slide_by</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplate">title_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimit">violation_time_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSeconds">violation_time_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.critical"></a>

```python
critical: NrqlAlertConditionCriticalOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference">NrqlAlertConditionCriticalOutputReference</a>

---

##### `entity_guid`<sup>Required</sup> <a name="entity_guid" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.entityGuid"></a>

```python
entity_guid: str
```

- *Type:* str

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrql"></a>

```python
nrql: NrqlAlertConditionNrqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference">NrqlAlertConditionNrqlOutputReference</a>

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.term"></a>

```python
term: NrqlAlertConditionTermList
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList">NrqlAlertConditionTermList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeouts"></a>

```python
timeouts: NrqlAlertConditionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference">NrqlAlertConditionTimeoutsOutputReference</a>

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warning"></a>

```python
warning: NrqlAlertConditionWarningOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference">NrqlAlertConditionWarningOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregation_delay_input`<sup>Optional</sup> <a name="aggregation_delay_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelayInput"></a>

```python
aggregation_delay_input: str
```

- *Type:* str

---

##### `aggregation_method_input`<sup>Optional</sup> <a name="aggregation_method_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethodInput"></a>

```python
aggregation_method_input: str
```

- *Type:* str

---

##### `aggregation_timer_input`<sup>Optional</sup> <a name="aggregation_timer_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimerInput"></a>

```python
aggregation_timer_input: str
```

- *Type:* str

---

##### `aggregation_window_input`<sup>Optional</sup> <a name="aggregation_window_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindowInput"></a>

```python
aggregation_window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `baseline_direction_input`<sup>Optional</sup> <a name="baseline_direction_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirectionInput"></a>

```python
baseline_direction_input: str
```

- *Type:* str

---

##### `close_violations_on_expiration_input`<sup>Optional</sup> <a name="close_violations_on_expiration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpirationInput"></a>

```python
close_violations_on_expiration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `critical_input`<sup>Optional</sup> <a name="critical_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.criticalInput"></a>

```python
critical_input: NrqlAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `evaluation_delay_input`<sup>Optional</sup> <a name="evaluation_delay_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelayInput"></a>

```python
evaluation_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_duration_input`<sup>Optional</sup> <a name="expiration_duration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDurationInput"></a>

```python
expiration_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fill_option_input`<sup>Optional</sup> <a name="fill_option_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOptionInput"></a>

```python
fill_option_input: str
```

- *Type:* str

---

##### `fill_value_input`<sup>Optional</sup> <a name="fill_value_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValueInput"></a>

```python
fill_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_on_expected_termination_input`<sup>Optional</sup> <a name="ignore_on_expected_termination_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTerminationInput"></a>

```python
ignore_on_expected_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nrql_input`<sup>Optional</sup> <a name="nrql_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrqlInput"></a>

```python
nrql_input: NrqlAlertConditionNrql
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

---

##### `open_violation_on_expiration_input`<sup>Optional</sup> <a name="open_violation_on_expiration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpirationInput"></a>

```python
open_violation_on_expiration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyIdInput"></a>

```python
policy_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runbook_url_input`<sup>Optional</sup> <a name="runbook_url_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrlInput"></a>

```python
runbook_url_input: str
```

- *Type:* str

---

##### `slide_by_input`<sup>Optional</sup> <a name="slide_by_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideByInput"></a>

```python
slide_by_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `term_input`<sup>Optional</sup> <a name="term_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.termInput"></a>

```python
term_input: typing.Union[IResolvable, typing.List[NrqlAlertConditionTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NrqlAlertConditionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>]

---

##### `title_template_input`<sup>Optional</sup> <a name="title_template_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplateInput"></a>

```python
title_template_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `violation_time_limit_input`<sup>Optional</sup> <a name="violation_time_limit_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitInput"></a>

```python
violation_time_limit_input: str
```

- *Type:* str

---

##### `violation_time_limit_seconds_input`<sup>Optional</sup> <a name="violation_time_limit_seconds_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSecondsInput"></a>

```python
violation_time_limit_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warning_input`<sup>Optional</sup> <a name="warning_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warningInput"></a>

```python
warning_input: NrqlAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregation_delay`<sup>Required</sup> <a name="aggregation_delay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelay"></a>

```python
aggregation_delay: str
```

- *Type:* str

---

##### `aggregation_method`<sup>Required</sup> <a name="aggregation_method" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethod"></a>

```python
aggregation_method: str
```

- *Type:* str

---

##### `aggregation_timer`<sup>Required</sup> <a name="aggregation_timer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimer"></a>

```python
aggregation_timer: str
```

- *Type:* str

---

##### `aggregation_window`<sup>Required</sup> <a name="aggregation_window" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindow"></a>

```python
aggregation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `baseline_direction`<sup>Required</sup> <a name="baseline_direction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirection"></a>

```python
baseline_direction: str
```

- *Type:* str

---

##### `close_violations_on_expiration`<sup>Required</sup> <a name="close_violations_on_expiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpiration"></a>

```python
close_violations_on_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `evaluation_delay`<sup>Required</sup> <a name="evaluation_delay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelay"></a>

```python
evaluation_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_duration`<sup>Required</sup> <a name="expiration_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDuration"></a>

```python
expiration_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fill_option`<sup>Required</sup> <a name="fill_option" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOption"></a>

```python
fill_option: str
```

- *Type:* str

---

##### `fill_value`<sup>Required</sup> <a name="fill_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValue"></a>

```python
fill_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_on_expected_termination`<sup>Required</sup> <a name="ignore_on_expected_termination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTermination"></a>

```python
ignore_on_expected_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_violation_on_expiration`<sup>Required</sup> <a name="open_violation_on_expiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpiration"></a>

```python
open_violation_on_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runbook_url`<sup>Required</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

---

##### `slide_by`<sup>Required</sup> <a name="slide_by" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideBy"></a>

```python
slide_by: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `title_template`<sup>Required</sup> <a name="title_template" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplate"></a>

```python
title_template: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `violation_time_limit`<sup>Required</sup> <a name="violation_time_limit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimit"></a>

```python
violation_time_limit: str
```

- *Type:* str

---

##### `violation_time_limit_seconds`<sup>Required</sup> <a name="violation_time_limit_seconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSeconds"></a>

```python
violation_time_limit_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NrqlAlertConditionConfig <a name="NrqlAlertConditionConfig" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  nrql: NrqlAlertConditionNrql,
  policy_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  aggregation_delay: str = None,
  aggregation_method: str = None,
  aggregation_timer: str = None,
  aggregation_window: typing.Union[int, float] = None,
  baseline_direction: str = None,
  close_violations_on_expiration: typing.Union[bool, IResolvable] = None,
  critical: NrqlAlertConditionCritical = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  evaluation_delay: typing.Union[int, float] = None,
  expiration_duration: typing.Union[int, float] = None,
  fill_option: str = None,
  fill_value: typing.Union[int, float] = None,
  id: str = None,
  ignore_on_expected_termination: typing.Union[bool, IResolvable] = None,
  open_violation_on_expiration: typing.Union[bool, IResolvable] = None,
  runbook_url: str = None,
  slide_by: typing.Union[int, float] = None,
  term: typing.Union[IResolvable, typing.List[NrqlAlertConditionTerm]] = None,
  timeouts: NrqlAlertConditionTimeouts = None,
  title_template: str = None,
  type: str = None,
  violation_time_limit: str = None,
  violation_time_limit_seconds: typing.Union[int, float] = None,
  warning: NrqlAlertConditionWarning = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.name">name</a></code> | <code>str</code> | The title of the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.nrql">nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | nrql block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.policyId">policy_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID for managing your NRQL alert conditions. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationDelay">aggregation_delay</a></code> | <code>str</code> | How long we wait for data that belongs in each aggregation window. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationMethod">aggregation_method</a></code> | <code>str</code> | The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationTimer">aggregation_timer</a></code> | <code>str</code> | How long we wait after each data point arrives to make sure we've processed the whole batch. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationWindow">aggregation_window</a></code> | <code>typing.Union[int, float]</code> | The duration of the time window used to evaluate the NRQL query, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.baselineDirection">baseline_direction</a></code> | <code>str</code> | The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.closeViolationsOnExpiration">close_violations_on_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to close all open incidents when the signal expires. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.description">description</a></code> | <code>str</code> | The description of the NRQL alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.evaluationDelay">evaluation_delay</a></code> | <code>typing.Union[int, float]</code> | How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.expirationDuration">expiration_duration</a></code> | <code>typing.Union[int, float]</code> | The amount of time (in seconds) to wait before considering the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillOption">fill_option</a></code> | <code>str</code> | Which strategy to use when filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillValue">fill_value</a></code> | <code>typing.Union[int, float]</code> | If using the 'static' fill option, this value will be used for filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.ignoreOnExpectedTermination">ignore_on_expected_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.openViolationOnExpiration">open_violation_on_expiration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to create a new incident to capture that the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.runbookUrl">runbook_url</a></code> | <code>str</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.slideBy">slide_by</a></code> | <code>typing.Union[int, float]</code> | The duration of overlapping time windows used to smooth the chart line, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.term">term</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]</code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.titleTemplate">title_template</a></code> | <code>str</code> | This field allows you to create a custom title to be used when incidents are opened by the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.type">type</a></code> | <code>str</code> | The type of NRQL alert condition to create. Valid values are: 'static', 'baseline'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimit">violation_time_limit</a></code> | <code>str</code> | Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimitSeconds">violation_time_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | warning block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The title of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#name NrqlAlertCondition#name}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.nrql"></a>

```python
nrql: NrqlAlertConditionNrql
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#nrql NrqlAlertCondition#nrql}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.policyId"></a>

```python
policy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#policy_id NrqlAlertCondition#policy_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID for managing your NRQL alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#account_id NrqlAlertCondition#account_id}

---

##### `aggregation_delay`<sup>Optional</sup> <a name="aggregation_delay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationDelay"></a>

```python
aggregation_delay: str
```

- *Type:* str

How long we wait for data that belongs in each aggregation window.

Depending on your data, a longer delay may increase accuracy but delay notifications. Use aggregationDelay with the EVENT_FLOW and CADENCE aggregation methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#aggregation_delay NrqlAlertCondition#aggregation_delay}

---

##### `aggregation_method`<sup>Optional</sup> <a name="aggregation_method" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationMethod"></a>

```python
aggregation_method: str
```

- *Type:* str

The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents.

Default is EVENT_FLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#aggregation_method NrqlAlertCondition#aggregation_method}

---

##### `aggregation_timer`<sup>Optional</sup> <a name="aggregation_timer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationTimer"></a>

```python
aggregation_timer: str
```

- *Type:* str

How long we wait after each data point arrives to make sure we've processed the whole batch.

Use aggregationTimer with the EVENT_TIMER aggregation method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#aggregation_timer NrqlAlertCondition#aggregation_timer}

---

##### `aggregation_window`<sup>Optional</sup> <a name="aggregation_window" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationWindow"></a>

```python
aggregation_window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of the time window used to evaluate the NRQL query, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#aggregation_window NrqlAlertCondition#aggregation_window}

---

##### `baseline_direction`<sup>Optional</sup> <a name="baseline_direction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.baselineDirection"></a>

```python
baseline_direction: str
```

- *Type:* str

The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#baseline_direction NrqlAlertCondition#baseline_direction}

---

##### `close_violations_on_expiration`<sup>Optional</sup> <a name="close_violations_on_expiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.closeViolationsOnExpiration"></a>

```python
close_violations_on_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to close all open incidents when the signal expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#close_violations_on_expiration NrqlAlertCondition#close_violations_on_expiration}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.critical"></a>

```python
critical: NrqlAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#critical NrqlAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the NRQL alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#description NrqlAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#enabled NrqlAlertCondition#enabled}

---

##### `evaluation_delay`<sup>Optional</sup> <a name="evaluation_delay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.evaluationDelay"></a>

```python
evaluation_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#evaluation_delay NrqlAlertCondition#evaluation_delay}

---

##### `expiration_duration`<sup>Optional</sup> <a name="expiration_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.expirationDuration"></a>

```python
expiration_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time (in seconds) to wait before considering the signal expired.

Must be in the range of 30 to 172800 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#expiration_duration NrqlAlertCondition#expiration_duration}

---

##### `fill_option`<sup>Optional</sup> <a name="fill_option" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillOption"></a>

```python
fill_option: str
```

- *Type:* str

Which strategy to use when filling gaps in the signal.

If static, the 'fill value' will be used for filling gaps in the signal. Valid values are: 'NONE', 'LAST_VALUE', or 'STATIC' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#fill_option NrqlAlertCondition#fill_option}

---

##### `fill_value`<sup>Optional</sup> <a name="fill_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillValue"></a>

```python
fill_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If using the 'static' fill option, this value will be used for filling gaps in the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#fill_value NrqlAlertCondition#fill_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_on_expected_termination`<sup>Optional</sup> <a name="ignore_on_expected_termination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.ignoreOnExpectedTermination"></a>

```python
ignore_on_expected_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#ignore_on_expected_termination NrqlAlertCondition#ignore_on_expected_termination}

---

##### `open_violation_on_expiration`<sup>Optional</sup> <a name="open_violation_on_expiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.openViolationOnExpiration"></a>

```python
open_violation_on_expiration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to create a new incident to capture that the signal expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#open_violation_on_expiration NrqlAlertCondition#open_violation_on_expiration}

---

##### `runbook_url`<sup>Optional</sup> <a name="runbook_url" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.runbookUrl"></a>

```python
runbook_url: str
```

- *Type:* str

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#runbook_url NrqlAlertCondition#runbook_url}

---

##### `slide_by`<sup>Optional</sup> <a name="slide_by" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.slideBy"></a>

```python
slide_by: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of overlapping time windows used to smooth the chart line, in seconds.

Must be a factor of `aggregation_window` and less than the aggregation window. If `aggregation_window` is less than or equal to 3600 seconds, it should be greater or equal to 30 seconds. If `aggregation_window` is greater than 3600 seconds but less than 7200 seconds, it should be greater or equal to `aggregation_window / 120`.  If `aggregation_window` is greater than 7200 seconds, it should be greater or equal to `aggregation_window / 24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#slide_by NrqlAlertCondition#slide_by}

---

##### `term`<sup>Optional</sup> <a name="term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.term"></a>

```python
term: typing.Union[IResolvable, typing.List[NrqlAlertConditionTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#term NrqlAlertCondition#term}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.timeouts"></a>

```python
timeouts: NrqlAlertConditionTimeouts
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#timeouts NrqlAlertCondition#timeouts}

---

##### `title_template`<sup>Optional</sup> <a name="title_template" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.titleTemplate"></a>

```python
title_template: str
```

- *Type:* str

This field allows you to create a custom title to be used when incidents are opened by the condition.

Setting this field will override the default title. Must be Handlebars format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#title_template NrqlAlertCondition#title_template}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of NRQL alert condition to create. Valid values are: 'static', 'baseline'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#type NrqlAlertCondition#type}

---

##### `violation_time_limit`<sup>Optional</sup> <a name="violation_time_limit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimit"></a>

```python
violation_time_limit: str
```

- *Type:* str

Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select.

Possible values are 'ONE_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS', 'TWELVE_HOURS', 'TWENTY_FOUR_HOURS', 'THIRTY_DAYS' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#violation_time_limit NrqlAlertCondition#violation_time_limit}

---

##### `violation_time_limit_seconds`<sup>Optional</sup> <a name="violation_time_limit_seconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```python
violation_time_limit_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#violation_time_limit_seconds NrqlAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.warning"></a>

```python
warning: NrqlAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#warning NrqlAlertCondition#warning}

---

### NrqlAlertConditionCritical <a name="NrqlAlertConditionCritical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionCritical(
  threshold: typing.Union[int, float],
  duration: typing.Union[int, float] = None,
  operator: str = None,
  threshold_duration: typing.Union[int, float] = None,
  threshold_occurrences: str = None,
  time_function: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.operator">operator</a></code> | <code>str</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdOccurrences">threshold_occurrences</a></code> | <code>str</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.timeFunction">time_function</a></code> | <code>str</code> | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.operator"></a>

```python
operator: str
```

- *Type:* str

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `threshold_duration`<sup>Optional</sup> <a name="threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdDuration"></a>

```python
threshold_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `threshold_occurrences`<sup>Optional</sup> <a name="threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdOccurrences"></a>

```python
threshold_occurrences: str
```

- *Type:* str

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionNrql <a name="NrqlAlertConditionNrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionNrql(
  query: str,
  data_account_id: typing.Union[int, float] = None,
  evaluation_offset: typing.Union[int, float] = None,
  since_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#query NrqlAlertCondition#query}. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.dataAccountId">data_account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID to use as the basis for the NRQL alert condition's `query`; |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.evaluationOffset">evaluation_offset</a></code> | <code>typing.Union[int, float]</code> | NRQL queries are evaluated in one-minute time windows. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.sinceValue">since_value</a></code> | <code>str</code> | NRQL queries are evaluated in one-minute time windows. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#query NrqlAlertCondition#query}.

---

##### `data_account_id`<sup>Optional</sup> <a name="data_account_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.dataAccountId"></a>

```python
data_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID to use as the basis for the NRQL alert condition's `query`;

will default to `account_id` if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#data_account_id NrqlAlertCondition#data_account_id}

---

##### `evaluation_offset`<sup>Optional</sup> <a name="evaluation_offset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.evaluationOffset"></a>

```python
evaluation_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `evaluation_offset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#evaluation_offset NrqlAlertCondition#evaluation_offset}

---

##### `since_value`<sup>Optional</sup> <a name="since_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.sinceValue"></a>

```python
since_value: str
```

- *Type:* str

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `since_value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#since_value NrqlAlertCondition#since_value}

---

### NrqlAlertConditionTerm <a name="NrqlAlertConditionTerm" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionTerm(
  threshold: typing.Union[int, float],
  duration: typing.Union[int, float] = None,
  operator: str = None,
  priority: str = None,
  threshold_duration: typing.Union[int, float] = None,
  threshold_occurrences: str = None,
  time_function: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.operator">operator</a></code> | <code>str</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.priority">priority</a></code> | <code>str</code> | One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdOccurrences">threshold_occurrences</a></code> | <code>str</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.timeFunction">time_function</a></code> | <code>str</code> | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.operator"></a>

```python
operator: str
```

- *Type:* str

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.priority"></a>

```python
priority: str
```

- *Type:* str

One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#priority NrqlAlertCondition#priority}

---

##### `threshold_duration`<sup>Optional</sup> <a name="threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdDuration"></a>

```python
threshold_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `threshold_occurrences`<sup>Optional</sup> <a name="threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdOccurrences"></a>

```python
threshold_occurrences: str
```

- *Type:* str

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionTimeouts <a name="NrqlAlertConditionTimeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#create NrqlAlertCondition#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#create NrqlAlertCondition#create}.

---

### NrqlAlertConditionWarning <a name="NrqlAlertConditionWarning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionWarning(
  threshold: typing.Union[int, float],
  duration: typing.Union[int, float] = None,
  operator: str = None,
  threshold_duration: typing.Union[int, float] = None,
  threshold_occurrences: str = None,
  time_function: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.operator">operator</a></code> | <code>str</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdOccurrences">threshold_occurrences</a></code> | <code>str</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.timeFunction">time_function</a></code> | <code>str</code> | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.operator"></a>

```python
operator: str
```

- *Type:* str

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `threshold_duration`<sup>Optional</sup> <a name="threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdDuration"></a>

```python
threshold_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `threshold_occurrences`<sup>Optional</sup> <a name="threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdOccurrences"></a>

```python
threshold_occurrences: str
```

- *Type:* str

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `time_function`<sup>Optional</sup> <a name="time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.55.0/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

## Classes <a name="Classes" id="Classes"></a>

### NrqlAlertConditionCriticalOutputReference <a name="NrqlAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdDuration">reset_threshold_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdOccurrences">reset_threshold_occurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetTimeFunction">reset_time_function</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_threshold_duration` <a name="reset_threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdDuration"></a>

```python
def reset_threshold_duration() -> None
```

##### `reset_threshold_occurrences` <a name="reset_threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdOccurrences"></a>

```python
def reset_threshold_occurrences() -> None
```

##### `reset_time_function` <a name="reset_time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```python
def reset_time_function() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDurationInput">threshold_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrencesInput">threshold_occurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunctionInput">time_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrences">threshold_occurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunction">time_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `threshold_duration_input`<sup>Optional</sup> <a name="threshold_duration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDurationInput"></a>

```python
threshold_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_occurrences_input`<sup>Optional</sup> <a name="threshold_occurrences_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrencesInput"></a>

```python
threshold_occurrences_input: str
```

- *Type:* str

---

##### `time_function_input`<sup>Optional</sup> <a name="time_function_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```python
time_function_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_duration`<sup>Required</sup> <a name="threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDuration"></a>

```python
threshold_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_occurrences`<sup>Required</sup> <a name="threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrences"></a>

```python
threshold_occurrences: str
```

- *Type:* str

---

##### `time_function`<sup>Required</sup> <a name="time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.internalValue"></a>

```python
internal_value: NrqlAlertConditionCritical
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

---


### NrqlAlertConditionNrqlOutputReference <a name="NrqlAlertConditionNrqlOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetDataAccountId">reset_data_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetEvaluationOffset">reset_evaluation_offset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetSinceValue">reset_since_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_account_id` <a name="reset_data_account_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetDataAccountId"></a>

```python
def reset_data_account_id() -> None
```

##### `reset_evaluation_offset` <a name="reset_evaluation_offset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetEvaluationOffset"></a>

```python
def reset_evaluation_offset() -> None
```

##### `reset_since_value` <a name="reset_since_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetSinceValue"></a>

```python
def reset_since_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountIdInput">data_account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffsetInput">evaluation_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValueInput">since_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountId">data_account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffset">evaluation_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValue">since_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_account_id_input`<sup>Optional</sup> <a name="data_account_id_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountIdInput"></a>

```python
data_account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_offset_input`<sup>Optional</sup> <a name="evaluation_offset_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffsetInput"></a>

```python
evaluation_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `since_value_input`<sup>Optional</sup> <a name="since_value_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValueInput"></a>

```python
since_value_input: str
```

- *Type:* str

---

##### `data_account_id`<sup>Required</sup> <a name="data_account_id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountId"></a>

```python
data_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_offset`<sup>Required</sup> <a name="evaluation_offset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffset"></a>

```python
evaluation_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `since_value`<sup>Required</sup> <a name="since_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValue"></a>

```python
since_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.internalValue"></a>

```python
internal_value: NrqlAlertConditionNrql
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

---


### NrqlAlertConditionTermList <a name="NrqlAlertConditionTermList" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionTermList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NrqlAlertConditionTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NrqlAlertConditionTerm]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]]

---


### NrqlAlertConditionTermOutputReference <a name="NrqlAlertConditionTermOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionTermOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdDuration">reset_threshold_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdOccurrences">reset_threshold_occurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetTimeFunction">reset_time_function</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_threshold_duration` <a name="reset_threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdDuration"></a>

```python
def reset_threshold_duration() -> None
```

##### `reset_threshold_occurrences` <a name="reset_threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdOccurrences"></a>

```python
def reset_threshold_occurrences() -> None
```

##### `reset_time_function` <a name="reset_time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetTimeFunction"></a>

```python
def reset_time_function() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priorityInput">priority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDurationInput">threshold_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrencesInput">threshold_occurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunctionInput">time_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrences">threshold_occurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunction">time_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priorityInput"></a>

```python
priority_input: str
```

- *Type:* str

---

##### `threshold_duration_input`<sup>Optional</sup> <a name="threshold_duration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDurationInput"></a>

```python
threshold_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_occurrences_input`<sup>Optional</sup> <a name="threshold_occurrences_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrencesInput"></a>

```python
threshold_occurrences_input: str
```

- *Type:* str

---

##### `time_function_input`<sup>Optional</sup> <a name="time_function_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunctionInput"></a>

```python
time_function_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_duration`<sup>Required</sup> <a name="threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDuration"></a>

```python
threshold_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_occurrences`<sup>Required</sup> <a name="threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrences"></a>

```python
threshold_occurrences: str
```

- *Type:* str

---

##### `time_function`<sup>Required</sup> <a name="time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NrqlAlertConditionTerm]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>]

---


### NrqlAlertConditionTimeoutsOutputReference <a name="NrqlAlertConditionTimeoutsOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NrqlAlertConditionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>]

---


### NrqlAlertConditionWarningOutputReference <a name="NrqlAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import nrql_alert_condition

nrqlAlertCondition.NrqlAlertConditionWarningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdDuration">reset_threshold_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdOccurrences">reset_threshold_occurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetTimeFunction">reset_time_function</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_threshold_duration` <a name="reset_threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdDuration"></a>

```python
def reset_threshold_duration() -> None
```

##### `reset_threshold_occurrences` <a name="reset_threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdOccurrences"></a>

```python
def reset_threshold_occurrences() -> None
```

##### `reset_time_function` <a name="reset_time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetTimeFunction"></a>

```python
def reset_time_function() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDurationInput">threshold_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrencesInput">threshold_occurrences_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunctionInput">time_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDuration">threshold_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrences">threshold_occurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunction">time_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `threshold_duration_input`<sup>Optional</sup> <a name="threshold_duration_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDurationInput"></a>

```python
threshold_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_occurrences_input`<sup>Optional</sup> <a name="threshold_occurrences_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrencesInput"></a>

```python
threshold_occurrences_input: str
```

- *Type:* str

---

##### `time_function_input`<sup>Optional</sup> <a name="time_function_input" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```python
time_function_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_duration`<sup>Required</sup> <a name="threshold_duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDuration"></a>

```python
threshold_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold_occurrences`<sup>Required</sup> <a name="threshold_occurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrences"></a>

```python
threshold_occurrences: str
```

- *Type:* str

---

##### `time_function`<sup>Required</sup> <a name="time_function" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunction"></a>

```python
time_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.internalValue"></a>

```python
internal_value: NrqlAlertConditionWarning
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

---



