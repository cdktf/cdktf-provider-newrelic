# `syntheticsAlertCondition` Submodule <a name="`syntheticsAlertCondition` Submodule" id="@cdktf/provider-newrelic.syntheticsAlertCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsAlertCondition <a name="SyntheticsAlertCondition" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition newrelic_synthetics_alert_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_alert_condition.SyntheticsAlertCondition;

SyntheticsAlertCondition.Builder.create(Construct scope, java.lang.String id)
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
    .monitorId(java.lang.String)
    .name(java.lang.String)
    .policyId(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .runbookUrl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.monitorId">monitorId</a></code> | <code>java.lang.String</code> | The ID of the Synthetics monitor to be referenced in the alert condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#id SyntheticsAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.monitorId"></a>

- *Type:* java.lang.String

The ID of the Synthetics monitor to be referenced in the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#monitor_id SyntheticsAlertCondition#monitor_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The title of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#name SyntheticsAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.policyId"></a>

- *Type:* java.lang.Number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#policy_id SyntheticsAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#enabled SyntheticsAlertCondition#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#id SyntheticsAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.Initializer.parameter.runbookUrl"></a>

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#runbook_url SyntheticsAlertCondition#runbook_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetRunbookUrl">resetRunbookUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetId"></a>

```java
public void resetId()
```

##### `resetRunbookUrl` <a name="resetRunbookUrl" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.resetRunbookUrl"></a>

```java
public void resetRunbookUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsAlertCondition resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_alert_condition.SyntheticsAlertCondition;

SyntheticsAlertCondition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_alert_condition.SyntheticsAlertCondition;

SyntheticsAlertCondition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_alert_condition.SyntheticsAlertCondition;

SyntheticsAlertCondition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_alert_condition.SyntheticsAlertCondition;

SyntheticsAlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SyntheticsAlertCondition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SyntheticsAlertCondition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SyntheticsAlertCondition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SyntheticsAlertCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsAlertCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.entityGuid">entityGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.monitorIdInput">monitorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.runbookUrlInput">runbookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entityGuid`<sup>Required</sup> <a name="entityGuid" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.entityGuid"></a>

```java
public java.lang.String getEntityGuid();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.monitorIdInput"></a>

```java
public java.lang.String getMonitorIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.policyIdInput"></a>

```java
public java.lang.Number getPolicyIdInput();
```

- *Type:* java.lang.Number

---

##### `runbookUrlInput`<sup>Optional</sup> <a name="runbookUrlInput" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.runbookUrlInput"></a>

```java
public java.lang.String getRunbookUrlInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

---

##### `runbookUrl`<sup>Required</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertCondition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsAlertConditionConfig <a name="SyntheticsAlertConditionConfig" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_alert_condition.SyntheticsAlertConditionConfig;

SyntheticsAlertConditionConfig.builder()
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
    .monitorId(java.lang.String)
    .name(java.lang.String)
    .policyId(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .runbookUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | The ID of the Synthetics monitor to be referenced in the alert condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The title of this condition. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.policyId">policyId</a></code> | <code>java.lang.Number</code> | The ID of the policy where this condition should be used. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set whether to enable the alert condition. Defaults to true. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#id SyntheticsAlertCondition#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.runbookUrl">runbookUrl</a></code> | <code>java.lang.String</code> | Runbook URL to display in notifications. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

The ID of the Synthetics monitor to be referenced in the alert condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#monitor_id SyntheticsAlertCondition#monitor_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The title of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#name SyntheticsAlertCondition#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.policyId"></a>

```java
public java.lang.Number getPolicyId();
```

- *Type:* java.lang.Number

The ID of the policy where this condition should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#policy_id SyntheticsAlertCondition#policy_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set whether to enable the alert condition. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#enabled SyntheticsAlertCondition#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#id SyntheticsAlertCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runbookUrl`<sup>Optional</sup> <a name="runbookUrl" id="@cdktf/provider-newrelic.syntheticsAlertCondition.SyntheticsAlertConditionConfig.property.runbookUrl"></a>

```java
public java.lang.String getRunbookUrl();
```

- *Type:* java.lang.String

Runbook URL to display in notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/synthetics_alert_condition#runbook_url SyntheticsAlertCondition#runbook_url}

---



