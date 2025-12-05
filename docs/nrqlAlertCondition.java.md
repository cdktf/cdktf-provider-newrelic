# `nrqlAlertCondition` Submodule <a name="`nrqlAlertCondition` Submodule" id="@cdktf/provider-newrelic.nrqlAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NrqlAlertCondition <a name="NrqlAlertCondition" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition newrelic_nrql_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertCondition;

NrqlAlertCondition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .nrql(NrqlAlertConditionNrql)
    .policyId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .aggregationDelay(java.lang.String)
//  .aggregationMethod(java.lang.String)
//  .aggregationTimer(java.lang.String)
//  .aggregationWindow(java.lang.Number)
//  .baselineDirection(java.lang.String)
//  .closeViolationsOnExpiration(java.lang.Boolean|IResolvable)
//  .critical(NrqlAlertConditionCritical)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .evaluationDelay(java.lang.Number)
//  .expirationDuration(java.lang.Number)
//  .fillOption(java.lang.String)
//  .fillValue(java.lang.Number)
//  .id(java.lang.String)
//  .ignoreOnExpectedTermination(java.lang.Boolean|IResolvable)
//  .openViolationOnExpiration(java.lang.Boolean|IResolvable)
//  .outlierConfiguration(NrqlAlertConditionOutlierConfiguration)
//  .runbookUrl(java.lang.String)
//  .signalSeasonality(java.lang.String)
//  .slideBy(java.lang.Number)
//  .targetEntity(java.lang.String)
//  .term(IResolvable|java.util.List<NrqlAlertConditionTerm>)
//  .timeouts(NrqlAlertConditionTimeouts)
//  .titleTemplate(java.lang.String)
//  .type(java.lang.String)
//  .violationTimeLimit(java.lang.String)
//  .violationTimeLimitSeconds(java.lang.Number)
//  .warning(NrqlAlertConditionWarning)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The title of the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.nrql">nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | nrql block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID for managing your NRQL alert conditions. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationDelay">aggregationDelay</a></code> | <code>java.lang.String</code> | How long we wait for data that belongs in each aggregation window. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationMethod">aggregationMethod</a></code> | <code>java.lang.String</code> | The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationTimer">aggregationTimer</a></code> | <code>java.lang.String</code> | How long we wait after each data point arrives to make sure we've processed the whole batch. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationWindow">aggregationWindow</a></code> | <code>java.lang.Number</code> | The duration of the time window used to evaluate the NRQL query, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.baselineDirection">baselineDirection</a></code> | <code>java.lang.String</code> | The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.closeViolationsOnExpiration">closeViolationsOnExpiration</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to close all open incidents when the signal expires. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the NRQL alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.evaluationDelay">evaluationDelay</a></code> | <code>java.lang.Number</code> | How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.expirationDuration">expirationDuration</a></code> | <code>java.lang.Number</code> | The amount of time (in seconds) to wait before considering the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.fillOption">fillOption</a></code> | <code>java.lang.String</code> | Which strategy to use when filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.fillValue">fillValue</a></code> | <code>java.lang.Number</code> | If using the 'static' fill option, this value will be used for filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.ignoreOnExpectedTermination">ignoreOnExpectedTermination</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.openViolationOnExpiration">openViolationOnExpiration</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to create a new incident to capture that the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.outlierConfiguration">outlierConfiguration</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a></code> | outlier_configuration block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.signalSeasonality">signalSeasonality</a></code> | <code>java.lang.String</code> | Seasonality under which a condition's signal(s) are evaluated. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.slideBy">slideBy</a></code> | <code>java.lang.Number</code> | The duration of overlapping time windows used to smooth the chart line, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.targetEntity">targetEntity</a></code> | <code>java.lang.String</code> | BETA PREVIEW: the `target_entity` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.term">term</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>></code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.titleTemplate">titleTemplate</a></code> | <code>java.lang.String</code> | This field allows you to create a custom title to be used when incidents are opened by the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of NRQL alert condition to create. Valid values are: 'static', 'baseline', 'outlier'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.violationTimeLimit">violationTimeLimit</a></code> | <code>java.lang.String</code> | Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.violationTimeLimitSeconds">violationTimeLimitSeconds</a></code> | <code>java.lang.Number</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | warning block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The title of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#name NrqlAlertCondition#name}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.nrql"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#nrql NrqlAlertCondition#nrql}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.policyId"></a>

- *Type:* java.lang.Number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#policy_id NrqlAlertCondition#policy_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID for managing your NRQL alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#account_id NrqlAlertCondition#account_id}

---

##### `aggregationDelay`<sup>Optional</sup> <a name="aggregationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationDelay"></a>

- *Type:* java.lang.String

How long we wait for data that belongs in each aggregation window.

Depending on your data, a longer delay may increase accuracy but delay notifications. Use aggregationDelay with the EVENT_FLOW and CADENCE aggregation methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#aggregation_delay NrqlAlertCondition#aggregation_delay}

---

##### `aggregationMethod`<sup>Optional</sup> <a name="aggregationMethod" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationMethod"></a>

- *Type:* java.lang.String

The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents.

Default is EVENT_FLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#aggregation_method NrqlAlertCondition#aggregation_method}

---

##### `aggregationTimer`<sup>Optional</sup> <a name="aggregationTimer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationTimer"></a>

- *Type:* java.lang.String

How long we wait after each data point arrives to make sure we've processed the whole batch.

Use aggregationTimer with the EVENT_TIMER aggregation method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#aggregation_timer NrqlAlertCondition#aggregation_timer}

---

##### `aggregationWindow`<sup>Optional</sup> <a name="aggregationWindow" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.aggregationWindow"></a>

- *Type:* java.lang.Number

The duration of the time window used to evaluate the NRQL query, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#aggregation_window NrqlAlertCondition#aggregation_window}

---

##### `baselineDirection`<sup>Optional</sup> <a name="baselineDirection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.baselineDirection"></a>

- *Type:* java.lang.String

The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#baseline_direction NrqlAlertCondition#baseline_direction}

---

##### `closeViolationsOnExpiration`<sup>Optional</sup> <a name="closeViolationsOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.closeViolationsOnExpiration"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to close all open incidents when the signal expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#close_violations_on_expiration NrqlAlertCondition#close_violations_on_expiration}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.critical"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#critical NrqlAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the NRQL alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#description NrqlAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#enabled NrqlAlertCondition#enabled}

---

##### `evaluationDelay`<sup>Optional</sup> <a name="evaluationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.evaluationDelay"></a>

- *Type:* java.lang.Number

How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#evaluation_delay NrqlAlertCondition#evaluation_delay}

---

##### `expirationDuration`<sup>Optional</sup> <a name="expirationDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.expirationDuration"></a>

- *Type:* java.lang.Number

The amount of time (in seconds) to wait before considering the signal expired.

Must be in the range of 30 to 172800 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#expiration_duration NrqlAlertCondition#expiration_duration}

---

##### `fillOption`<sup>Optional</sup> <a name="fillOption" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.fillOption"></a>

- *Type:* java.lang.String

Which strategy to use when filling gaps in the signal.

If static, the 'fill value' will be used for filling gaps in the signal. Valid values are: 'NONE', 'LAST_VALUE', or 'STATIC' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#fill_option NrqlAlertCondition#fill_option}

---

##### `fillValue`<sup>Optional</sup> <a name="fillValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.fillValue"></a>

- *Type:* java.lang.Number

If using the 'static' fill option, this value will be used for filling gaps in the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#fill_value NrqlAlertCondition#fill_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreOnExpectedTermination`<sup>Optional</sup> <a name="ignoreOnExpectedTermination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.ignoreOnExpectedTermination"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#ignore_on_expected_termination NrqlAlertCondition#ignore_on_expected_termination}

---

##### `openViolationOnExpiration`<sup>Optional</sup> <a name="openViolationOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.openViolationOnExpiration"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to create a new incident to capture that the signal expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#open_violation_on_expiration NrqlAlertCondition#open_violation_on_expiration}

---

##### `outlierConfiguration`<sup>Optional</sup> <a name="outlierConfiguration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.outlierConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a>

outlier_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#outlier_configuration NrqlAlertCondition#outlier_configuration}

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#runbook_url NrqlAlertCondition#runbook_url}

---

##### `signalSeasonality`<sup>Optional</sup> <a name="signalSeasonality" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.signalSeasonality"></a>

- *Type:* java.lang.String

Seasonality under which a condition's signal(s) are evaluated.

Valid values are: 'NEW_RELIC_CALCULATION', 'HOURLY', 'DAILY', 'WEEKLY', or 'NONE'. To have New Relic calculate seasonality automatically, set to 'NEW_RELIC_CALCULATION' (default). To turn off seasonality completely, set to 'NONE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#signal_seasonality NrqlAlertCondition#signal_seasonality}

---

##### `slideBy`<sup>Optional</sup> <a name="slideBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.slideBy"></a>

- *Type:* java.lang.Number

The duration of overlapping time windows used to smooth the chart line, in seconds.

