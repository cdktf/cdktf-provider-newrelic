# `alertMutingRule` Submodule <a name="`alertMutingRule` Submodule" id="@cdktf/provider-newrelic.alertMutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertMutingRule <a name="AlertMutingRule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule newrelic_alert_muting_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRule;

AlertMutingRule.Builder.create(Construct scope, java.lang.String id)
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
    .condition(AlertMutingRuleCondition)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .actionOnMutingRuleWindowEnded(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .schedule(AlertMutingRuleSchedule)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the MutingRule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account id of the MutingRule.. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.actionOnMutingRuleWindowEnded">actionOnMutingRuleWindowEnded</a></code> | <code>java.lang.String</code> | The action when the muting rule window is ended or disabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#id AlertMutingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | schedule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#condition AlertMutingRule#condition}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the MutingRule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#enabled AlertMutingRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#name AlertMutingRule#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The account id of the MutingRule..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#account_id AlertMutingRule#account_id}

---

##### `actionOnMutingRuleWindowEnded`<sup>Optional</sup> <a name="actionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.actionOnMutingRuleWindowEnded"></a>

- *Type:* java.lang.String

The action when the muting rule window is ended or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#action_on_muting_rule_window_ended AlertMutingRule#action_on_muting_rule_window_ended}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#description AlertMutingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#id AlertMutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#schedule AlertMutingRule#schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetActionOnMutingRuleWindowEnded">resetActionOnMutingRuleWindowEnded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition"></a>

```java
public void putCondition(AlertMutingRuleCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule"></a>

```java
public void putSchedule(AlertMutingRuleSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetActionOnMutingRuleWindowEnded` <a name="resetActionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetActionOnMutingRuleWindowEnded"></a>

```java
public void resetActionOnMutingRuleWindowEnded()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetId"></a>

```java
public void resetId()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.resetSchedule"></a>

```java
public void resetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRule;

AlertMutingRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRule;

AlertMutingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRule;

AlertMutingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRule;

AlertMutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AlertMutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AlertMutingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AlertMutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AlertMutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AlertMutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference">AlertMutingRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference">AlertMutingRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEndedInput">actionOnMutingRuleWindowEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEnded">actionOnMutingRuleWindowEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.condition"></a>

```java
public AlertMutingRuleConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference">AlertMutingRuleConditionOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.schedule"></a>

```java
public AlertMutingRuleScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference">AlertMutingRuleScheduleOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `actionOnMutingRuleWindowEndedInput`<sup>Optional</sup> <a name="actionOnMutingRuleWindowEndedInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEndedInput"></a>

```java
public java.lang.String getActionOnMutingRuleWindowEndedInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.conditionInput"></a>

```java
public AlertMutingRuleCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.scheduleInput"></a>

```java
public AlertMutingRuleSchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `actionOnMutingRuleWindowEnded`<sup>Required</sup> <a name="actionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.actionOnMutingRuleWindowEnded"></a>

```java
public java.lang.String getActionOnMutingRuleWindowEnded();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertMutingRuleCondition <a name="AlertMutingRuleCondition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRuleCondition;

AlertMutingRuleCondition.builder()
    .conditions(IResolvable)
    .conditions(java.util.List<AlertMutingRuleConditionConditions>)
    .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.conditions">conditions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>></code> | conditions block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.operator">operator</a></code> | <code>java.lang.String</code> | The operator used to combine all the MutingRuleConditions within the group. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.conditions"></a>

```java
public java.lang.Object getConditions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#conditions AlertMutingRule#conditions}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The operator used to combine all the MutingRuleConditions within the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

### AlertMutingRuleConditionConditions <a name="AlertMutingRuleConditionConditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRuleConditionConditions;

AlertMutingRuleConditionConditions.builder()
    .attribute(java.lang.String)
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.attribute">attribute</a></code> | <code>java.lang.String</code> | The attribute on an incident. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.operator">operator</a></code> | <code>java.lang.String</code> | The operator used to compare the attribute's value with the supplied value(s). |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The value(s) to compare against the attribute's value. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

The attribute on an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#attribute AlertMutingRule#attribute}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The operator used to compare the attribute's value with the supplied value(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#operator AlertMutingRule#operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The value(s) to compare against the attribute's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#values AlertMutingRule#values}

---

### AlertMutingRuleConfig <a name="AlertMutingRuleConfig" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRuleConfig;

AlertMutingRuleConfig.builder()
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
    .condition(AlertMutingRuleCondition)
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .actionOnMutingRuleWindowEnded(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .schedule(AlertMutingRuleSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the MutingRule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account id of the MutingRule.. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.actionOnMutingRuleWindowEnded">actionOnMutingRuleWindowEnded</a></code> | <code>java.lang.String</code> | The action when the muting rule window is ended or disabled. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the MutingRule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#id AlertMutingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.condition"></a>

```java
public AlertMutingRuleCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#condition AlertMutingRule#condition}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the MutingRule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#enabled AlertMutingRule#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#name AlertMutingRule#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The account id of the MutingRule..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#account_id AlertMutingRule#account_id}

---

##### `actionOnMutingRuleWindowEnded`<sup>Optional</sup> <a name="actionOnMutingRuleWindowEnded" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.actionOnMutingRuleWindowEnded"></a>

```java
public java.lang.String getActionOnMutingRuleWindowEnded();
```

- *Type:* java.lang.String

The action when the muting rule window is ended or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#action_on_muting_rule_window_ended AlertMutingRule#action_on_muting_rule_window_ended}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the MutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#description AlertMutingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#id AlertMutingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConfig.property.schedule"></a>

```java
public AlertMutingRuleSchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#schedule AlertMutingRule#schedule}

---

### AlertMutingRuleSchedule <a name="AlertMutingRuleSchedule" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRuleSchedule;

AlertMutingRuleSchedule.builder()
    .timeZone(java.lang.String)
//  .endRepeat(java.lang.String)
//  .endTime(java.lang.String)
//  .repeat(java.lang.String)
//  .repeatCount(java.lang.Number)
//  .startTime(java.lang.String)
//  .weeklyRepeatDays(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone that applies to the MutingRule schedule. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endRepeat">endRepeat</a></code> | <code>java.lang.String</code> | The datetime stamp when the MutingRule schedule should stop repeating. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The datetime stamp representing when the MutingRule should end. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeat">repeat</a></code> | <code>java.lang.String</code> | The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY]. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeatCount">repeatCount</a></code> | <code>java.lang.Number</code> | The number of times the MutingRule schedule should repeat. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The datetime stamp representing when the MutingRule should start. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.weeklyRepeatDays">weeklyRepeatDays</a></code> | <code>java.util.List<java.lang.String></code> | The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY. |

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone that applies to the MutingRule schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#time_zone AlertMutingRule#time_zone}

---

##### `endRepeat`<sup>Optional</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endRepeat"></a>

```java
public java.lang.String getEndRepeat();
```

- *Type:* java.lang.String

The datetime stamp when the MutingRule schedule should stop repeating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#end_repeat AlertMutingRule#end_repeat}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The datetime stamp representing when the MutingRule should end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#end_time AlertMutingRule#end_time}

---

##### `repeat`<sup>Optional</sup> <a name="repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeat"></a>

```java
public java.lang.String getRepeat();
```

- *Type:* java.lang.String

The frequency the MutingRule schedule repeats. One of [DAILY, WEEKLY, MONTHLY].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#repeat AlertMutingRule#repeat}

---

##### `repeatCount`<sup>Optional</sup> <a name="repeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.repeatCount"></a>

```java
public java.lang.Number getRepeatCount();
```

- *Type:* java.lang.Number

The number of times the MutingRule schedule should repeat.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#repeat_count AlertMutingRule#repeat_count}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The datetime stamp representing when the MutingRule should start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#start_time AlertMutingRule#start_time}

---

##### `weeklyRepeatDays`<sup>Optional</sup> <a name="weeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule.property.weeklyRepeatDays"></a>

```java
public java.util.List<java.lang.String> getWeeklyRepeatDays();
```

- *Type:* java.util.List<java.lang.String>

The day(s) of the week that a MutingRule should repeat when the repeat field is set to WEEKLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/alert_muting_rule#weekly_repeat_days AlertMutingRule#weekly_repeat_days}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertMutingRuleConditionConditionsList <a name="AlertMutingRuleConditionConditionsList" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRuleConditionConditionsList;

new AlertMutingRuleConditionConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get"></a>

```java
public AlertMutingRuleConditionConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>>

---


### AlertMutingRuleConditionConditionsOutputReference <a name="AlertMutingRuleConditionConditionsOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRuleConditionConditionsOutputReference;

new AlertMutingRuleConditionConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>

---


### AlertMutingRuleConditionOutputReference <a name="AlertMutingRuleConditionOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRuleConditionOutputReference;

new AlertMutingRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions">putConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable OR java.util.List<AlertMutingRuleConditionConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.putConditions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList">AlertMutingRuleConditionConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditions"></a>

```java
public AlertMutingRuleConditionConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditionsList">AlertMutingRuleConditionConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.conditionsInput"></a>

```java
public java.lang.Object getConditionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionConditions">AlertMutingRuleConditionConditions</a>>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleConditionOutputReference.property.internalValue"></a>

```java
public AlertMutingRuleCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleCondition">AlertMutingRuleCondition</a>

---


### AlertMutingRuleScheduleOutputReference <a name="AlertMutingRuleScheduleOutputReference" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_muting_rule.AlertMutingRuleScheduleOutputReference;

new AlertMutingRuleScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndRepeat">resetEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeat">resetRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeatCount">resetRepeatCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays">resetWeeklyRepeatDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndRepeat` <a name="resetEndRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndRepeat"></a>

```java
public void resetEndRepeat()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetRepeat` <a name="resetRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeat"></a>

```java
public void resetRepeat()
```

##### `resetRepeatCount` <a name="resetRepeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetRepeatCount"></a>

```java
public void resetRepeatCount()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetWeeklyRepeatDays` <a name="resetWeeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.resetWeeklyRepeatDays"></a>

```java
public void resetWeeklyRepeatDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeatInput">endRepeatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCountInput">repeatCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatInput">repeatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput">weeklyRepeatDaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeat">endRepeat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeat">repeat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCount">repeatCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays">weeklyRepeatDays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endRepeatInput`<sup>Optional</sup> <a name="endRepeatInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeatInput"></a>

```java
public java.lang.String getEndRepeatInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `repeatCountInput`<sup>Optional</sup> <a name="repeatCountInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCountInput"></a>

```java
public java.lang.Number getRepeatCountInput();
```

- *Type:* java.lang.Number

---

##### `repeatInput`<sup>Optional</sup> <a name="repeatInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatInput"></a>

```java
public java.lang.String getRepeatInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `weeklyRepeatDaysInput`<sup>Optional</sup> <a name="weeklyRepeatDaysInput" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDaysInput"></a>

```java
public java.util.List<java.lang.String> getWeeklyRepeatDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `endRepeat`<sup>Required</sup> <a name="endRepeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endRepeat"></a>

```java
public java.lang.String getEndRepeat();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `repeat`<sup>Required</sup> <a name="repeat" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeat"></a>

```java
public java.lang.String getRepeat();
```

- *Type:* java.lang.String

---

##### `repeatCount`<sup>Required</sup> <a name="repeatCount" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.repeatCount"></a>

```java
public java.lang.Number getRepeatCount();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `weeklyRepeatDays`<sup>Required</sup> <a name="weeklyRepeatDays" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.weeklyRepeatDays"></a>

```java
public java.util.List<java.lang.String> getWeeklyRepeatDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleScheduleOutputReference.property.internalValue"></a>

```java
public AlertMutingRuleSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertMutingRule.AlertMutingRuleSchedule">AlertMutingRuleSchedule</a>

---



