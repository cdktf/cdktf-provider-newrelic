# `syntheticsMultilocationAlertCondition` Submodule <a name="`syntheticsMultilocationAlertCondition` Submodule" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsMultilocationAlertCondition <a name="SyntheticsMultilocationAlertCondition" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition newrelic_synthetics_multilocation_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertCondition;

SyntheticsMultilocationAlertCondition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .critical(SyntheticsMultilocationAlertConditionCritical)
    .entities(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .policyId(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .runbookUrl(java.lang.String)
//  .violationTimeLimitSeconds(java.lang.Number)
//  .warning(SyntheticsMultilocationAlertConditionWarning)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.entities">entities</a></code> | <code>java.util.List<java.lang.String></code> | The GUIDs of the Synthetics monitors to alert on. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition will be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.violationTimeLimitSeconds">violationTimeLimitSeconds</a></code> | <code>java.lang.Number</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | warning block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.critical"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#critical SyntheticsMultilocationAlertCondition#critical}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.entities"></a>

- *Type:* java.util.List<java.lang.String>

The GUIDs of the Synthetics monitors to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#entities SyntheticsMultilocationAlertCondition#entities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The title of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#name SyntheticsMultilocationAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.policyId"></a>

- *Type:* java.lang.Number

The ID of the policy where this condition will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#policy_id SyntheticsMultilocationAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#enabled SyntheticsMultilocationAlertCondition#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}

---

##### `violationTimeLimitSeconds`<sup>Optional</sup> <a name="violationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.violationTimeLimitSeconds"></a>

- *Type:* java.lang.Number

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.Initializer.parameter.warning"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#warning SyntheticsMultilocationAlertCondition#warning}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical">putCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning">putWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetViolationTimeLimitSeconds">resetViolationTimeLimitSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetWarning">resetWarning</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCritical` <a name="putCritical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical"></a>

```java
public void putCritical(SyntheticsMultilocationAlertConditionCritical value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putCritical.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---

##### `putWarning` <a name="putWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning"></a>

```java
public void putWarning(SyntheticsMultilocationAlertConditionWarning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.putWarning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetId"></a>

```java
public void resetId()
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetRunbookUrl"></a>

```java
public void resetRunbookUrl()
```

##### `resetViolationTimeLimitSeconds` <a name="resetViolationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetViolationTimeLimitSeconds"></a>

```java
public void resetViolationTimeLimitSeconds()
```

##### `resetWarning` <a name="resetWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.resetWarning"></a>

```java
public void resetWarning()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertCondition;

SyntheticsMultilocationAlertCondition.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertCondition;

SyntheticsMultilocationAlertCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertCondition;

SyntheticsMultilocationAlertCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertCondition;

SyntheticsMultilocationAlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SyntheticsMultilocationAlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SyntheticsMultilocationAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SyntheticsMultilocationAlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SyntheticsMultilocationAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsMultilocationAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference">SyntheticsMultilocationAlertConditionCriticalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entityGuid">entityGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference">SyntheticsMultilocationAlertConditionWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.criticalInput">criticalInput</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entitiesInput">entitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput">violationTimeLimitSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warningInput">warningInput</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entities">entities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds">violationTimeLimitSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.critical"></a>

```java
public SyntheticsMultilocationAlertConditionCriticalOutputReference getCritical();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference">SyntheticsMultilocationAlertConditionCriticalOutputReference</a>

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entityGuid"></a>

```java
public java.lang.String getEntityGuid();
```

- *Type:* java.lang.String

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warning"></a>

```java
public SyntheticsMultilocationAlertConditionWarningOutputReference getWarning();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference">SyntheticsMultilocationAlertConditionWarningOutputReference</a>

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.criticalInput"></a>

```java
public SyntheticsMultilocationAlertConditionCritical getCriticalInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entitiesInput"></a>

```java
public java.util.List<java.lang.String> getEntitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyIdInput"></a>

```java
public java.lang.Number getPolicyIdInput();
```

- *Type:* java.lang.Number

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrlInput"></a>

```java
public java.lang.String getRunbookUrlInput();
```

- *Type:* java.lang.String

---

##### `violationTimeLimitSecondsInput`<sup>Optional</sup> <a name="violationTimeLimitSecondsInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSecondsInput"></a>

```java
public java.lang.Number getViolationTimeLimitSecondsInput();
```

- *Type:* java.lang.Number

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.warningInput"></a>

```java
public SyntheticsMultilocationAlertConditionWarning getWarningInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.entities"></a>

```java
public java.util.List<java.lang.String> getEntities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

---

##### `violationTimeLimitSeconds`<sup>Required</sup> <a name="violationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.violationTimeLimitSeconds"></a>

```java
public java.lang.Number getViolationTimeLimitSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsMultilocationAlertConditionConfig <a name="SyntheticsMultilocationAlertConditionConfig" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertConditionConfig;

SyntheticsMultilocationAlertConditionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .critical(SyntheticsMultilocationAlertConditionCritical)
    .entities(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .policyId(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .runbookUrl(java.lang.String)
//  .violationTimeLimitSeconds(java.lang.Number)
//  .warning(SyntheticsMultilocationAlertConditionWarning)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.critical">critical</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | critical block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.entities">entities</a></code> | <code>java.util.List<java.lang.String></code> | The GUIDs of the Synthetics monitors to alert on. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition will be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds">violationTimeLimitSeconds</a></code> | <code>java.lang.Number</code> | Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.warning">warning</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | warning block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.critical"></a>

```java
public SyntheticsMultilocationAlertConditionCritical getCritical();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

critical block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#critical SyntheticsMultilocationAlertCondition#critical}

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.entities"></a>

```java
public java.util.List<java.lang.String> getEntities();
```

- *Type:* java.util.List<java.lang.String>

The GUIDs of the Synthetics monitors to alert on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#entities SyntheticsMultilocationAlertCondition#entities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The title of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#name SyntheticsMultilocationAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

The ID of the policy where this condition will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#policy_id SyntheticsMultilocationAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#enabled SyntheticsMultilocationAlertCondition#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#id SyntheticsMultilocationAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#runbook_url SyntheticsMultilocationAlertCondition#runbook_url}

---

##### `violationTimeLimitSeconds`<sup>Optional</sup> <a name="violationTimeLimitSeconds" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.violationTimeLimitSeconds"></a>

```java
public java.lang.Number getViolationTimeLimitSeconds();
```

- *Type:* java.lang.Number

Sets a time limit, in seconds, that will automatically force-close a long-lasting incident after the time limit you select.

Must be in the range of 300 to 2592000 (inclusive)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#violation_time_limit_seconds SyntheticsMultilocationAlertCondition#violation_time_limit_seconds}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionConfig.property.warning"></a>

```java
public SyntheticsMultilocationAlertConditionWarning getWarning();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

warning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#warning SyntheticsMultilocationAlertCondition#warning}

---

### SyntheticsMultilocationAlertConditionCritical <a name="SyntheticsMultilocationAlertConditionCritical" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertConditionCritical;

SyntheticsMultilocationAlertConditionCritical.builder()
    .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The minimum number of monitor locations that must be concurrently failing before an incident is opened. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

### SyntheticsMultilocationAlertConditionWarning <a name="SyntheticsMultilocationAlertConditionWarning" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertConditionWarning;

SyntheticsMultilocationAlertConditionWarning.builder()
    .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The minimum number of monitor locations that must be concurrently failing before an incident is opened. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The minimum number of monitor locations that must be concurrently failing before an incident is opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/synthetics_multilocation_alert_condition#threshold SyntheticsMultilocationAlertCondition#threshold}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsMultilocationAlertConditionCriticalOutputReference <a name="SyntheticsMultilocationAlertConditionCriticalOutputReference" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertConditionCriticalOutputReference;

new SyntheticsMultilocationAlertConditionCriticalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCriticalOutputReference.property.internalValue"></a>

```java
public SyntheticsMultilocationAlertConditionCritical getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionCritical">SyntheticsMultilocationAlertConditionCritical</a>

---


### SyntheticsMultilocationAlertConditionWarningOutputReference <a name="SyntheticsMultilocationAlertConditionWarningOutputReference" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_multilocation_alert_condition.SyntheticsMultilocationAlertConditionWarningOutputReference;

new SyntheticsMultilocationAlertConditionWarningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarningOutputReference.property.internalValue"></a>

```java
public SyntheticsMultilocationAlertConditionWarning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMultilocationAlertCondition.SyntheticsMultilocationAlertConditionWarning">SyntheticsMultilocationAlertConditionWarning</a>

---