Must be a factor of `aggregation_window` and less than the aggregation window. If `aggregation_window` is less than or equal to 3600 seconds, it should be greater or equal to 30 seconds. If `aggregation_window` is greater than 3600 seconds but less than 7200 seconds, it should be greater or equal to `aggregation_window / 120`.  If `aggregation_window` is greater than 7200 seconds, it should be greater or equal to `aggregation_window / 24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#slide_by NrqlAlertCondition#slide_by}

---

##### `targetEntity`<sup>Optional</sup> <a name="targetEntity" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.targetEntity"></a>

- *Type:* java.lang.String

BETA PREVIEW: the `target_entity` field is in limited release and only enabled for preview on a per-account basis.

* The GUID of the entity explicitly targeted by the condition. Issues triggered by this condition will affect the health status of this entity instead of having the affected entity detected automatically

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#target_entity NrqlAlertCondition#target_entity}

---

##### `term`<sup>Optional</sup> <a name="term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.term"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>>

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#term NrqlAlertCondition#term}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#timeouts NrqlAlertCondition#timeouts}

---

##### `titleTemplate`<sup>Optional</sup> <a name="titleTemplate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.titleTemplate"></a>

- *Type:* java.lang.String

This field allows you to create a custom title to be used when incidents are opened by the condition.

Setting this field will override the default title. Must be Handlebars format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#title_template NrqlAlertCondition#title_template}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of NRQL alert condition to create. Valid values are: 'static', 'baseline', 'outlier'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#type NrqlAlertCondition#type}

---

##### `violationTimeLimit`<sup>Optional</sup> <a name="violationTimeLimit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.violationTimeLimit"></a>

- *Type:* java.lang.String

Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select.

Possible values are 'ONE_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS', 'TWELVE_HOURS', 'TWENTY_FOUR_HOURS', 'THIRTY_DAYS' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#violation_time_limit NrqlAlertCondition#violation_time_limit}

---

##### `violationTimeLimitSeconds`<sup>Optional</sup> <a name="violationTimeLimitSeconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.violationTimeLimitSeconds"></a>

- *Type:* java.lang.Number

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#violation_time_limit_seconds NrqlAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.Initializer.parameter.warning"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#warning NrqlAlertCondition#warning}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical">putCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql">putNrql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putOutlierConfiguration">putOutlierConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm">putTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning">putWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationDelay">resetAggregationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationMethod">resetAggregationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationTimer">resetAggregationTimer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationWindow">resetAggregationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetBaselineDirection">resetBaselineDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCloseViolationsOnExpiration">resetCloseViolationsOnExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEvaluationDelay">resetEvaluationDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetExpirationDuration">resetExpirationDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillOption">resetFillOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillValue">resetFillValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetIgnoreOnExpectedTermination">resetIgnoreOnExpectedTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOpenViolationOnExpiration">resetOpenViolationOnExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOutlierConfiguration">resetOutlierConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSignalSeasonality">resetSignalSeasonality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSlideBy">resetSlideBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTargetEntity">resetTargetEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTerm">resetTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTitleTemplate">resetTitleTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimit">resetViolationTimeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimitSeconds">resetViolationTimeLimitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetWarning">resetWarning</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCritical` <a name="putCritical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical"></a>

