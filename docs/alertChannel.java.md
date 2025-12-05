# `alertChannel` Submodule <a name="`alertChannel` Submodule" id="@cdktf/provider-newrelic.alertChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertChannel <a name="AlertChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel newrelic_alert_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_channel.AlertChannel;

AlertChannel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .accountId(java.lang.Number)
//  .config(AlertChannelConfigA)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | (Required) The type of channel. One of: (slack, user, victorops, webhook, email, opsgenie, pagerduty). |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to create alert channels. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#id AlertChannel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#name AlertChannel#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.type"></a>

- *Type:* java.lang.String

(Required) The type of channel. One of: (slack, user, victorops, webhook, email, opsgenie, pagerduty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#type AlertChannel#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID where you want to create alert channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#account_id AlertChannel#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#config AlertChannel#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#id AlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig"></a>

```java
public void putConfig(AlertChannelConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_channel.AlertChannel;

AlertChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_channel.AlertChannel;

AlertChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_channel.AlertChannel;

AlertChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_channel.AlertChannel;

AlertChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AlertChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AlertChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AlertChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AlertChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AlertChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.config"></a>

```java
public AlertChannelConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference">AlertChannelConfigAOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.configInput"></a>

```java
public AlertChannelConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.alertChannel.AlertChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlertChannelConfig <a name="AlertChannelConfig" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_channel.AlertChannelConfig;

AlertChannelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .accountId(java.lang.Number)
//  .config(AlertChannelConfigA)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | (Required) The name of the channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type">type</a></code> | <code>java.lang.String</code> | (Required) The type of channel. One of: (slack, user, victorops, webhook, email, opsgenie, pagerduty). |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to create alert channels. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#id AlertChannel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

(Required) The name of the channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#name AlertChannel#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

(Required) The type of channel. One of: (slack, user, victorops, webhook, email, opsgenie, pagerduty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#type AlertChannel#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID where you want to create alert channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#account_id AlertChannel#account_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.config"></a>

```java
public AlertChannelConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#config AlertChannel#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#id AlertChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AlertChannelConfigA <a name="AlertChannelConfigA" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_channel.AlertChannelConfigA;

AlertChannelConfigA.builder()
//  .apiKey(java.lang.String)
//  .authPassword(java.lang.String)
//  .authType(java.lang.String)
//  .authUsername(java.lang.String)
//  .baseUrl(java.lang.String)
//  .channel(java.lang.String)
//  .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .headersString(java.lang.String)
//  .includeJsonAttachment(java.lang.String)
//  .key(java.lang.String)
//  .payload(java.util.Map<java.lang.String, java.lang.String>)
//  .payloadString(java.lang.String)
//  .payloadType(java.lang.String)
//  .recipients(java.lang.String)
//  .region(java.lang.String)
//  .routeKey(java.lang.String)
//  .serviceKey(java.lang.String)
//  .tags(java.lang.String)
//  .teams(java.lang.String)
//  .url(java.lang.String)
//  .userId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key for integrating with OpsGenie. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | Specifies an authentication password for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType">authType</a></code> | <code>java.lang.String</code> | Specifies an authentication method for use with a channel. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername">authUsername</a></code> | <code>java.lang.String</code> | Specifies an authentication username for use with a channel. Supported by the webhook channel type. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The base URL of the webhook destination. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel">channel</a></code> | <code>java.lang.String</code> | The Slack channel to send notifications to. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString">headersString</a></code> | <code>java.lang.String</code> | Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment">includeJsonAttachment</a></code> | <code>java.lang.String</code> | true or false. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key">key</a></code> | <code>java.lang.String</code> | The key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload">payload</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString">payloadString</a></code> | <code>java.lang.String</code> | Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType">payloadType</a></code> | <code>java.lang.String</code> | Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients">recipients</a></code> | <code>java.lang.String</code> | A set of recipients for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region">region</a></code> | <code>java.lang.String</code> | The data center region to store your data. Valid values are US and EU. Default is US. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | The route key for integrating with VictorOps. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | Specifies the service key for integrating with Pagerduty. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags">tags</a></code> | <code>java.lang.String</code> | A set of tags for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams">teams</a></code> | <code>java.lang.String</code> | A set of teams for targeting notifications. Multiple values are comma separated. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url">url</a></code> | <code>java.lang.String</code> | Your organization's Slack URL. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId">userId</a></code> | <code>java.lang.String</code> | The user ID for use with the user channel type. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

The API key for integrating with OpsGenie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#api_key AlertChannel#api_key}

---

##### `authPassword`<sup>Optional</sup> <a name="authPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

Specifies an authentication password for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#auth_password AlertChannel#auth_password}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Specifies an authentication method for use with a channel.

Supported by the webhook channel type. Only HTTP basic authentication is currently supported via the value BASIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#auth_type AlertChannel#auth_type}

---

##### `authUsername`<sup>Optional</sup> <a name="authUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.authUsername"></a>

```java
public java.lang.String getAuthUsername();
```

- *Type:* java.lang.String

Specifies an authentication username for use with a channel. Supported by the webhook channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#auth_username AlertChannel#auth_username}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

The base URL of the webhook destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#base_url AlertChannel#base_url}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

The Slack channel to send notifications to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#channel AlertChannel#channel}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value pairs that represents extra HTTP headers to be sent along with the webhook payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#headers AlertChannel#headers}

---

##### `headersString`<sup>Optional</sup> <a name="headersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.headersString"></a>

```java
public java.lang.String getHeadersString();
```

- *Type:* java.lang.String

Use instead of headers if the desired payload is more complex than a list of key/value pairs (e.g. a set of headers that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#headers_string AlertChannel#headers_string}

---

##### `includeJsonAttachment`<sup>Optional</sup> <a name="includeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.includeJsonAttachment"></a>

```java
public java.lang.String getIncludeJsonAttachment();
```

- *Type:* java.lang.String

true or false.

Flag for whether or not to attach a JSON document containing information about the associated alert to the email that is sent to recipients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#include_json_attachment AlertChannel#include_json_attachment}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#key AlertChannel#key}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payload"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPayload();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key/value pairs that represents the webhook payload. Must provide payload_type if setting this argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#payload AlertChannel#payload}

---

##### `payloadString`<sup>Optional</sup> <a name="payloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadString"></a>

```java
public java.lang.String getPayloadString();
```

- *Type:* java.lang.String

Use instead of payload if the desired payload is more complex than a list of key/value pairs (e.g. a payload that makes use of nested objects). The value provided should be a valid JSON string with escaped double quotes. Conflicts with payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#payload_string AlertChannel#payload_string}

---

##### `payloadType`<sup>Optional</sup> <a name="payloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.payloadType"></a>

```java
public java.lang.String getPayloadType();
```

- *Type:* java.lang.String

Can either be application/json or application/x-www-form-urlencoded. The payload_type argument is required if payload is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#payload_type AlertChannel#payload_type}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.recipients"></a>

```java
public java.lang.String getRecipients();
```

- *Type:* java.lang.String

A set of recipients for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#recipients AlertChannel#recipients}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The data center region to store your data. Valid values are US and EU. Default is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#region AlertChannel#region}

---

##### `routeKey`<sup>Optional</sup> <a name="routeKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

The route key for integrating with VictorOps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#route_key AlertChannel#route_key}

---

##### `serviceKey`<sup>Optional</sup> <a name="serviceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

Specifies the service key for integrating with Pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#service_key AlertChannel#service_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

A set of tags for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#tags AlertChannel#tags}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.teams"></a>

```java
public java.lang.String getTeams();
```

- *Type:* java.lang.String

A set of teams for targeting notifications. Multiple values are comma separated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#teams AlertChannel#teams}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Your organization's Slack URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#url AlertChannel#url}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

The user ID for use with the user channel type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/alert_channel#user_id AlertChannel#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### AlertChannelConfigAOutputReference <a name="AlertChannelConfigAOutputReference" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.alert_channel.AlertChannelConfigAOutputReference;

new AlertChannelConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword">resetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername">resetAuthUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString">resetHeadersString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment">resetIncludeJsonAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString">resetPayloadString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType">resetPayloadType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients">resetRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey">resetRouteKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey">resetServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams">resetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetAuthPassword` <a name="resetAuthPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthPassword"></a>

```java
public void resetAuthPassword()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetAuthUsername` <a name="resetAuthUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetAuthUsername"></a>

```java
public void resetAuthUsername()
```

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetChannel"></a>

```java
public void resetChannel()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetHeadersString` <a name="resetHeadersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetHeadersString"></a>

```java
public void resetHeadersString()
```

##### `resetIncludeJsonAttachment` <a name="resetIncludeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetIncludeJsonAttachment"></a>

```java
public void resetIncludeJsonAttachment()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetPayload` <a name="resetPayload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayload"></a>

```java
public void resetPayload()
```

##### `resetPayloadString` <a name="resetPayloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadString"></a>

```java
public void resetPayloadString()
```

##### `resetPayloadType` <a name="resetPayloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetPayloadType"></a>

```java
public void resetPayloadType()
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRecipients"></a>

```java
public void resetRecipients()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRouteKey` <a name="resetRouteKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetRouteKey"></a>

```java
public void resetRouteKey()
```

##### `resetServiceKey` <a name="resetServiceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetServiceKey"></a>

```java
public void resetServiceKey()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetTeams` <a name="resetTeams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetTeams"></a>

```java
public void resetTeams()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserId` <a name="resetUserId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.resetUserId"></a>

```java
public void resetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput">authPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput">authUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput">channelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput">headersStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput">includeJsonAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput">payloadInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput">payloadStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput">payloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput">recipientsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput">routeKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput">serviceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput">teamsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput">userIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword">authPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername">authUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel">channel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString">headersString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment">includeJsonAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload">payload</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString">payloadString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType">payloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients">recipients</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams">teams</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `authPasswordInput`<sup>Optional</sup> <a name="authPasswordInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPasswordInput"></a>

```java
public java.lang.String getAuthPasswordInput();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `authUsernameInput`<sup>Optional</sup> <a name="authUsernameInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsernameInput"></a>

```java
public java.lang.String getAuthUsernameInput();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channelInput"></a>

```java
public java.lang.String getChannelInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `headersStringInput`<sup>Optional</sup> <a name="headersStringInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersStringInput"></a>

```java
public java.lang.String getHeadersStringInput();
```

- *Type:* java.lang.String

---

##### `includeJsonAttachmentInput`<sup>Optional</sup> <a name="includeJsonAttachmentInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachmentInput"></a>

```java
public java.lang.String getIncludeJsonAttachmentInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPayloadInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `payloadStringInput`<sup>Optional</sup> <a name="payloadStringInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadStringInput"></a>

```java
public java.lang.String getPayloadStringInput();
```

- *Type:* java.lang.String

---

##### `payloadTypeInput`<sup>Optional</sup> <a name="payloadTypeInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadTypeInput"></a>

```java
public java.lang.String getPayloadTypeInput();
```

- *Type:* java.lang.String

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipientsInput"></a>

```java
public java.lang.String getRecipientsInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKeyInput"></a>

```java
public java.lang.String getRouteKeyInput();
```

- *Type:* java.lang.String

---

##### `serviceKeyInput`<sup>Optional</sup> <a name="serviceKeyInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKeyInput"></a>

```java
public java.lang.String getServiceKeyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teamsInput"></a>

```java
public java.lang.String getTeamsInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userIdInput"></a>

```java
public java.lang.String getUserIdInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authPassword"></a>

```java
public java.lang.String getAuthPassword();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `authUsername`<sup>Required</sup> <a name="authUsername" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.authUsername"></a>

```java
public java.lang.String getAuthUsername();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.channel"></a>

```java
public java.lang.String getChannel();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `headersString`<sup>Required</sup> <a name="headersString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.headersString"></a>

```java
public java.lang.String getHeadersString();
```

- *Type:* java.lang.String

---

##### `includeJsonAttachment`<sup>Required</sup> <a name="includeJsonAttachment" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.includeJsonAttachment"></a>

```java
public java.lang.String getIncludeJsonAttachment();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payload"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPayload();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `payloadString`<sup>Required</sup> <a name="payloadString" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadString"></a>

```java
public java.lang.String getPayloadString();
```

- *Type:* java.lang.String

---

##### `payloadType`<sup>Required</sup> <a name="payloadType" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.payloadType"></a>

```java
public java.lang.String getPayloadType();
```

- *Type:* java.lang.String

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.recipients"></a>

```java
public java.lang.String getRecipients();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.teams"></a>

```java
public java.lang.String getTeams();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.alertChannel.AlertChannelConfigAOutputReference.property.internalValue"></a>

```java
public AlertChannelConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.alertChannel.AlertChannelConfigA">AlertChannelConfigA</a>

---



