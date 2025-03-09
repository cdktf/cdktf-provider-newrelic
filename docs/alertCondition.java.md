# `alertCondition` Submodule <a name="`alertCondition` Submodule" id="@cdktf/provider-newrelic.alertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertCondition <a name="AlertCondition" id="@cdktf/provider-newrelic.alertCondition.AlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition newrelic_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertCondition;

AlertCondition.Builder.create(Construct scope, java.lang.String id)
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
    .entities(java.util.List<java.lang.Number>)
    .metric(java.lang.String)
    .name(java.lang.String)
    .policyId(java.lang.Number)
    .term(IResolvable)
    .term(java.util.List<AlertConditionTerm>)
    .type(java.lang.String)
//  .conditionScope(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .gcMetric(java.lang.String)
//  .id(java.lang.String)
//  .runbookUrl(java.lang.String)
//  .userDefinedMetric(java.lang.String)
//  .userDefinedValueFunction(java.lang.String)
//  .violationCloseTimer(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.entities">entities</a></code> | <code>java.util.List<java.lang.Number></code> | The instance IDs associated with this condition. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.metric">metric</a></code> | <code>java.lang.String</code> | The metric field accepts parameters based on the type set. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The title of the condition. Must be between 1 and 128 characters, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.term">term</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>></code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.conditionScope">conditionScope</a></code> | <code>java.lang.String</code> | One of (application, instance). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the condition is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.gcMetric">gcMetric</a></code> | <code>java.lang.String</code> | A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#id AlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.userDefinedMetric">userDefinedMetric</a></code> | <code>java.lang.String</code> | A custom metric to be evaluated. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.userDefinedValueFunction">userDefinedValueFunction</a></code> | <code>java.lang.String</code> | One of: (average, min, max, total, sample_size, percent, rate). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.violationCloseTimer">violationCloseTimer</a></code> | <code>java.lang.Number</code> | Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.entities"></a>

- *Type:* java.util.List<java.lang.Number>

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#entities AlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.metric"></a>

- *Type:* java.lang.String

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#metric AlertCondition#metric}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#name AlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.policyId"></a>

- *Type:* java.lang.Number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#policy_id AlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.term"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>>

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#term AlertCondition#term}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#type AlertCondition#type}

---

##### `conditionScope`<sup>Optional</sup> <a name="conditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.conditionScope"></a>

- *Type:* java.lang.String

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#condition_scope AlertCondition#condition_scope}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#enabled AlertCondition#enabled}

---

##### `gcMetric`<sup>Optional</sup> <a name="gcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.gcMetric"></a>

- *Type:* java.lang.String

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#gc_metric AlertCondition#gc_metric}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#id AlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#runbook_url AlertCondition#runbook_url}

---

##### `userDefinedMetric`<sup>Optional</sup> <a name="userDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.userDefinedMetric"></a>

- *Type:* java.lang.String

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#user_defined_metric AlertCondition#user_defined_metric}

---

##### `userDefinedValueFunction`<sup>Optional</sup> <a name="userDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.userDefinedValueFunction"></a>

- *Type:* java.lang.String

