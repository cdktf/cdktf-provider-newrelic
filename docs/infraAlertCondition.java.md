# `infraAlertCondition` Submodule <a name="`infraAlertCondition` Submodule" id="@cdktf/provider-newrelic.infraAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InfraAlertCondition <a name="InfraAlertCondition" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition newrelic_infra_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertCondition;

InfraAlertCondition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .policyId(java.lang.Number)
    .type(java.lang.String)
//  .comparison(java.lang.String)
//  .critical(InfraAlertConditionCritical)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .event(java.lang.String)
//  .id(java.lang.String)
//  .integrationProvider(java.lang.String)
//  .processWhere(java.lang.String)
//  .runbookUrl(java.lang.String)
//  .select(java.lang.String)
//  .violationCloseTimer(java.lang.Number)
//  .warning(InfraAlertConditionWarning)
//  .where(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The Infrastructure alert condition's name. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the alert policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.comparison">comparison</a></code> | <code>java.lang.String</code> | The operator used to evaluate the threshold value. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Infrastructure alert condition. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the condition is turned on or off. Valid values are true and false. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.event">event</a></code> | <code>java.lang.String</code> | The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#id InfraAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.integrationProvider">integrationProvider</a></code> | <code>java.lang.String</code> | For alerts on integrations, use this instead of event. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.processWhere">processWhere</a></code> | <code>java.lang.String</code> | Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.select">select</a></code> | <code>java.lang.String</code> | The attribute name to identify the metric being targeted; |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.violationCloseTimer">violationCloseTimer</a></code> | <code>java.lang.Number</code> | Determines how much time, in hours, will pass before an incident is automatically closed. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | warning block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.where">where</a></code> | <code>java.lang.String</code> | If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#name InfraAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.policyId"></a>

- *Type:* java.lang.Number

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#policy_id InfraAlertCondition#policy_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#type InfraAlertCondition#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.comparison"></a>

- *Type:* java.lang.String

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#comparison InfraAlertCondition#comparison}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.critical"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#critical InfraAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#description InfraAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#enabled InfraAlertCondition#enabled}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.event"></a>

- *Type:* java.lang.String

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#event InfraAlertCondition#event}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#id InfraAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationProvider`<sup>Optional</sup> <a name="integrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.integrationProvider"></a>

- *Type:* java.lang.String

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}

---

##### `processWhere`<sup>Optional</sup> <a name="processWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.processWhere"></a>

- *Type:* java.lang.String

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#process_where InfraAlertCondition#process_where}

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.select"></a>

- *Type:* java.lang.String

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#select InfraAlertCondition#select}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.violationCloseTimer"></a>

- *Type:* java.lang.Number

Determines how much time, in hours, will pass before an incident is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.warning"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#warning InfraAlertCondition#warning}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.Initializer.parameter.where"></a>

- *Type:* java.lang.String

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#where InfraAlertCondition#where}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical">putCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning">putWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison">resetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical">resetCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider">resetIntegrationProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere">resetProcessWhere</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect">resetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer">resetViolationCloseTimer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning">resetWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCritical` <a name="putCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical"></a>