```java
public void putCritical(NrqlAlertConditionCritical value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

---

##### `putNrql` <a name="putNrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql"></a>

```java
public void putNrql(NrqlAlertConditionNrql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putNrql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

---

##### `putOutlierConfiguration` <a name="putOutlierConfiguration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putOutlierConfiguration"></a>

```java
public void putOutlierConfiguration(NrqlAlertConditionOutlierConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putOutlierConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a>

---

##### `putTerm` <a name="putTerm" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm"></a>

```java
public void putTerm(IResolvable|java.util.List<NrqlAlertConditionTerm> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTerm.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts"></a>

```java
public void putTimeouts(NrqlAlertConditionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

---

##### `putWarning` <a name="putWarning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning"></a>

```java
public void putWarning(NrqlAlertConditionWarning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAggregationDelay` <a name="resetAggregationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationDelay"></a>

```java
public void resetAggregationDelay()
```

##### `resetAggregationMethod` <a name="resetAggregationMethod" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationMethod"></a>

```java
public void resetAggregationMethod()
```

##### `resetAggregationTimer` <a name="resetAggregationTimer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationTimer"></a>

```java
public void resetAggregationTimer()
```

##### `resetAggregationWindow` <a name="resetAggregationWindow" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetAggregationWindow"></a>

```java
public void resetAggregationWindow()
```

##### `resetBaselineDirection` <a name="resetBaselineDirection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetBaselineDirection"></a>

```java
public void resetBaselineDirection()
```

##### `resetCloseViolationsOnExpiration` <a name="resetCloseViolationsOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCloseViolationsOnExpiration"></a>

```java
public void resetCloseViolationsOnExpiration()
```

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetCritical"></a>

```java
public void resetCritical()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEvaluationDelay` <a name="resetEvaluationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetEvaluationDelay"></a>

```java
public void resetEvaluationDelay()
```

##### `resetExpirationDuration` <a name="resetExpirationDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetExpirationDuration"></a>

```java
public void resetExpirationDuration()
```

##### `resetFillOption` <a name="resetFillOption" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillOption"></a>

```java
public void resetFillOption()
```

##### `resetFillValue` <a name="resetFillValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetFillValue"></a>

```java
public void resetFillValue()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreOnExpectedTermination` <a name="resetIgnoreOnExpectedTermination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetIgnoreOnExpectedTermination"></a>

```java
public void resetIgnoreOnExpectedTermination()
```

##### `resetOpenViolationOnExpiration` <a name="resetOpenViolationOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOpenViolationOnExpiration"></a>

```java
public void resetOpenViolationOnExpiration()
```

##### `resetOutlierConfiguration` <a name="resetOutlierConfiguration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetOutlierConfiguration"></a>

```java
public void resetOutlierConfiguration()
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetRunbookUrl"></a>

```java
public void resetRunbookUrl()
```

##### `resetSignalSeasonality` <a name="resetSignalSeasonality" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSignalSeasonality"></a>

```java
public void resetSignalSeasonality()
```

##### `resetSlideBy` <a name="resetSlideBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetSlideBy"></a>

```java
public void resetSlideBy()
```

##### `resetTargetEntity` <a name="resetTargetEntity" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTargetEntity"></a>

```java
public void resetTargetEntity()
```

##### `resetTerm` <a name="resetTerm" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTerm"></a>

```java
public void resetTerm()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTitleTemplate` <a name="resetTitleTemplate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetTitleTemplate"></a>

```java
public void resetTitleTemplate()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetType"></a>

```java
public void resetType()
```

##### `resetViolationTimeLimit` <a name="resetViolationTimeLimit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimit"></a>

```java
public void resetViolationTimeLimit()
```

##### `resetViolationTimeLimitSeconds` <a name="resetViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetViolationTimeLimitSeconds"></a>

```java
public void resetViolationTimeLimitSeconds()
```

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.resetWarning"></a>

```java
public void resetWarning()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NrqlAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertCondition;

NrqlAlertCondition.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertCondition;

NrqlAlertCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertCondition;

NrqlAlertCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertCondition;

NrqlAlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NrqlAlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NrqlAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NrqlAlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NrqlAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NrqlAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference">NrqlAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.entityGuid">entityGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrql">nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference">NrqlAlertConditionNrqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.outlierConfiguration">outlierConfiguration</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference">NrqlAlertConditionOutlierConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.term">term</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList">NrqlAlertConditionTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference">NrqlAlertConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference">NrqlAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelayInput">aggregationDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethodInput">aggregationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimerInput">aggregationTimerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindowInput">aggregationWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirectionInput">baselineDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpirationInput">closeViolationsOnExpirationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.criticalInput">criticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelayInput">evaluationDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDurationInput">expirationDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOptionInput">fillOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValueInput">fillValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTerminationInput">ignoreOnExpectedTerminationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrqlInput">nrqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpirationInput">openViolationOnExpirationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.outlierConfigurationInput">outlierConfigurationInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.signalSeasonalityInput">signalSeasonalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideByInput">slideByInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.targetEntityInput">targetEntityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.termInput">termInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplateInput">titleTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitInput">violationTimeLimitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSecondsInput">violationTimeLimitSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warningInput">warningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelay">aggregationDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethod">aggregationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimer">aggregationTimer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindow">aggregationWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirection">baselineDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpiration">closeViolationsOnExpiration</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelay">evaluationDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDuration">expirationDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOption">fillOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValue">fillValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTermination">ignoreOnExpectedTermination</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpiration">openViolationOnExpiration</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.signalSeasonality">signalSeasonality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideBy">slideBy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.targetEntity">targetEntity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplate">titleTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimit">violationTimeLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSeconds">violationTimeLimitSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.critical"></a>

```java
public NrqlAlertConditionCriticalOutputReference getCritical();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference">NrqlAlertConditionCriticalOutputReference</a>

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.entityGuid"></a>

```java
public java.lang.String getEntityGuid();
```

- *Type:* java.lang.String

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrql"></a>

```java
public NrqlAlertConditionNrqlOutputReference getNrql();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference">NrqlAlertConditionNrqlOutputReference</a>

---

##### `outlierConfiguration`<sup>Required</sup> <a name="outlierConfiguration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.outlierConfiguration"></a>

```java
public NrqlAlertConditionOutlierConfigurationOutputReference getOutlierConfiguration();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference">NrqlAlertConditionOutlierConfigurationOutputReference</a>

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.term"></a>

```java
public NrqlAlertConditionTermList getTerm();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList">NrqlAlertConditionTermList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeouts"></a>

```java
public NrqlAlertConditionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference">NrqlAlertConditionTimeoutsOutputReference</a>

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warning"></a>

```java
public NrqlAlertConditionWarningOutputReference getWarning();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference">NrqlAlertConditionWarningOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `aggregationDelayInput`<sup>Optional</sup> <a name="aggregationDelayInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelayInput"></a>

```java
public java.lang.String getAggregationDelayInput();
```

- *Type:* java.lang.String

---

##### `aggregationMethodInput`<sup>Optional</sup> <a name="aggregationMethodInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethodInput"></a>

```java
public java.lang.String getAggregationMethodInput();
```

- *Type:* java.lang.String

---

##### `aggregationTimerInput`<sup>Optional</sup> <a name="aggregationTimerInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimerInput"></a>

```java
public java.lang.String getAggregationTimerInput();
```

- *Type:* java.lang.String

---

##### `aggregationWindowInput`<sup>Optional</sup> <a name="aggregationWindowInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindowInput"></a>

```java
public java.lang.Number getAggregationWindowInput();
```

- *Type:* java.lang.Number

---

##### `baselineDirectionInput`<sup>Optional</sup> <a name="baselineDirectionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirectionInput"></a>

```java
public java.lang.String getBaselineDirectionInput();
```

- *Type:* java.lang.String

---

##### `closeViolationsOnExpirationInput`<sup>Optional</sup> <a name="closeViolationsOnExpirationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpirationInput"></a>

```java
public java.lang.Boolean|IResolvable getCloseViolationsOnExpirationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.criticalInput"></a>

```java
public NrqlAlertConditionCritical getCriticalInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `evaluationDelayInput`<sup>Optional</sup> <a name="evaluationDelayInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelayInput"></a>

```java
public java.lang.Number getEvaluationDelayInput();
```

- *Type:* java.lang.Number

---

##### `expirationDurationInput`<sup>Optional</sup> <a name="expirationDurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDurationInput"></a>

```java
public java.lang.Number getExpirationDurationInput();
```

- *Type:* java.lang.Number

---

##### `fillOptionInput`<sup>Optional</sup> <a name="fillOptionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOptionInput"></a>

```java
public java.lang.String getFillOptionInput();
```

- *Type:* java.lang.String

---

##### `fillValueInput`<sup>Optional</sup> <a name="fillValueInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValueInput"></a>

```java
public java.lang.Number getFillValueInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreOnExpectedTerminationInput`<sup>Optional</sup> <a name="ignoreOnExpectedTerminationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTerminationInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreOnExpectedTerminationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nrqlInput`<sup>Optional</sup> <a name="nrqlInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.nrqlInput"></a>

```java
public NrqlAlertConditionNrql getNrqlInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

---

##### `openViolationOnExpirationInput`<sup>Optional</sup> <a name="openViolationOnExpirationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpirationInput"></a>

```java
public java.lang.Boolean|IResolvable getOpenViolationOnExpirationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `outlierConfigurationInput`<sup>Optional</sup> <a name="outlierConfigurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.outlierConfigurationInput"></a>

```java
public NrqlAlertConditionOutlierConfiguration getOutlierConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyIdInput"></a>

```java
public java.lang.Number getPolicyIdInput();
```

- *Type:* java.lang.Number

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrlInput"></a>

```java
public java.lang.String getRunbookUrlInput();
```

- *Type:* java.lang.String

---

##### `signalSeasonalityInput`<sup>Optional</sup> <a name="signalSeasonalityInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.signalSeasonalityInput"></a>

```java
public java.lang.String getSignalSeasonalityInput();
```

- *Type:* java.lang.String

---

##### `slideByInput`<sup>Optional</sup> <a name="slideByInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideByInput"></a>

```java
public java.lang.Number getSlideByInput();
```

- *Type:* java.lang.Number

---

##### `targetEntityInput`<sup>Optional</sup> <a name="targetEntityInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.targetEntityInput"></a>

```java
public java.lang.String getTargetEntityInput();
```

- *Type:* java.lang.String

---

##### `termInput`<sup>Optional</sup> <a name="termInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.termInput"></a>

```java
public IResolvable|java.util.List<NrqlAlertConditionTerm> getTermInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.timeoutsInput"></a>

```java
public IResolvable|NrqlAlertConditionTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

---

##### `titleTemplateInput`<sup>Optional</sup> <a name="titleTemplateInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplateInput"></a>

```java
public java.lang.String getTitleTemplateInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `violationTimeLimitInput`<sup>Optional</sup> <a name="violationTimeLimitInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitInput"></a>

```java
public java.lang.String getViolationTimeLimitInput();
```

- *Type:* java.lang.String

---

##### `violationTimeLimitSecondsInput`<sup>Optional</sup> <a name="violationTimeLimitSecondsInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSecondsInput"></a>

```java
public java.lang.Number getViolationTimeLimitSecondsInput();
```

- *Type:* java.lang.Number

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.warningInput"></a>

```java
public NrqlAlertConditionWarning getWarningInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `aggregationDelay`<sup>Required</sup> <a name="aggregationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationDelay"></a>

```java
public java.lang.String getAggregationDelay();
```

- *Type:* java.lang.String

---

##### `aggregationMethod`<sup>Required</sup> <a name="aggregationMethod" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationMethod"></a>

```java
public java.lang.String getAggregationMethod();
```

- *Type:* java.lang.String

---

##### `aggregationTimer`<sup>Required</sup> <a name="aggregationTimer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationTimer"></a>

```java
public java.lang.String getAggregationTimer();
```

- *Type:* java.lang.String

---

##### `aggregationWindow`<sup>Required</sup> <a name="aggregationWindow" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.aggregationWindow"></a>

```java
public java.lang.Number getAggregationWindow();
```

- *Type:* java.lang.Number

---

##### `baselineDirection`<sup>Required</sup> <a name="baselineDirection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.baselineDirection"></a>

```java
public java.lang.String getBaselineDirection();
```

- *Type:* java.lang.String

---

##### `closeViolationsOnExpiration`<sup>Required</sup> <a name="closeViolationsOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.closeViolationsOnExpiration"></a>

```java
public java.lang.Boolean|IResolvable getCloseViolationsOnExpiration();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `evaluationDelay`<sup>Required</sup> <a name="evaluationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.evaluationDelay"></a>

```java
public java.lang.Number getEvaluationDelay();
```

- *Type:* java.lang.Number

---

##### `expirationDuration`<sup>Required</sup> <a name="expirationDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.expirationDuration"></a>

```java
public java.lang.Number getExpirationDuration();
```

- *Type:* java.lang.Number

---

##### `fillOption`<sup>Required</sup> <a name="fillOption" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillOption"></a>

```java
public java.lang.String getFillOption();
```

- *Type:* java.lang.String

---

##### `fillValue`<sup>Required</sup> <a name="fillValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.fillValue"></a>

```java
public java.lang.Number getFillValue();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreOnExpectedTermination`<sup>Required</sup> <a name="ignoreOnExpectedTermination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.ignoreOnExpectedTermination"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreOnExpectedTermination();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `openViolationOnExpiration`<sup>Required</sup> <a name="openViolationOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.openViolationOnExpiration"></a>

```java
public java.lang.Boolean|IResolvable getOpenViolationOnExpiration();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

---

##### `signalSeasonality`<sup>Required</sup> <a name="signalSeasonality" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.signalSeasonality"></a>

```java
public java.lang.String getSignalSeasonality();
```

- *Type:* java.lang.String

---

##### `slideBy`<sup>Required</sup> <a name="slideBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.slideBy"></a>

```java
public java.lang.Number getSlideBy();
```

- *Type:* java.lang.Number

---

##### `targetEntity`<sup>Required</sup> <a name="targetEntity" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.targetEntity"></a>

```java
public java.lang.String getTargetEntity();
```

- *Type:* java.lang.String

---

##### `titleTemplate`<sup>Required</sup> <a name="titleTemplate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.titleTemplate"></a>

```java
public java.lang.String getTitleTemplate();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `violationTimeLimit`<sup>Required</sup> <a name="violationTimeLimit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimit"></a>

```java
public java.lang.String getViolationTimeLimit();
```

- *Type:* java.lang.String

---

##### `violationTimeLimitSeconds`<sup>Required</sup> <a name="violationTimeLimitSeconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.violationTimeLimitSeconds"></a>

```java
public java.lang.Number getViolationTimeLimitSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NrqlAlertConditionConfig <a name="NrqlAlertConditionConfig" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionConfig;

NrqlAlertConditionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .nrql(NrqlAlertConditionNrql)
    .policyId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .aggregationDelay(java.lang.String)
//  .aggregationMethod(java.lang.String)
//  .aggregationTimer(java.lang.String)
//  .aggregationWindow(java.lang.Number)
//  .baselineDirection(java.lang.String)
//  .closeViolationsOnExpiration(java.lang.Boolean|IResolvable)
//  .critical(NrqlAlertConditionCritical)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .evaluationDelay(java.lang.Number)
//  .expirationDuration(java.lang.Number)
//  .fillOption(java.lang.String)
//  .fillValue(java.lang.Number)
//  .id(java.lang.String)
//  .ignoreOnExpectedTermination(java.lang.Boolean|IResolvable)
//  .openViolationOnExpiration(java.lang.Boolean|IResolvable)
//  .outlierConfiguration(NrqlAlertConditionOutlierConfiguration)
//  .runbookUrl(java.lang.String)
//  .signalSeasonality(java.lang.String)
//  .slideBy(java.lang.Number)
//  .targetEntity(java.lang.String)
//  .term(IResolvable|java.util.List<NrqlAlertConditionTerm>)
//  .timeouts(NrqlAlertConditionTimeouts)
//  .titleTemplate(java.lang.String)
//  .type(java.lang.String)
//  .violationTimeLimit(java.lang.String)
//  .violationTimeLimitSeconds(java.lang.Number)
//  .warning(NrqlAlertConditionWarning)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The title of the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.nrql">nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | nrql block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID for managing your NRQL alert conditions. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationDelay">aggregationDelay</a></code> | <code>java.lang.String</code> | How long we wait for data that belongs in each aggregation window. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationMethod">aggregationMethod</a></code> | <code>java.lang.String</code> | The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationTimer">aggregationTimer</a></code> | <code>java.lang.String</code> | How long we wait after each data point arrives to make sure we've processed the whole batch. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationWindow">aggregationWindow</a></code> | <code>java.lang.Number</code> | The duration of the time window used to evaluate the NRQL query, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.baselineDirection">baselineDirection</a></code> | <code>java.lang.String</code> | The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.closeViolationsOnExpiration">closeViolationsOnExpiration</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to close all open incidents when the signal expires. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the NRQL alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether or not to enable the alert condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.evaluationDelay">evaluationDelay</a></code> | <code>java.lang.Number</code> | How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.expirationDuration">expirationDuration</a></code> | <code>java.lang.Number</code> | The amount of time (in seconds) to wait before considering the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillOption">fillOption</a></code> | <code>java.lang.String</code> | Which strategy to use when filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillValue">fillValue</a></code> | <code>java.lang.Number</code> | If using the 'static' fill option, this value will be used for filling gaps in the signal. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.ignoreOnExpectedTermination">ignoreOnExpectedTermination</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.openViolationOnExpiration">openViolationOnExpiration</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether to create a new incident to capture that the signal expired. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.outlierConfiguration">outlierConfiguration</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a></code> | outlier_configuration block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.signalSeasonality">signalSeasonality</a></code> | <code>java.lang.String</code> | Seasonality under which a condition's signal(s) are evaluated. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.slideBy">slideBy</a></code> | <code>java.lang.Number</code> | The duration of overlapping time windows used to smooth the chart line, in seconds. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.targetEntity">targetEntity</a></code> | <code>java.lang.String</code> | BETA PREVIEW: the `target_entity` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.term">term</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>></code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.titleTemplate">titleTemplate</a></code> | <code>java.lang.String</code> | This field allows you to create a custom title to be used when incidents are opened by the condition. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of NRQL alert condition to create. Valid values are: 'static', 'baseline', 'outlier'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimit">violationTimeLimit</a></code> | <code>java.lang.String</code> | Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimitSeconds">violationTimeLimitSeconds</a></code> | <code>java.lang.Number</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | warning block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The title of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#name NrqlAlertCondition#name}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.nrql"></a>

```java
public NrqlAlertConditionNrql getNrql();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#nrql NrqlAlertCondition#nrql}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#policy_id NrqlAlertCondition#policy_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID for managing your NRQL alert conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#account_id NrqlAlertCondition#account_id}

---

##### `aggregationDelay`<sup>Optional</sup> <a name="aggregationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationDelay"></a>

```java
public java.lang.String getAggregationDelay();
```

- *Type:* java.lang.String

How long we wait for data that belongs in each aggregation window.

Depending on your data, a longer delay may increase accuracy but delay notifications. Use aggregationDelay with the EVENT_FLOW and CADENCE aggregation methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#aggregation_delay NrqlAlertCondition#aggregation_delay}

---

##### `aggregationMethod`<sup>Optional</sup> <a name="aggregationMethod" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationMethod"></a>

```java
public java.lang.String getAggregationMethod();
```

- *Type:* java.lang.String

The method that determines when we consider an aggregation window to be complete so that we can evaluate the signal for incidents.

Default is EVENT_FLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#aggregation_method NrqlAlertCondition#aggregation_method}

---

##### `aggregationTimer`<sup>Optional</sup> <a name="aggregationTimer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationTimer"></a>

```java
public java.lang.String getAggregationTimer();
```

- *Type:* java.lang.String

How long we wait after each data point arrives to make sure we've processed the whole batch.

Use aggregationTimer with the EVENT_TIMER aggregation method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#aggregation_timer NrqlAlertCondition#aggregation_timer}

---

##### `aggregationWindow`<sup>Optional</sup> <a name="aggregationWindow" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.aggregationWindow"></a>

```java
public java.lang.Number getAggregationWindow();
```

- *Type:* java.lang.Number

The duration of the time window used to evaluate the NRQL query, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#aggregation_window NrqlAlertCondition#aggregation_window}

---

##### `baselineDirection`<sup>Optional</sup> <a name="baselineDirection" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.baselineDirection"></a>

```java
public java.lang.String getBaselineDirection();
```

- *Type:* java.lang.String

The baseline direction of a baseline NRQL alert condition. Valid values are: 'LOWER_ONLY', 'UPPER_AND_LOWER', 'UPPER_ONLY' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#baseline_direction NrqlAlertCondition#baseline_direction}

---

##### `closeViolationsOnExpiration`<sup>Optional</sup> <a name="closeViolationsOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.closeViolationsOnExpiration"></a>

```java
public java.lang.Boolean|IResolvable getCloseViolationsOnExpiration();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to close all open incidents when the signal expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#close_violations_on_expiration NrqlAlertCondition#close_violations_on_expiration}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.critical"></a>

```java
public NrqlAlertConditionCritical getCritical();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#critical NrqlAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the NRQL alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#description NrqlAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether or not to enable the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#enabled NrqlAlertCondition#enabled}

---

##### `evaluationDelay`<sup>Optional</sup> <a name="evaluationDelay" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.evaluationDelay"></a>

```java
public java.lang.Number getEvaluationDelay();
```

- *Type:* java.lang.Number

How long we wait until the signal starts evaluating. The maximum delay is 7200 seconds (120 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#evaluation_delay NrqlAlertCondition#evaluation_delay}

---

##### `expirationDuration`<sup>Optional</sup> <a name="expirationDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.expirationDuration"></a>

```java
public java.lang.Number getExpirationDuration();
```

- *Type:* java.lang.Number

The amount of time (in seconds) to wait before considering the signal expired.

Must be in the range of 30 to 172800 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#expiration_duration NrqlAlertCondition#expiration_duration}

---

##### `fillOption`<sup>Optional</sup> <a name="fillOption" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillOption"></a>

```java
public java.lang.String getFillOption();
```

- *Type:* java.lang.String

Which strategy to use when filling gaps in the signal.

If static, the 'fill value' will be used for filling gaps in the signal. Valid values are: 'NONE', 'LAST_VALUE', or 'STATIC' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#fill_option NrqlAlertCondition#fill_option}

---

##### `fillValue`<sup>Optional</sup> <a name="fillValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.fillValue"></a>

```java
public java.lang.Number getFillValue();
```

- *Type:* java.lang.Number

If using the 'static' fill option, this value will be used for filling gaps in the signal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#fill_value NrqlAlertCondition#fill_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#id NrqlAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreOnExpectedTermination`<sup>Optional</sup> <a name="ignoreOnExpectedTermination" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.ignoreOnExpectedTermination"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreOnExpectedTermination();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to ignore expected termination of a signal when considering whether to create a loss of signal incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#ignore_on_expected_termination NrqlAlertCondition#ignore_on_expected_termination}

---

##### `openViolationOnExpiration`<sup>Optional</sup> <a name="openViolationOnExpiration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.openViolationOnExpiration"></a>

```java
public java.lang.Boolean|IResolvable getOpenViolationOnExpiration();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether to create a new incident to capture that the signal expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#open_violation_on_expiration NrqlAlertCondition#open_violation_on_expiration}

---

##### `outlierConfiguration`<sup>Optional</sup> <a name="outlierConfiguration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.outlierConfiguration"></a>

```java
public NrqlAlertConditionOutlierConfiguration getOutlierConfiguration();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a>

outlier_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#outlier_configuration NrqlAlertCondition#outlier_configuration}

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#runbook_url NrqlAlertCondition#runbook_url}

---

##### `signalSeasonality`<sup>Optional</sup> <a name="signalSeasonality" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.signalSeasonality"></a>

```java
public java.lang.String getSignalSeasonality();
```

- *Type:* java.lang.String

Seasonality under which a condition's signal(s) are evaluated.

Valid values are: 'NEW_RELIC_CALCULATION', 'HOURLY', 'DAILY', 'WEEKLY', or 'NONE'. To have New Relic calculate seasonality automatically, set to 'NEW_RELIC_CALCULATION' (default). To turn off seasonality completely, set to 'NONE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#signal_seasonality NrqlAlertCondition#signal_seasonality}

---

##### `slideBy`<sup>Optional</sup> <a name="slideBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.slideBy"></a>

```java
public java.lang.Number getSlideBy();
```

- *Type:* java.lang.Number

The duration of overlapping time windows used to smooth the chart line, in seconds.

Must be a factor of `aggregation_window` and less than the aggregation window. If `aggregation_window` is less than or equal to 3600 seconds, it should be greater or equal to 30 seconds. If `aggregation_window` is greater than 3600 seconds but less than 7200 seconds, it should be greater or equal to `aggregation_window / 120`.  If `aggregation_window` is greater than 7200 seconds, it should be greater or equal to `aggregation_window / 24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#slide_by NrqlAlertCondition#slide_by}

---

##### `targetEntity`<sup>Optional</sup> <a name="targetEntity" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.targetEntity"></a>

```java
public java.lang.String getTargetEntity();
```

- *Type:* java.lang.String

BETA PREVIEW: the `target_entity` field is in limited release and only enabled for preview on a per-account basis.

* The GUID of the entity explicitly targeted by the condition. Issues triggered by this condition will affect the health status of this entity instead of having the affected entity detected automatically

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#target_entity NrqlAlertCondition#target_entity}

---

##### `term`<sup>Optional</sup> <a name="term" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.term"></a>

```java
public IResolvable|java.util.List<NrqlAlertConditionTerm> getTerm();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>>

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#term NrqlAlertCondition#term}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.timeouts"></a>

```java
public NrqlAlertConditionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#timeouts NrqlAlertCondition#timeouts}

---

##### `titleTemplate`<sup>Optional</sup> <a name="titleTemplate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.titleTemplate"></a>

```java
public java.lang.String getTitleTemplate();
```

- *Type:* java.lang.String

This field allows you to create a custom title to be used when incidents are opened by the condition.

Setting this field will override the default title. Must be Handlebars format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#title_template NrqlAlertCondition#title_template}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of NRQL alert condition to create. Valid values are: 'static', 'baseline', 'outlier'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#type NrqlAlertCondition#type}

---

##### `violationTimeLimit`<sup>Optional</sup> <a name="violationTimeLimit" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimit"></a>

```java
public java.lang.String getViolationTimeLimit();
```

- *Type:* java.lang.String

Sets a time limit, in hours, that will automatically force-close a long-lasting incident after the time limit you select.

Possible values are 'ONE_HOUR', 'TWO_HOURS', 'FOUR_HOURS', 'EIGHT_HOURS', 'TWELVE_HOURS', 'TWENTY_FOUR_HOURS', 'THIRTY_DAYS' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#violation_time_limit NrqlAlertCondition#violation_time_limit}

---

##### `violationTimeLimitSeconds`<sup>Optional</sup> <a name="violationTimeLimitSeconds" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```java
public java.lang.Number getViolationTimeLimitSeconds();
```

- *Type:* java.lang.Number

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#violation_time_limit_seconds NrqlAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionConfig.property.warning"></a>

```java
public NrqlAlertConditionWarning getWarning();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#warning NrqlAlertCondition#warning}

---

### NrqlAlertConditionCritical <a name="NrqlAlertConditionCritical" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionCritical;

NrqlAlertConditionCritical.builder()
    .threshold(java.lang.Number)
//  .disableHealthStatusReporting(java.lang.Boolean|IResolvable)
//  .duration(java.lang.Number)
//  .operator(java.lang.String)
//  .prediction(NrqlAlertConditionCriticalPrediction)
//  .thresholdDuration(java.lang.Number)
//  .thresholdOccurrences(java.lang.String)
//  .timeFunction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.disableHealthStatusReporting">disableHealthStatusReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Violations will not change system health status for this term. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.duration">duration</a></code> | <code>java.lang.Number</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.operator">operator</a></code> | <code>java.lang.String</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.prediction">prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a></code> | prediction block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdOccurrences">thresholdOccurrences</a></code> | <code>java.lang.String</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `disableHealthStatusReporting`<sup>Optional</sup> <a name="disableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.disableHealthStatusReporting"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReporting();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Violations will not change system health status for this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#disable_health_status_reporting NrqlAlertCondition#disable_health_status_reporting}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `prediction`<sup>Optional</sup> <a name="prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.prediction"></a>

```java
public NrqlAlertConditionCriticalPrediction getPrediction();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a>

prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#prediction NrqlAlertCondition#prediction}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="thresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdDuration"></a>

```java
public java.lang.Number getThresholdDuration();
```

- *Type:* java.lang.Number

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="thresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.thresholdOccurrences"></a>

```java
public java.lang.String getThresholdOccurrences();
```

- *Type:* java.lang.String

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionCriticalPrediction <a name="NrqlAlertConditionCriticalPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionCriticalPrediction;

NrqlAlertConditionCriticalPrediction.builder()
//  .predictBy(java.lang.Number)
//  .preferPredictionViolation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.property.predictBy">predictBy</a></code> | <code>java.lang.Number</code> | BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.property.preferPredictionViolation">preferPredictionViolation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis. |

---

##### `predictBy`<sup>Optional</sup> <a name="predictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.property.predictBy"></a>

```java
public java.lang.Number getPredictBy();
```

- *Type:* java.lang.Number

BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis.

* The duration, in seconds, that the prediction should look into the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#predict_by NrqlAlertCondition#predict_by}

---

##### `preferPredictionViolation`<sup>Optional</sup> <a name="preferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction.property.preferPredictionViolation"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis.

* If a prediction incident is open when a term's static threshold is breached by the actual signal, default behavior is to close the prediction incident and open a static incident. Setting `prefer_prediction_violation` to `true` overrides this behavior leaving the prediction incident open and preventing a static incident from opening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#prefer_prediction_violation NrqlAlertCondition#prefer_prediction_violation}

---

### NrqlAlertConditionNrql <a name="NrqlAlertConditionNrql" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionNrql;

NrqlAlertConditionNrql.builder()
    .query(java.lang.String)
//  .dataAccountId(java.lang.Number)
//  .evaluationOffset(java.lang.Number)
//  .sinceValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#query NrqlAlertCondition#query}. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.dataAccountId">dataAccountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID to use as the basis for the NRQL alert condition's `query`; |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.evaluationOffset">evaluationOffset</a></code> | <code>java.lang.Number</code> | NRQL queries are evaluated in one-minute time windows. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.sinceValue">sinceValue</a></code> | <code>java.lang.String</code> | NRQL queries are evaluated in one-minute time windows. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#query NrqlAlertCondition#query}.

---

##### `dataAccountId`<sup>Optional</sup> <a name="dataAccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.dataAccountId"></a>

```java
public java.lang.Number getDataAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID to use as the basis for the NRQL alert condition's `query`;

will default to `account_id` if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#data_account_id NrqlAlertCondition#data_account_id}

---

##### `evaluationOffset`<sup>Optional</sup> <a name="evaluationOffset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.evaluationOffset"></a>

```java
public java.lang.Number getEvaluationOffset();
```

- *Type:* java.lang.Number

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `evaluation_offset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#evaluation_offset NrqlAlertCondition#evaluation_offset}

---

##### `sinceValue`<sup>Optional</sup> <a name="sinceValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql.property.sinceValue"></a>

```java
public java.lang.String getSinceValue();
```

- *Type:* java.lang.String

NRQL queries are evaluated in one-minute time windows.

The start time depends on the value you provide in the NRQL condition's `since_value`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#since_value NrqlAlertCondition#since_value}

---

### NrqlAlertConditionOutlierConfiguration <a name="NrqlAlertConditionOutlierConfiguration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionOutlierConfiguration;

NrqlAlertConditionOutlierConfiguration.builder()
    .dbscan(NrqlAlertConditionOutlierConfigurationDbscan)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration.property.dbscan">dbscan</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan">NrqlAlertConditionOutlierConfigurationDbscan</a></code> | dbscan block. |

---

##### `dbscan`<sup>Required</sup> <a name="dbscan" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration.property.dbscan"></a>

```java
public NrqlAlertConditionOutlierConfigurationDbscan getDbscan();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan">NrqlAlertConditionOutlierConfigurationDbscan</a>

dbscan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#dbscan NrqlAlertCondition#dbscan}

---

### NrqlAlertConditionOutlierConfigurationDbscan <a name="NrqlAlertConditionOutlierConfigurationDbscan" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionOutlierConfigurationDbscan;

NrqlAlertConditionOutlierConfigurationDbscan.builder()
    .epsilon(java.lang.Number)
    .minimumPoints(java.lang.Number)
//  .evaluationGroupFacet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan.property.epsilon">epsilon</a></code> | <code>java.lang.Number</code> | BETA PREVIEW: the `epsilon` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan.property.minimumPoints">minimumPoints</a></code> | <code>java.lang.Number</code> | BETA PREVIEW: the `minimum_points` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan.property.evaluationGroupFacet">evaluationGroupFacet</a></code> | <code>java.lang.String</code> | BETA PREVIEW: the `evaluation_group_facet` field is in limited release and only enabled for preview on a per-account basis. |

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan.property.epsilon"></a>

```java
public java.lang.Number getEpsilon();
```

- *Type:* java.lang.Number

BETA PREVIEW: the `epsilon` field is in limited release and only enabled for preview on a per-account basis.

* Radius (distance threshold) for DBSCAN in the units of the query result. Smaller values tighten clusters; larger values broaden them. Must be > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#epsilon NrqlAlertCondition#epsilon}

---

##### `minimumPoints`<sup>Required</sup> <a name="minimumPoints" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan.property.minimumPoints"></a>

```java
public java.lang.Number getMinimumPoints();
```

- *Type:* java.lang.Number

BETA PREVIEW: the `minimum_points` field is in limited release and only enabled for preview on a per-account basis.

* Minimum number of neighboring points needed to form a cluster. Must be >= 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#minimum_points NrqlAlertCondition#minimum_points}

---

##### `evaluationGroupFacet`<sup>Optional</sup> <a name="evaluationGroupFacet" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan.property.evaluationGroupFacet"></a>

```java
public java.lang.String getEvaluationGroupFacet();
```

- *Type:* java.lang.String

BETA PREVIEW: the `evaluation_group_facet` field is in limited release and only enabled for preview on a per-account basis.

* Optional NRQL facet attribute used to segment data into groups (e.g. `host`, `region`) before running outlier detection. Omit to evaluate all results together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#evaluation_group_facet NrqlAlertCondition#evaluation_group_facet}

---

### NrqlAlertConditionTerm <a name="NrqlAlertConditionTerm" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionTerm;

NrqlAlertConditionTerm.builder()
    .threshold(java.lang.Number)
//  .disableHealthStatusReporting(java.lang.Boolean|IResolvable)
//  .duration(java.lang.Number)
//  .operator(java.lang.String)
//  .prediction(NrqlAlertConditionTermPrediction)
//  .priority(java.lang.String)
//  .thresholdDuration(java.lang.Number)
//  .thresholdOccurrences(java.lang.String)
//  .timeFunction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.disableHealthStatusReporting">disableHealthStatusReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Violations will not change system health status for this term. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.duration">duration</a></code> | <code>java.lang.Number</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.operator">operator</a></code> | <code>java.lang.String</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.prediction">prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a></code> | prediction block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.priority">priority</a></code> | <code>java.lang.String</code> | One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdOccurrences">thresholdOccurrences</a></code> | <code>java.lang.String</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `disableHealthStatusReporting`<sup>Optional</sup> <a name="disableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.disableHealthStatusReporting"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReporting();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Violations will not change system health status for this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#disable_health_status_reporting NrqlAlertCondition#disable_health_status_reporting}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `prediction`<sup>Optional</sup> <a name="prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.prediction"></a>

```java
public NrqlAlertConditionTermPrediction getPrediction();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a>

prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#prediction NrqlAlertCondition#prediction}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

One of (critical, warning). Defaults to 'critical'. At least one condition term must have priority set to 'critical'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#priority NrqlAlertCondition#priority}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="thresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdDuration"></a>

```java
public java.lang.Number getThresholdDuration();
```

- *Type:* java.lang.Number

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="thresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.thresholdOccurrences"></a>

```java
public java.lang.String getThresholdOccurrences();
```

- *Type:* java.lang.String

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionTermPrediction <a name="NrqlAlertConditionTermPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionTermPrediction;

NrqlAlertConditionTermPrediction.builder()
//  .predictBy(java.lang.Number)
//  .preferPredictionViolation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.property.predictBy">predictBy</a></code> | <code>java.lang.Number</code> | BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.property.preferPredictionViolation">preferPredictionViolation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis. |

---

##### `predictBy`<sup>Optional</sup> <a name="predictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.property.predictBy"></a>

```java
public java.lang.Number getPredictBy();
```

- *Type:* java.lang.Number

BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis.

* The duration, in seconds, that the prediction should look into the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#predict_by NrqlAlertCondition#predict_by}

---

##### `preferPredictionViolation`<sup>Optional</sup> <a name="preferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction.property.preferPredictionViolation"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis.

* If a prediction incident is open when a term's static threshold is breached by the actual signal, default behavior is to close the prediction incident and open a static incident. Setting `prefer_prediction_violation` to `true` overrides this behavior leaving the prediction incident open and preventing a static incident from opening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#prefer_prediction_violation NrqlAlertCondition#prefer_prediction_violation}

---

### NrqlAlertConditionTimeouts <a name="NrqlAlertConditionTimeouts" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionTimeouts;

NrqlAlertConditionTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#create NrqlAlertCondition#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#create NrqlAlertCondition#create}.

---

### NrqlAlertConditionWarning <a name="NrqlAlertConditionWarning" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionWarning;

NrqlAlertConditionWarning.builder()
    .threshold(java.lang.Number)
//  .disableHealthStatusReporting(java.lang.Boolean|IResolvable)
//  .duration(java.lang.Number)
//  .operator(java.lang.String)
//  .prediction(NrqlAlertConditionWarningPrediction)
//  .thresholdDuration(java.lang.Number)
//  .thresholdOccurrences(java.lang.String)
//  .timeFunction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | For baseline conditions must be in range [1, 1000]. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.disableHealthStatusReporting">disableHealthStatusReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Violations will not change system health status for this term. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.duration">duration</a></code> | <code>java.lang.Number</code> | In minutes, must be in the range of 1 to 120 (inclusive). |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.operator">operator</a></code> | <code>java.lang.String</code> | One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.prediction">prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a></code> | prediction block. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | The duration, in seconds, that the threshold must violate in order to create an incident. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdOccurrences">thresholdOccurrences</a></code> | <code>java.lang.String</code> | The criteria for how many data points must be in violation for the specified threshold duration. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | Valid values are: 'all' or 'any'. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

For baseline conditions must be in range [1, 1000].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold NrqlAlertCondition#threshold}

---

##### `disableHealthStatusReporting`<sup>Optional</sup> <a name="disableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.disableHealthStatusReporting"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReporting();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Violations will not change system health status for this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#disable_health_status_reporting NrqlAlertCondition#disable_health_status_reporting}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

In minutes, must be in the range of 1 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#duration NrqlAlertCondition#duration}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

One of (above, above_or_equals, below, below_or_equals, equals, not_equals). Defaults to 'equals'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#operator NrqlAlertCondition#operator}

---

##### `prediction`<sup>Optional</sup> <a name="prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.prediction"></a>

```java
public NrqlAlertConditionWarningPrediction getPrediction();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a>

prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#prediction NrqlAlertCondition#prediction}

---

##### `thresholdDuration`<sup>Optional</sup> <a name="thresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdDuration"></a>

```java
public java.lang.Number getThresholdDuration();
```

- *Type:* java.lang.Number

The duration, in seconds, that the threshold must violate in order to create an incident.

Value must be a multiple of the 'aggregation_window' (which has a default of 60 seconds). Value must be within 120-86400 seconds for baseline conditions, and within 60-86400 seconds for static conditions

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold_duration NrqlAlertCondition#threshold_duration}

---

##### `thresholdOccurrences`<sup>Optional</sup> <a name="thresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.thresholdOccurrences"></a>

```java
public java.lang.String getThresholdOccurrences();
```

- *Type:* java.lang.String

The criteria for how many data points must be in violation for the specified threshold duration.

Valid values are: 'ALL' or 'AT_LEAST_ONCE' (case insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#threshold_occurrences NrqlAlertCondition#threshold_occurrences}

---

##### `timeFunction`<sup>Optional</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

Valid values are: 'all' or 'any'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#time_function NrqlAlertCondition#time_function}

---

### NrqlAlertConditionWarningPrediction <a name="NrqlAlertConditionWarningPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionWarningPrediction;

NrqlAlertConditionWarningPrediction.builder()
//  .predictBy(java.lang.Number)
//  .preferPredictionViolation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.property.predictBy">predictBy</a></code> | <code>java.lang.Number</code> | BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.property.preferPredictionViolation">preferPredictionViolation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis. |

---

##### `predictBy`<sup>Optional</sup> <a name="predictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.property.predictBy"></a>

```java
public java.lang.Number getPredictBy();
```

- *Type:* java.lang.Number

BETA PREVIEW: the `predict_by` field is in limited release and only enabled for preview on a per-account basis.

* The duration, in seconds, that the prediction should look into the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#predict_by NrqlAlertCondition#predict_by}

---

##### `preferPredictionViolation`<sup>Optional</sup> <a name="preferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction.property.preferPredictionViolation"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

BETA PREVIEW: the `prefer_prediction_violation` field is in limited release and only enabled for preview on a per-account basis.

* If a prediction incident is open when a term's static threshold is breached by the actual signal, default behavior is to close the prediction incident and open a static incident. Setting `prefer_prediction_violation` to `true` overrides this behavior leaving the prediction incident open and preventing a static incident from opening.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/nrql_alert_condition#prefer_prediction_violation NrqlAlertCondition#prefer_prediction_violation}

---

## Classes <a name="Classes" id="Classes"></a>

### NrqlAlertConditionCriticalOutputReference <a name="NrqlAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionCriticalOutputReference;

new NrqlAlertConditionCriticalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.putPrediction">putPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDisableHealthStatusReporting">resetDisableHealthStatusReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetPrediction">resetPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdDuration">resetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdOccurrences">resetThresholdOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetTimeFunction">resetTimeFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrediction` <a name="putPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.putPrediction"></a>

```java
public void putPrediction(NrqlAlertConditionCriticalPrediction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.putPrediction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a>

---

##### `resetDisableHealthStatusReporting` <a name="resetDisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDisableHealthStatusReporting"></a>

```java
public void resetDisableHealthStatusReporting()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPrediction` <a name="resetPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetPrediction"></a>

```java
public void resetPrediction()
```

##### `resetThresholdDuration` <a name="resetThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdDuration"></a>

```java
public void resetThresholdDuration()
```

##### `resetThresholdOccurrences` <a name="resetThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetThresholdOccurrences"></a>

```java
public void resetThresholdOccurrences()
```

##### `resetTimeFunction` <a name="resetTimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```java
public void resetTimeFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.prediction">prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference">NrqlAlertConditionCriticalPredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.disableHealthStatusReportingInput">disableHealthStatusReportingInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.predictionInput">predictionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDurationInput">thresholdDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrencesInput">thresholdOccurrencesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.disableHealthStatusReporting">disableHealthStatusReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrences">thresholdOccurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prediction`<sup>Required</sup> <a name="prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.prediction"></a>

```java
public NrqlAlertConditionCriticalPredictionOutputReference getPrediction();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference">NrqlAlertConditionCriticalPredictionOutputReference</a>

---

##### `disableHealthStatusReportingInput`<sup>Optional</sup> <a name="disableHealthStatusReportingInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.disableHealthStatusReportingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReportingInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `predictionInput`<sup>Optional</sup> <a name="predictionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.predictionInput"></a>

```java
public NrqlAlertConditionCriticalPrediction getPredictionInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a>

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="thresholdDurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDurationInput"></a>

```java
public java.lang.Number getThresholdDurationInput();
```

- *Type:* java.lang.Number

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdOccurrencesInput`<sup>Optional</sup> <a name="thresholdOccurrencesInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrencesInput"></a>

```java
public java.lang.String getThresholdOccurrencesInput();
```

- *Type:* java.lang.String

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```java
public java.lang.String getTimeFunctionInput();
```

- *Type:* java.lang.String

---

##### `disableHealthStatusReporting`<sup>Required</sup> <a name="disableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.disableHealthStatusReporting"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReporting();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdDuration`<sup>Required</sup> <a name="thresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdDuration"></a>

```java
public java.lang.Number getThresholdDuration();
```

- *Type:* java.lang.Number

---

##### `thresholdOccurrences`<sup>Required</sup> <a name="thresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.thresholdOccurrences"></a>

```java
public java.lang.String getThresholdOccurrences();
```

- *Type:* java.lang.String

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalOutputReference.property.internalValue"></a>

```java
public NrqlAlertConditionCritical getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCritical">NrqlAlertConditionCritical</a>

---


### NrqlAlertConditionCriticalPredictionOutputReference <a name="NrqlAlertConditionCriticalPredictionOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionCriticalPredictionOutputReference;

new NrqlAlertConditionCriticalPredictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resetPredictBy">resetPredictBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resetPreferPredictionViolation">resetPreferPredictionViolation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictBy` <a name="resetPredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resetPredictBy"></a>

```java
public void resetPredictBy()
```

##### `resetPreferPredictionViolation` <a name="resetPreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.resetPreferPredictionViolation"></a>

```java
public void resetPreferPredictionViolation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.predictByInput">predictByInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.preferPredictionViolationInput">preferPredictionViolationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.predictBy">predictBy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.preferPredictionViolation">preferPredictionViolation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predictByInput`<sup>Optional</sup> <a name="predictByInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.predictByInput"></a>

```java
public java.lang.Number getPredictByInput();
```

- *Type:* java.lang.Number

---

##### `preferPredictionViolationInput`<sup>Optional</sup> <a name="preferPredictionViolationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.preferPredictionViolationInput"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `predictBy`<sup>Required</sup> <a name="predictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.predictBy"></a>

```java
public java.lang.Number getPredictBy();
```

- *Type:* java.lang.Number

---

##### `preferPredictionViolation`<sup>Required</sup> <a name="preferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.preferPredictionViolation"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPredictionOutputReference.property.internalValue"></a>

```java
public NrqlAlertConditionCriticalPrediction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionCriticalPrediction">NrqlAlertConditionCriticalPrediction</a>

---


### NrqlAlertConditionNrqlOutputReference <a name="NrqlAlertConditionNrqlOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionNrqlOutputReference;

new NrqlAlertConditionNrqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetDataAccountId">resetDataAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetEvaluationOffset">resetEvaluationOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetSinceValue">resetSinceValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataAccountId` <a name="resetDataAccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetDataAccountId"></a>

```java
public void resetDataAccountId()
```

##### `resetEvaluationOffset` <a name="resetEvaluationOffset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetEvaluationOffset"></a>

```java
public void resetEvaluationOffset()
```

##### `resetSinceValue` <a name="resetSinceValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.resetSinceValue"></a>

```java
public void resetSinceValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountIdInput">dataAccountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffsetInput">evaluationOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValueInput">sinceValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountId">dataAccountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffset">evaluationOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValue">sinceValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataAccountIdInput`<sup>Optional</sup> <a name="dataAccountIdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountIdInput"></a>

```java
public java.lang.Number getDataAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `evaluationOffsetInput`<sup>Optional</sup> <a name="evaluationOffsetInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffsetInput"></a>

```java
public java.lang.Number getEvaluationOffsetInput();
```

- *Type:* java.lang.Number

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `sinceValueInput`<sup>Optional</sup> <a name="sinceValueInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValueInput"></a>

```java
public java.lang.String getSinceValueInput();
```

- *Type:* java.lang.String

---

##### `dataAccountId`<sup>Required</sup> <a name="dataAccountId" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.dataAccountId"></a>

```java
public java.lang.Number getDataAccountId();
```

- *Type:* java.lang.Number

---

##### `evaluationOffset`<sup>Required</sup> <a name="evaluationOffset" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.evaluationOffset"></a>

```java
public java.lang.Number getEvaluationOffset();
```

- *Type:* java.lang.Number

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `sinceValue`<sup>Required</sup> <a name="sinceValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.sinceValue"></a>

```java
public java.lang.String getSinceValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrqlOutputReference.property.internalValue"></a>

```java
public NrqlAlertConditionNrql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionNrql">NrqlAlertConditionNrql</a>

---


### NrqlAlertConditionOutlierConfigurationDbscanOutputReference <a name="NrqlAlertConditionOutlierConfigurationDbscanOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference;

new NrqlAlertConditionOutlierConfigurationDbscanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.resetEvaluationGroupFacet">resetEvaluationGroupFacet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationGroupFacet` <a name="resetEvaluationGroupFacet" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.resetEvaluationGroupFacet"></a>

```java
public void resetEvaluationGroupFacet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.epsilonInput">epsilonInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.evaluationGroupFacetInput">evaluationGroupFacetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.minimumPointsInput">minimumPointsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.epsilon">epsilon</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.evaluationGroupFacet">evaluationGroupFacet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.minimumPoints">minimumPoints</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan">NrqlAlertConditionOutlierConfigurationDbscan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `epsilonInput`<sup>Optional</sup> <a name="epsilonInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.epsilonInput"></a>

```java
public java.lang.Number getEpsilonInput();
```

- *Type:* java.lang.Number

---

##### `evaluationGroupFacetInput`<sup>Optional</sup> <a name="evaluationGroupFacetInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.evaluationGroupFacetInput"></a>

```java
public java.lang.String getEvaluationGroupFacetInput();
```

- *Type:* java.lang.String

---

##### `minimumPointsInput`<sup>Optional</sup> <a name="minimumPointsInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.minimumPointsInput"></a>

```java
public java.lang.Number getMinimumPointsInput();
```

- *Type:* java.lang.Number

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.epsilon"></a>

```java
public java.lang.Number getEpsilon();
```

- *Type:* java.lang.Number

---

##### `evaluationGroupFacet`<sup>Required</sup> <a name="evaluationGroupFacet" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.evaluationGroupFacet"></a>

```java
public java.lang.String getEvaluationGroupFacet();
```

- *Type:* java.lang.String

---

##### `minimumPoints`<sup>Required</sup> <a name="minimumPoints" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.minimumPoints"></a>

```java
public java.lang.Number getMinimumPoints();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference.property.internalValue"></a>

```java
public NrqlAlertConditionOutlierConfigurationDbscan getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan">NrqlAlertConditionOutlierConfigurationDbscan</a>

---


### NrqlAlertConditionOutlierConfigurationOutputReference <a name="NrqlAlertConditionOutlierConfigurationOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionOutlierConfigurationOutputReference;

new NrqlAlertConditionOutlierConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.putDbscan">putDbscan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDbscan` <a name="putDbscan" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.putDbscan"></a>

```java
public void putDbscan(NrqlAlertConditionOutlierConfigurationDbscan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.putDbscan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan">NrqlAlertConditionOutlierConfigurationDbscan</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.dbscan">dbscan</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference">NrqlAlertConditionOutlierConfigurationDbscanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.dbscanInput">dbscanInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan">NrqlAlertConditionOutlierConfigurationDbscan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbscan`<sup>Required</sup> <a name="dbscan" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.dbscan"></a>

```java
public NrqlAlertConditionOutlierConfigurationDbscanOutputReference getDbscan();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscanOutputReference">NrqlAlertConditionOutlierConfigurationDbscanOutputReference</a>

---

##### `dbscanInput`<sup>Optional</sup> <a name="dbscanInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.dbscanInput"></a>

```java
public NrqlAlertConditionOutlierConfigurationDbscan getDbscanInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationDbscan">NrqlAlertConditionOutlierConfigurationDbscan</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfigurationOutputReference.property.internalValue"></a>

```java
public NrqlAlertConditionOutlierConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionOutlierConfiguration">NrqlAlertConditionOutlierConfiguration</a>

---


### NrqlAlertConditionTermList <a name="NrqlAlertConditionTermList" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionTermList;

new NrqlAlertConditionTermList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get"></a>

```java
public NrqlAlertConditionTermOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NrqlAlertConditionTerm> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>>

---


### NrqlAlertConditionTermOutputReference <a name="NrqlAlertConditionTermOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionTermOutputReference;

new NrqlAlertConditionTermOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.putPrediction">putPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDisableHealthStatusReporting">resetDisableHealthStatusReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPrediction">resetPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdDuration">resetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdOccurrences">resetThresholdOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetTimeFunction">resetTimeFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrediction` <a name="putPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.putPrediction"></a>

```java
public void putPrediction(NrqlAlertConditionTermPrediction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.putPrediction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a>

---

##### `resetDisableHealthStatusReporting` <a name="resetDisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDisableHealthStatusReporting"></a>

```java
public void resetDisableHealthStatusReporting()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPrediction` <a name="resetPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPrediction"></a>

```java
public void resetPrediction()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetThresholdDuration` <a name="resetThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdDuration"></a>

```java
public void resetThresholdDuration()
```

##### `resetThresholdOccurrences` <a name="resetThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetThresholdOccurrences"></a>

```java
public void resetThresholdOccurrences()
```

##### `resetTimeFunction` <a name="resetTimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.resetTimeFunction"></a>

```java
public void resetTimeFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.prediction">prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference">NrqlAlertConditionTermPredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.disableHealthStatusReportingInput">disableHealthStatusReportingInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.predictionInput">predictionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDurationInput">thresholdDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrencesInput">thresholdOccurrencesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.disableHealthStatusReporting">disableHealthStatusReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrences">thresholdOccurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prediction`<sup>Required</sup> <a name="prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.prediction"></a>

```java
public NrqlAlertConditionTermPredictionOutputReference getPrediction();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference">NrqlAlertConditionTermPredictionOutputReference</a>

---

##### `disableHealthStatusReportingInput`<sup>Optional</sup> <a name="disableHealthStatusReportingInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.disableHealthStatusReportingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReportingInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `predictionInput`<sup>Optional</sup> <a name="predictionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.predictionInput"></a>

```java
public NrqlAlertConditionTermPrediction getPredictionInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="thresholdDurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDurationInput"></a>

```java
public java.lang.Number getThresholdDurationInput();
```

- *Type:* java.lang.Number

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdOccurrencesInput`<sup>Optional</sup> <a name="thresholdOccurrencesInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrencesInput"></a>

```java
public java.lang.String getThresholdOccurrencesInput();
```

- *Type:* java.lang.String

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunctionInput"></a>

```java
public java.lang.String getTimeFunctionInput();
```

- *Type:* java.lang.String

---

##### `disableHealthStatusReporting`<sup>Required</sup> <a name="disableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.disableHealthStatusReporting"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReporting();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdDuration`<sup>Required</sup> <a name="thresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdDuration"></a>

```java
public java.lang.Number getThresholdDuration();
```

- *Type:* java.lang.Number

---

##### `thresholdOccurrences`<sup>Required</sup> <a name="thresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.thresholdOccurrences"></a>

```java
public java.lang.String getThresholdOccurrences();
```

- *Type:* java.lang.String

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermOutputReference.property.internalValue"></a>

```java
public IResolvable|NrqlAlertConditionTerm getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTerm">NrqlAlertConditionTerm</a>

---


### NrqlAlertConditionTermPredictionOutputReference <a name="NrqlAlertConditionTermPredictionOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionTermPredictionOutputReference;

new NrqlAlertConditionTermPredictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resetPredictBy">resetPredictBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resetPreferPredictionViolation">resetPreferPredictionViolation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictBy` <a name="resetPredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resetPredictBy"></a>

```java
public void resetPredictBy()
```

##### `resetPreferPredictionViolation` <a name="resetPreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.resetPreferPredictionViolation"></a>

```java
public void resetPreferPredictionViolation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.predictByInput">predictByInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.preferPredictionViolationInput">preferPredictionViolationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.predictBy">predictBy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.preferPredictionViolation">preferPredictionViolation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predictByInput`<sup>Optional</sup> <a name="predictByInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.predictByInput"></a>

```java
public java.lang.Number getPredictByInput();
```

- *Type:* java.lang.Number

---

##### `preferPredictionViolationInput`<sup>Optional</sup> <a name="preferPredictionViolationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.preferPredictionViolationInput"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `predictBy`<sup>Required</sup> <a name="predictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.predictBy"></a>

```java
public java.lang.Number getPredictBy();
```

- *Type:* java.lang.Number

---

##### `preferPredictionViolation`<sup>Required</sup> <a name="preferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.preferPredictionViolation"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPredictionOutputReference.property.internalValue"></a>

```java
public NrqlAlertConditionTermPrediction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTermPrediction">NrqlAlertConditionTermPrediction</a>

---


### NrqlAlertConditionTimeoutsOutputReference <a name="NrqlAlertConditionTimeoutsOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionTimeoutsOutputReference;

new NrqlAlertConditionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|NrqlAlertConditionTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionTimeouts">NrqlAlertConditionTimeouts</a>

---


### NrqlAlertConditionWarningOutputReference <a name="NrqlAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionWarningOutputReference;

new NrqlAlertConditionWarningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.putPrediction">putPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDisableHealthStatusReporting">resetDisableHealthStatusReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetPrediction">resetPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdDuration">resetThresholdDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdOccurrences">resetThresholdOccurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetTimeFunction">resetTimeFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrediction` <a name="putPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.putPrediction"></a>

```java
public void putPrediction(NrqlAlertConditionWarningPrediction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.putPrediction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a>

---

##### `resetDisableHealthStatusReporting` <a name="resetDisableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDisableHealthStatusReporting"></a>

```java
public void resetDisableHealthStatusReporting()
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPrediction` <a name="resetPrediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetPrediction"></a>

```java
public void resetPrediction()
```

##### `resetThresholdDuration` <a name="resetThresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdDuration"></a>

```java
public void resetThresholdDuration()
```

##### `resetThresholdOccurrences` <a name="resetThresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetThresholdOccurrences"></a>

```java
public void resetThresholdOccurrences()
```

##### `resetTimeFunction` <a name="resetTimeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.resetTimeFunction"></a>

```java
public void resetTimeFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.prediction">prediction</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference">NrqlAlertConditionWarningPredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.disableHealthStatusReportingInput">disableHealthStatusReportingInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.predictionInput">predictionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDurationInput">thresholdDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrencesInput">thresholdOccurrencesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.disableHealthStatusReporting">disableHealthStatusReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDuration">thresholdDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrences">thresholdOccurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prediction`<sup>Required</sup> <a name="prediction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.prediction"></a>

```java
public NrqlAlertConditionWarningPredictionOutputReference getPrediction();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference">NrqlAlertConditionWarningPredictionOutputReference</a>

---

##### `disableHealthStatusReportingInput`<sup>Optional</sup> <a name="disableHealthStatusReportingInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.disableHealthStatusReportingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReportingInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `predictionInput`<sup>Optional</sup> <a name="predictionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.predictionInput"></a>

```java
public NrqlAlertConditionWarningPrediction getPredictionInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a>

---

##### `thresholdDurationInput`<sup>Optional</sup> <a name="thresholdDurationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDurationInput"></a>

```java
public java.lang.Number getThresholdDurationInput();
```

- *Type:* java.lang.Number

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `thresholdOccurrencesInput`<sup>Optional</sup> <a name="thresholdOccurrencesInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrencesInput"></a>

```java
public java.lang.String getThresholdOccurrencesInput();
```

- *Type:* java.lang.String

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```java
public java.lang.String getTimeFunctionInput();
```

- *Type:* java.lang.String

---

##### `disableHealthStatusReporting`<sup>Required</sup> <a name="disableHealthStatusReporting" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.disableHealthStatusReporting"></a>

```java
public java.lang.Boolean|IResolvable getDisableHealthStatusReporting();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `thresholdDuration`<sup>Required</sup> <a name="thresholdDuration" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdDuration"></a>

```java
public java.lang.Number getThresholdDuration();
```

- *Type:* java.lang.Number

---

##### `thresholdOccurrences`<sup>Required</sup> <a name="thresholdOccurrences" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.thresholdOccurrences"></a>

```java
public java.lang.String getThresholdOccurrences();
```

- *Type:* java.lang.String

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningOutputReference.property.internalValue"></a>

```java
public NrqlAlertConditionWarning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarning">NrqlAlertConditionWarning</a>

---


### NrqlAlertConditionWarningPredictionOutputReference <a name="NrqlAlertConditionWarningPredictionOutputReference" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_alert_condition.NrqlAlertConditionWarningPredictionOutputReference;

new NrqlAlertConditionWarningPredictionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resetPredictBy">resetPredictBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resetPreferPredictionViolation">resetPreferPredictionViolation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictBy` <a name="resetPredictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resetPredictBy"></a>

```java
public void resetPredictBy()
```

##### `resetPreferPredictionViolation` <a name="resetPreferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.resetPreferPredictionViolation"></a>

```java
public void resetPreferPredictionViolation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.predictByInput">predictByInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.preferPredictionViolationInput">preferPredictionViolationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.predictBy">predictBy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.preferPredictionViolation">preferPredictionViolation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predictByInput`<sup>Optional</sup> <a name="predictByInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.predictByInput"></a>

```java
public java.lang.Number getPredictByInput();
```

- *Type:* java.lang.Number

---

##### `preferPredictionViolationInput`<sup>Optional</sup> <a name="preferPredictionViolationInput" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.preferPredictionViolationInput"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `predictBy`<sup>Required</sup> <a name="predictBy" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.predictBy"></a>

```java
public java.lang.Number getPredictBy();
```

- *Type:* java.lang.Number

---

##### `preferPredictionViolation`<sup>Required</sup> <a name="preferPredictionViolation" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.preferPredictionViolation"></a>

```java
public java.lang.Boolean|IResolvable getPreferPredictionViolation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPredictionOutputReference.property.internalValue"></a>

```java
public NrqlAlertConditionWarningPrediction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.nrqlAlertCondition.NrqlAlertConditionWarningPrediction">NrqlAlertConditionWarningPrediction</a>

---