One of: (average, min, max, total, sample_size, percent, rate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.Initializer.parameter.violationCloseTimer"></a>

- *Type:* java.lang.Number

Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified.

Must be between 1 and 720 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#violation_close_timer AlertCondition#violation_close_timer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm">putTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope">resetConditionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric">resetGcMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric">resetUserDefinedMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction">resetUserDefinedValueFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer">resetViolationCloseTimer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerm` <a name="putTerm" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm"></a>

```java
public void putTerm(IResolvable OR java.util.List<AlertConditionTerm> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.putTerm.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>>

---

##### `resetConditionScope` <a name="resetConditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetConditionScope"></a>

```java
public void resetConditionScope()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetGcMetric` <a name="resetGcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetGcMetric"></a>

```java
public void resetGcMetric()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetId"></a>

```java
public void resetId()
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetRunbookUrl"></a>

```java
public void resetRunbookUrl()
```

##### `resetUserDefinedMetric` <a name="resetUserDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedMetric"></a>

```java
public void resetUserDefinedMetric()
```

##### `resetUserDefinedValueFunction` <a name="resetUserDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetUserDefinedValueFunction"></a>

```java
public void resetUserDefinedValueFunction()
```

##### `resetViolationCloseTimer` <a name="resetViolationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.resetViolationCloseTimer"></a>

```java
public void resetViolationCloseTimer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertCondition;

AlertCondition.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertCondition;

AlertCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertCondition;

AlertCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertCondition;

AlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid">entityGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term">term</a></code> | <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput">conditionScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput">entitiesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput">gcMetricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput">termInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput">userDefinedMetricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput">userDefinedValueFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput">violationCloseTimerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope">conditionScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities">entities</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric">gcMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric">userDefinedMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction">userDefinedValueFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer">violationCloseTimer</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entityGuid"></a>

```java
public java.lang.String getEntityGuid();
```

- *Type:* java.lang.String

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.term"></a>

```java
public AlertConditionTermList getTerm();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList">AlertConditionTermList</a>

---

##### `conditionScopeInput`<sup>Optional</sup> <a name="conditionScopeInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScopeInput"></a>

```java
public java.lang.String getConditionScopeInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entitiesInput"></a>

```java
public java.util.List<java.lang.Number> getEntitiesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `gcMetricInput`<sup>Optional</sup> <a name="gcMetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetricInput"></a>

```java
public java.lang.String getGcMetricInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyIdInput"></a>

```java
public java.lang.Number getPolicyIdInput();
```

- *Type:* java.lang.Number

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrlInput"></a>

```java
public java.lang.String getRunbookUrlInput();
```

- *Type:* java.lang.String

---

##### `termInput`<sup>Optional</sup> <a name="termInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.termInput"></a>

```java
public java.lang.Object getTermInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userDefinedMetricInput`<sup>Optional</sup> <a name="userDefinedMetricInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetricInput"></a>

```java
public java.lang.String getUserDefinedMetricInput();
```

- *Type:* java.lang.String

---

##### `userDefinedValueFunctionInput`<sup>Optional</sup> <a name="userDefinedValueFunctionInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunctionInput"></a>

```java
public java.lang.String getUserDefinedValueFunctionInput();
```

- *Type:* java.lang.String

---

##### `violationCloseTimerInput`<sup>Optional</sup> <a name="violationCloseTimerInput" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimerInput"></a>

```java
public java.lang.Number getViolationCloseTimerInput();
```

- *Type:* java.lang.Number

---

##### `conditionScope`<sup>Required</sup> <a name="conditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.conditionScope"></a>

```java
public java.lang.String getConditionScope();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.entities"></a>

```java
public java.util.List<java.lang.Number> getEntities();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `gcMetric`<sup>Required</sup> <a name="gcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.gcMetric"></a>

```java
public java.lang.String getGcMetric();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userDefinedMetric`<sup>Required</sup> <a name="userDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedMetric"></a>

```java
public java.lang.String getUserDefinedMetric();
```

- *Type:* java.lang.String

---

##### `userDefinedValueFunction`<sup>Required</sup> <a name="userDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.userDefinedValueFunction"></a>

```java
public java.lang.String getUserDefinedValueFunction();
```

- *Type:* java.lang.String

---

##### `violationCloseTimer`<sup>Required</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.violationCloseTimer"></a>

```java
public java.lang.Number getViolationCloseTimer();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertCondition.AlertCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertConditionConfig <a name="AlertConditionConfig" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertConditionConfig;

AlertConditionConfig.builder()
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
    .entities(java.util.List<java.lang.Number>)
    .metric(java.lang.String)
    .name(java.lang.String)
    .policyId(java.lang.Number)
    .term(IResolvable)
    .term(java.util.List<AlertConditionTerm>)
    .type(java.lang.String)
//  .conditionScope(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .gcMetric(java.lang.String)
//  .id(java.lang.String)
//  .runbookUrl(java.lang.String)
//  .userDefinedMetric(java.lang.String)
//  .userDefinedValueFunction(java.lang.String)
//  .violationCloseTimer(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities">entities</a></code> | <code>java.util.List<java.lang.Number></code> | The instance IDs associated with this condition. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric">metric</a></code> | <code>java.lang.String</code> | The metric field accepts parameters based on the type set. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The title of the condition. Must be between 1 and 128 characters, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term">term</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>></code> | term block. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope">conditionScope</a></code> | <code>java.lang.String</code> | One of (application, instance). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the condition is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric">gcMetric</a></code> | <code>java.lang.String</code> | A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#id AlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric">userDefinedMetric</a></code> | <code>java.lang.String</code> | A custom metric to be evaluated. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction">userDefinedValueFunction</a></code> | <code>java.lang.String</code> | One of: (average, min, max, total, sample_size, percent, rate). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer">violationCloseTimer</a></code> | <code>java.lang.Number</code> | Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.entities"></a>

```java
public java.util.List<java.lang.Number> getEntities();
```

- *Type:* java.util.List<java.lang.Number>

The instance IDs associated with this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#entities AlertCondition#entities}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

The metric field accepts parameters based on the type set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#metric AlertCondition#metric}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The title of the condition. Must be between 1 and 128 characters, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#name AlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#policy_id AlertCondition#policy_id}

---

##### `term`<sup>Required</sup> <a name="term" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.term"></a>

```java
public java.lang.Object getTerm();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>>

term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#term AlertCondition#term}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of condition. One of: (apm_app_metric, apm_jvm_metric, apm_kt_metric, browser_metric, mobile_metric, servers_metric).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#type AlertCondition#type}

---

##### `conditionScope`<sup>Optional</sup> <a name="conditionScope" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.conditionScope"></a>

```java
public java.lang.String getConditionScope();
```

- *Type:* java.lang.String

One of (application, instance).

Choose application for most scenarios. If you are using the JVM plugin in New Relic, the instance setting allows your condition to trigger for specific app instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#condition_scope AlertCondition#condition_scope}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the condition is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#enabled AlertCondition#enabled}

---

##### `gcMetric`<sup>Optional</sup> <a name="gcMetric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.gcMetric"></a>

```java
public java.lang.String getGcMetric();
```

- *Type:* java.lang.String

A valid Garbage Collection metric e.g. GC/G1 Young Generation. This is required if you are using apm_jvm_metric with gc_cpu_time condition type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#gc_metric AlertCondition#gc_metric}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#id AlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#runbook_url AlertCondition#runbook_url}

---

##### `userDefinedMetric`<sup>Optional</sup> <a name="userDefinedMetric" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedMetric"></a>

```java
public java.lang.String getUserDefinedMetric();
```

- *Type:* java.lang.String

A custom metric to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#user_defined_metric AlertCondition#user_defined_metric}

---

##### `userDefinedValueFunction`<sup>Optional</sup> <a name="userDefinedValueFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.userDefinedValueFunction"></a>

```java
public java.lang.String getUserDefinedValueFunction();
```

- *Type:* java.lang.String

One of: (average, min, max, total, sample_size, percent, rate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#user_defined_value_function AlertCondition#user_defined_value_function}

---

##### `violationCloseTimer`<sup>Optional</sup> <a name="violationCloseTimer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionConfig.property.violationCloseTimer"></a>

```java
public java.lang.Number getViolationCloseTimer();
```

- *Type:* java.lang.Number

Automatically close instance-based incidents, including JVM health metric incidents, after the number of hours specified.

Must be between 1 and 720 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#violation_close_timer AlertCondition#violation_close_timer}

---

### AlertConditionTerm <a name="AlertConditionTerm" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertConditionTerm;

AlertConditionTerm.builder()
    .duration(java.lang.Number)
    .threshold(java.lang.Number)
    .timeFunction(java.lang.String)
//  .operator(java.lang.String)
//  .priority(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration">duration</a></code> | <code>java.lang.Number</code> | In minutes, must be in the range of 5 to 120, inclusive. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Must be 0 or greater. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | One of (all, any). |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator">operator</a></code> | <code>java.lang.String</code> | One of (above, below, equal). Defaults to equal. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority">priority</a></code> | <code>java.lang.String</code> | One of (critical, warning). Defaults to critical. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

In minutes, must be in the range of 5 to 120, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#duration AlertCondition#duration}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Must be 0 or greater.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#threshold AlertCondition#threshold}

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

One of (all, any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#time_function AlertCondition#time_function}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

One of (above, below, equal). Defaults to equal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#operator AlertCondition#operator}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTerm.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

One of (critical, warning). Defaults to critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.1/docs/resources/alert_condition#priority AlertCondition#priority}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConditionTermList <a name="AlertConditionTermList" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertConditionTermList;

new AlertConditionTermList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get"></a>

```java
public AlertConditionTermOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>>

---


### AlertConditionTermOutputReference <a name="AlertConditionTermOutputReference" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_condition.AlertConditionTermOutputReference;

new AlertConditionTermOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority">resetPriority</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.resetPriority"></a>

```java
public void resetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput">timeFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction">timeFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `timeFunctionInput`<sup>Optional</sup> <a name="timeFunctionInput" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunctionInput"></a>

```java
public java.lang.String getTimeFunctionInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `timeFunction`<sup>Required</sup> <a name="timeFunction" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.timeFunction"></a>

```java
public java.lang.String getTimeFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertCondition.AlertConditionTermOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.alertCondition.AlertConditionTerm">AlertConditionTerm</a>

---