```java
public void putCritical(InfraAlertConditionCritical value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `putWarning` <a name="putWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning"></a>

```java
public void putWarning(InfraAlertConditionWarning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `resetComparison` <a name="resetComparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetComparison"></a>

```java
public void resetComparison()
```

##### `resetCritical` <a name="resetCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetCritical"></a>

```java
public void resetCritical()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetEvent"></a>

```java
public void resetEvent()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetId"></a>

```java
public void resetId()
```

##### `resetIntegrationProvider` <a name="resetIntegrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetIntegrationProvider"></a>

```java
public void resetIntegrationProvider()
```

##### `resetProcessWhere` <a name="resetProcessWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetProcessWhere"></a>

```java
public void resetProcessWhere()
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetRunbookUrl"></a>

```java
public void resetRunbookUrl()
```

##### `resetSelect` <a name="resetSelect" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetSelect"></a>

```java
public void resetSelect()
```

##### `resetViolationCloseTimer` <a name="resetViolationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetViolationCloseTimer"></a>

```java
public void resetViolationCloseTimer()
```

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWarning"></a>

```java
public void resetWarning()
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.resetWhere"></a>

```java
public void resetWhere()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertCondition;

InfraAlertCondition.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertCondition;

InfraAlertCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertCondition;

InfraAlertCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertCondition;

InfraAlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),InfraAlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a InfraAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the InfraAlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing InfraAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the InfraAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid">entityGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput">comparisonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput">criticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput">eventInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput">integrationProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput">processWhereInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput">selectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput">violationCloseTimerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput">warningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput">whereInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison">comparison</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event">event</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider">integrationProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere">processWhere</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select">select</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer">violationCloseTimer</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where">where</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.critical"></a>

```java
public InfraAlertConditionCriticalOutputReference getCritical();
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference">InfraAlertConditionCriticalOutputReference</a>

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.entityGuid"></a>

```java
public java.lang.String getEntityGuid();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warning"></a>

```java
public InfraAlertConditionWarningOutputReference getWarning();
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference">InfraAlertConditionWarningOutputReference</a>

---

##### `comparisonInput`<sup>Optional</sup> <a name="comparisonInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparisonInput"></a>

```java
public java.lang.String getComparisonInput();
```

- *Type:* java.lang.String

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.criticalInput"></a>

```java
public InfraAlertConditionCritical getCriticalInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.eventInput"></a>

```java
public java.lang.String getEventInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationProviderInput`<sup>Optional</sup> <a name="integrationProviderInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProviderInput"></a>

```java
public java.lang.String getIntegrationProviderInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyIdInput"></a>

```java
public java.lang.Number getPolicyIdInput();
```

- *Type:* java.lang.Number

---

##### `processWhereInput`<sup>Optional</sup> <a name="processWhereInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhereInput"></a>

```java
public java.lang.String getProcessWhereInput();
```

- *Type:* java.lang.String

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrlInput"></a>

```java
public java.lang.String getRunbookUrlInput();
```

- *Type:* java.lang.String

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.selectInput"></a>

```java
public java.lang.String getSelectInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `violationCloseTimerInput`<sup>Optional</sup> <a name="violationCloseTimerInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimerInput"></a>

```java
public java.lang.Number getViolationCloseTimerInput();
```

- *Type:* java.lang.Number

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.warningInput"></a>

```java
public InfraAlertConditionWarning getWarningInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.whereInput"></a>

```java
public java.lang.String getWhereInput();
```

- *Type:* java.lang.String

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationProvider`<sup>Required</sup> <a name="integrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.integrationProvider"></a>

```java
public java.lang.String getIntegrationProvider();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

---

##### `processWhere`<sup>Required</sup> <a name="processWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.processWhere"></a>

```java
public java.lang.String getProcessWhere();
```

- *Type:* java.lang.String

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.select"></a>

```java
public java.lang.String getSelect();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `violationCloseTimer`<sup>Required</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.violationCloseTimer"></a>

```java
public java.lang.Number getViolationCloseTimer();
```

- *Type:* java.lang.Number

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InfraAlertConditionConfig <a name="InfraAlertConditionConfig" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertConditionConfig;

InfraAlertConditionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .policyId(java.lang.Number)
    .type(java.lang.String)
//  .comparison(java.lang.String)
//  .critical(InfraAlertConditionCritical)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .event(java.lang.String)
//  .id(java.lang.String)
//  .integrationProvider(java.lang.String)
//  .processWhere(java.lang.String)
//  .runbookUrl(java.lang.String)
//  .select(java.lang.String)
//  .violationCloseTimer(java.lang.Number)
//  .warning(InfraAlertConditionWarning)
//  .where(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The Infrastructure alert condition's name. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the alert policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison">comparison</a></code> | <code>java.lang.String</code> | The operator used to evaluate the threshold value. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Infrastructure alert condition. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the condition is turned on or off. Valid values are true and false. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event">event</a></code> | <code>java.lang.String</code> | The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#id InfraAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider">integrationProvider</a></code> | <code>java.lang.String</code> | For alerts on integrations, use this instead of event. Supported by the infra_metric condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere">processWhere</a></code> | <code>java.lang.String</code> | Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select">select</a></code> | <code>java.lang.String</code> | The attribute name to identify the metric being targeted; |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer">violationCloseTimer</a></code> | <code>java.lang.Number</code> | Determines how much time, in hours, will pass before an incident is automatically closed. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | warning block. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where">where</a></code> | <code>java.lang.String</code> | If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The Infrastructure alert condition's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#name InfraAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

The ID of the alert policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#policy_id InfraAlertCondition#policy_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of Infrastructure alert condition. Valid values are infra_process_running, infra_metric, and infra_host_not_reporting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#type InfraAlertCondition#type}

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.comparison"></a>

```java
public java.lang.String getComparison();
```

- *Type:* java.lang.String

The operator used to evaluate the threshold value.

Valid values are above, below, and equal. Supported by the infra_metric and infra_process_running condition types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#comparison InfraAlertCondition#comparison}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.critical"></a>

```java
public InfraAlertConditionCritical getCritical();
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#critical InfraAlertCondition#critical}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Infrastructure alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#description InfraAlertCondition#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the condition is turned on or off. Valid values are true and false. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#enabled InfraAlertCondition#enabled}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.event"></a>

```java
public java.lang.String getEvent();
```

- *Type:* java.lang.String

The metric event; for example, SystemSample or StorageSample. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#event InfraAlertCondition#event}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#id InfraAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationProvider`<sup>Optional</sup> <a name="integrationProvider" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.integrationProvider"></a>

```java
public java.lang.String getIntegrationProvider();
```

- *Type:* java.lang.String

For alerts on integrations, use this instead of event. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#integration_provider InfraAlertCondition#integration_provider}

---

##### `processWhere`<sup>Optional</sup> <a name="processWhere" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.processWhere"></a>

```java
public java.lang.String getProcessWhere();
```

- *Type:* java.lang.String

Any filters applied to processes; for example: commandName = 'java'. Supported by the infra_process_running condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#process_where InfraAlertCondition#process_where}

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#runbook_url InfraAlertCondition#runbook_url}

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.select"></a>

```java
public java.lang.String getSelect();
```

- *Type:* java.lang.String

The attribute name to identify the metric being targeted;

for example, cpuPercent, diskFreePercent, or memoryResidentSizeBytes. The underlying API will automatically populate this value for Infrastructure integrations (for example diskFreePercent), so make sure to explicitly include this value to avoid diff issues. Supported by the infra_metric condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#select InfraAlertCondition#select}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.violationCloseTimer"></a>

```java
public java.lang.Number getViolationCloseTimer();
```

- *Type:* java.lang.Number

Determines how much time, in hours, will pass before an incident is automatically closed.

Valid values are 1, 2, 4, 8, 12, 24, 48, or 72

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#violation_close_timer InfraAlertCondition#violation_close_timer}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.warning"></a>

```java
public InfraAlertConditionWarning getWarning();
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#warning InfraAlertCondition#warning}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionConfig.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

If applicable, this identifies any Infrastructure host filters used; for example: hostname LIKE '%cassandra%'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#where InfraAlertCondition#where}

---

### InfraAlertConditionCritical <a name="InfraAlertConditionCritical" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertConditionCritical;

InfraAlertConditionCritical.builder()
    .duration(java.lang.Number)
//  .timeFunction(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `timeFunction`<sup>Optional</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

### InfraAlertConditionWarning <a name="InfraAlertConditionWarning" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertConditionWarning;

InfraAlertConditionWarning.builder()
    .duration(java.lang.Number)
//  .timeFunction(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#duration InfraAlertCondition#duration}.

---

##### `timeFunction`<sup>Optional</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#time_function InfraAlertCondition#time_function}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/infra_alert_condition#value InfraAlertCondition#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InfraAlertConditionCriticalOutputReference <a name="InfraAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertConditionCriticalOutputReference;

new InfraAlertConditionCriticalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction">resetTimeFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeFunction` <a name="resetTimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetTimeFunction"></a>

```java
public void resetTimeFunction()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunctionInput"></a>

```java
public java.lang.String getTimeFunctionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCriticalOutputReference.property.internalValue"></a>

```java
public InfraAlertConditionCritical getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionCritical">InfraAlertConditionCritical</a>

---


### InfraAlertConditionWarningOutputReference <a name="InfraAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.infra_alert_condition.InfraAlertConditionWarningOutputReference;

new InfraAlertConditionWarningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction">resetTimeFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeFunction` <a name="resetTimeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetTimeFunction"></a>

```java
public void resetTimeFunction()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunctionInput"></a>

```java
public java.lang.String getTimeFunctionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarningOutputReference.property.internalValue"></a>

```java
public InfraAlertConditionWarning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.infraAlertCondition.InfraAlertConditionWarning">InfraAlertConditionWarning</a>

---



