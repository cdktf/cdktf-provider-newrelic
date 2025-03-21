# `cloudAzureLinkAccount` Submodule <a name="`cloudAzureLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudAzureLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAzureLinkAccount <a name="CloudAzureLinkAccount" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account newrelic_cloud_azure_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_azure_link_account.CloudAzureLinkAccount;

CloudAzureLinkAccount.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .clientSecret(java.lang.String)
    .name(java.lang.String)
    .subscriptionId(java.lang.String)
    .tenantId(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Application ID for Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Value of the client secret from Azure. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the linked account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Subscription ID for the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Tenant ID for the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to link the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#id CloudAzureLinkAccount#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Application ID for Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#application_id CloudAzureLinkAccount#application_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

Value of the client secret from Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#client_secret CloudAzureLinkAccount#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the linked account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#name CloudAzureLinkAccount#name}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Subscription ID for the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#subscription_id CloudAzureLinkAccount#subscription_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Tenant ID for the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#tenant_id CloudAzureLinkAccount#tenant_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID where you want to link the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#account_id CloudAzureLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#id CloudAzureLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudAzureLinkAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_azure_link_account.CloudAzureLinkAccount;

CloudAzureLinkAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_azure_link_account.CloudAzureLinkAccount;

CloudAzureLinkAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_azure_link_account.CloudAzureLinkAccount;

CloudAzureLinkAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_azure_link_account.CloudAzureLinkAccount;

CloudAzureLinkAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudAzureLinkAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudAzureLinkAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudAzureLinkAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudAzureLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudAzureLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAzureLinkAccountConfig <a name="CloudAzureLinkAccountConfig" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_azure_link_account.CloudAzureLinkAccountConfig;

CloudAzureLinkAccountConfig.builder()
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
    .applicationId(java.lang.String)
    .clientSecret(java.lang.String)
    .name(java.lang.String)
    .subscriptionId(java.lang.String)
    .tenantId(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Application ID for Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Value of the client secret from Azure. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the linked account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Subscription ID for the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Tenant ID for the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to link the Azure account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#id CloudAzureLinkAccount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Application ID for Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#application_id CloudAzureLinkAccount#application_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Value of the client secret from Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#client_secret CloudAzureLinkAccount#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the linked account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#name CloudAzureLinkAccount#name}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Subscription ID for the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#subscription_id CloudAzureLinkAccount#subscription_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Tenant ID for the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#tenant_id CloudAzureLinkAccount#tenant_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID where you want to link the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#account_id CloudAzureLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/cloud_azure_link_account#id CloudAzureLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



