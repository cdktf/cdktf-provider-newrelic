# `newrelic_notification_destination`

Refer to the Terraform Registory for docs: [`newrelic_notification_destination`](https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination).

# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="@cdktf/provider-newrelic.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination newrelic_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestination;

NotificationDestination.Builder.create(Construct scope, java.lang.String id)
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
    .property(IResolvable)
    .property(java.util.List<NotificationDestinationProperty>)
    .type(java.lang.String)
//  .accountId(java.lang.Number)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .authBasic(NotificationDestinationAuthBasic)
//  .authToken(NotificationDestinationAuthToken)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | (Required) The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.property">property</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>></code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | (Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE). |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the destination is active. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.authBasic">authBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | auth_basic block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.name"></a>

- *Type:* java.lang.String

(Required) The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#name NotificationDestination#name}

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.property"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>>

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#property NotificationDestination#property}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.type"></a>

- *Type:* java.lang.String

(Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#type NotificationDestination#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#account_id NotificationDestination#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the destination is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#active NotificationDestination#active}

---

##### `authBasic`<sup>Optional</sup> <a name="authBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.authBasic"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

auth_basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_basic NotificationDestination#auth_basic}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.authToken"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_token NotificationDestination#auth_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic">putAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken">putAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty">putProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthBasic">resetAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAuthBasic` <a name="putAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic"></a>

```java
public void putAuthBasic(NotificationDestinationAuthBasic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---

##### `putAuthToken` <a name="putAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken"></a>

```java
public void putAuthToken(NotificationDestinationAuthToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---

##### `putProperty` <a name="putProperty" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty"></a>

```java
public void putProperty(IResolvable OR java.util.List<NotificationDestinationProperty> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.putProperty.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetActive` <a name="resetActive" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetActive"></a>

```java
public void resetActive()
```

##### `resetAuthBasic` <a name="resetAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthBasic"></a>

```java
public void resetAuthBasic()
```

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetAuthToken"></a>

```java
public void resetAuthToken()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestination;

NotificationDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestination;

NotificationDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestination;

NotificationDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasic">authBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference">NotificationDestinationAuthBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference">NotificationDestinationAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lastSent">lastSent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.property">property</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList">NotificationDestinationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasicInput">authBasicInput</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authTokenInput">authTokenInput</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.propertyInput">propertyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authBasic`<sup>Required</sup> <a name="authBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasic"></a>

```java
public NotificationDestinationAuthBasicOutputReference getAuthBasic();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference">NotificationDestinationAuthBasicOutputReference</a>

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authToken"></a>

```java
public NotificationDestinationAuthTokenOutputReference getAuthToken();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference">NotificationDestinationAuthTokenOutputReference</a>

---

##### `lastSent`<sup>Required</sup> <a name="lastSent" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.lastSent"></a>

```java
public java.lang.String getLastSent();
```

- *Type:* java.lang.String

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.property"></a>

```java
public NotificationDestinationPropertyList getProperty();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList">NotificationDestinationPropertyList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authBasicInput`<sup>Optional</sup> <a name="authBasicInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authBasicInput"></a>

```java
public NotificationDestinationAuthBasic getAuthBasicInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.authTokenInput"></a>

```java
public NotificationDestinationAuthToken getAuthTokenInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertyInput`<sup>Optional</sup> <a name="propertyInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.propertyInput"></a>

```java
public java.lang.Object getPropertyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationAuthBasic <a name="NotificationDestinationAuthBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestinationAuthBasic;

NotificationDestinationAuthBasic.builder()
    .password(java.lang.String)
    .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.user">user</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#user NotificationDestination#user}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#user NotificationDestination#user}.

---

### NotificationDestinationAuthToken <a name="NotificationDestinationAuthToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestinationAuthToken;

NotificationDestinationAuthToken.builder()
    .token(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#token NotificationDestination#token}. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#prefix NotificationDestination#prefix}. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#token NotificationDestination#token}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#prefix NotificationDestination#prefix}.

---

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestinationConfig;

NotificationDestinationConfig.builder()
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
    .property(IResolvable)
    .property(java.util.List<NotificationDestinationProperty>)
    .type(java.lang.String)
//  .accountId(java.lang.Number)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .authBasic(NotificationDestinationAuthBasic)
//  .authToken(NotificationDestinationAuthToken)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.name">name</a></code> | <code>java.lang.String</code> | (Required) The name of the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.property">property</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>></code> | property block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.type">type</a></code> | <code>java.lang.String</code> | (Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE). |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account ID under which to put the destination. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the destination is active. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authBasic">authBasic</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | auth_basic block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

(Required) The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#name NotificationDestination#name}

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.property"></a>

```java
public java.lang.Object getProperty();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>>

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#property NotificationDestination#property}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

(Required) The type of the destination. One of: (WEBHOOK, EMAIL, SERVICE_NOW, PAGERDUTY_ACCOUNT_INTEGRATION, PAGERDUTY_SERVICE_INTEGRATION, JIRA, SLACK, SLACK_COLLABORATION, SLACK_LEGACY, MOBILE_PUSH, EVENT_BRIDGE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#type NotificationDestination#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The account ID under which to put the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#account_id NotificationDestination#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the destination is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#active NotificationDestination#active}

---

##### `authBasic`<sup>Optional</sup> <a name="authBasic" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authBasic"></a>

```java
public NotificationDestinationAuthBasic getAuthBasic();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

auth_basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_basic NotificationDestination#auth_basic}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.authToken"></a>

```java
public NotificationDestinationAuthToken getAuthToken();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#auth_token NotificationDestination#auth_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationDestinationProperty <a name="NotificationDestinationProperty" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestinationProperty;

NotificationDestinationProperty.builder()
    .key(java.lang.String)
    .value(java.lang.String)
//  .displayValue(java.lang.String)
//  .label(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.key">key</a></code> | <code>java.lang.String</code> | Notification property key. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.value">value</a></code> | <code>java.lang.String</code> | Notification property value. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.displayValue">displayValue</a></code> | <code>java.lang.String</code> | Notification property display key. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.label">label</a></code> | <code>java.lang.String</code> | Notification property label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Notification property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#key NotificationDestination#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Notification property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#value NotificationDestination#value}

---

##### `displayValue`<sup>Optional</sup> <a name="displayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.displayValue"></a>

```java
public java.lang.String getDisplayValue();
```

- *Type:* java.lang.String

Notification property display key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#display_value NotificationDestination#display_value}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Notification property label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.20.2/docs/resources/notification_destination#label NotificationDestination#label}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationAuthBasicOutputReference <a name="NotificationDestinationAuthBasicOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestinationAuthBasicOutputReference;

new NotificationDestinationAuthBasicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasicOutputReference.property.internalValue"></a>

```java
public NotificationDestinationAuthBasic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthBasic">NotificationDestinationAuthBasic</a>

---


### NotificationDestinationAuthTokenOutputReference <a name="NotificationDestinationAuthTokenOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestinationAuthTokenOutputReference;

new NotificationDestinationAuthTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthTokenOutputReference.property.internalValue"></a>

```java
public NotificationDestinationAuthToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationAuthToken">NotificationDestinationAuthToken</a>

---


### NotificationDestinationPropertyList <a name="NotificationDestinationPropertyList" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestinationPropertyList;

new NotificationDestinationPropertyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get"></a>

```java
public NotificationDestinationPropertyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a>>

---


### NotificationDestinationPropertyOutputReference <a name="NotificationDestinationPropertyOutputReference" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.notification_destination.NotificationDestinationPropertyOutputReference;

new NotificationDestinationPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetDisplayValue">resetDisplayValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayValue` <a name="resetDisplayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetDisplayValue"></a>

```java
public void resetDisplayValue()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.resetLabel"></a>

```java
public void resetLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValueInput">displayValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValue">displayValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayValueInput`<sup>Optional</sup> <a name="displayValueInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValueInput"></a>

```java
public java.lang.String getDisplayValueInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `displayValue`<sup>Required</sup> <a name="displayValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.displayValue"></a>

```java
public java.lang.String getDisplayValue();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.notificationDestination.NotificationDestinationPropertyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.notificationDestination.NotificationDestinationProperty">NotificationDestinationProperty</a> OR com.hashicorp.cdktf.IResolvable

---



