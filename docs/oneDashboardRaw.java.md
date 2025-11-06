# `oneDashboardRaw` Submodule <a name="`oneDashboardRaw` Submodule" id="@cdktf/provider-newrelic.oneDashboardRaw"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OneDashboardRaw <a name="OneDashboardRaw" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw newrelic_one_dashboard_raw}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRaw;

OneDashboardRaw.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .page(IResolvable|java.util.List<OneDashboardRawPage>)
//  .accountId(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .permissions(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.page">page</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>></code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.permissions">permissions</a></code> | <code>java.lang.String</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The dashboard's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.page"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>>

page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#page OneDashboardRaw#page}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#account_id OneDashboardRaw#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The dashboard's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.permissions"></a>

- *Type:* java.lang.String

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#permissions OneDashboardRaw#permissions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage">putPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPage` <a name="putPage" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage"></a>

```java
public void putPage(IResolvable|java.util.List<OneDashboardRawPage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetId"></a>

```java
public void resetId()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetPermissions"></a>

```java
public void resetPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OneDashboardRaw resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRaw;

OneDashboardRaw.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRaw;

OneDashboardRaw.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRaw;

OneDashboardRaw.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRaw;

OneDashboardRaw.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OneDashboardRaw.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OneDashboardRaw resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OneDashboardRaw to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OneDashboardRaw that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OneDashboardRaw to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.page">page</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList">OneDashboardRawPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permalink">permalink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.pageInput">pageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissionsInput">permissionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.page"></a>

```java
public OneDashboardRawPageList getPage();
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList">OneDashboardRawPageList</a>

---

##### `permalink`<sup>Required</sup> <a name="permalink" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permalink"></a>

```java
public java.lang.String getPermalink();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.pageInput"></a>

```java
public IResolvable|java.util.List<OneDashboardRawPage> getPageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissionsInput"></a>

```java
public java.lang.String getPermissionsInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OneDashboardRawConfig <a name="OneDashboardRawConfig" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRawConfig;

OneDashboardRawConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .page(IResolvable|java.util.List<OneDashboardRawPage>)
//  .accountId(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .permissions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.name">name</a></code> | <code>java.lang.String</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.page">page</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>></code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.description">description</a></code> | <code>java.lang.String</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.permissions">permissions</a></code> | <code>java.lang.String</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The dashboard's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.page"></a>

```java
public IResolvable|java.util.List<OneDashboardRawPage> getPage();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>>

page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#page OneDashboardRaw#page}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#account_id OneDashboardRaw#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The dashboard's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#permissions OneDashboardRaw#permissions}

---

### OneDashboardRawPage <a name="OneDashboardRawPage" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRawPage;

OneDashboardRawPage.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .widget(IResolvable|java.util.List<OneDashboardRawPageWidget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.name">name</a></code> | <code>java.lang.String</code> | The dashboard page's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.description">description</a></code> | <code>java.lang.String</code> | The dashboard page's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.widget">widget</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>></code> | widget block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The dashboard page's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The dashboard page's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `widget`<sup>Optional</sup> <a name="widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.widget"></a>

```java
public IResolvable|java.util.List<OneDashboardRawPageWidget> getWidget();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>>

widget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#widget OneDashboardRaw#widget}

---

### OneDashboardRawPageWidget <a name="OneDashboardRawPageWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRawPageWidget;

OneDashboardRawPageWidget.builder()
    .column(java.lang.Number)
    .configuration(java.lang.String)
    .row(java.lang.Number)
    .title(java.lang.String)
    .visualizationId(java.lang.String)
//  .height(java.lang.Number)
//  .linkedEntityGuids(java.util.List<java.lang.String>)
//  .width(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.column">column</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#column OneDashboardRaw#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.configuration">configuration</a></code> | <code>java.lang.String</code> | The configuration of the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.row">row</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#row OneDashboardRaw#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.title">title</a></code> | <code>java.lang.String</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.visualizationId">visualizationId</a></code> | <code>java.lang.String</code> | The visualization ID of the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.height">height</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#height OneDashboardRaw#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>java.util.List<java.lang.String></code> | (Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.width">width</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#width OneDashboardRaw#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.column"></a>

```java
public java.lang.Number getColumn();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#column OneDashboardRaw#column}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

The configuration of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#configuration OneDashboardRaw#configuration}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.row"></a>

```java
public java.lang.Number getRow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#row OneDashboardRaw#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

A title for the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#title OneDashboardRaw#title}

---

##### `visualizationId`<sup>Required</sup> <a name="visualizationId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.visualizationId"></a>

```java
public java.lang.String getVisualizationId();
```

- *Type:* java.lang.String

The visualization ID of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#visualization_id OneDashboardRaw#visualization_id}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.height"></a>

```java
public java.lang.Number getHeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#height OneDashboardRaw#height}.

---

##### `linkedEntityGuids`<sup>Optional</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.linkedEntityGuids"></a>

```java
public java.util.List<java.lang.String> getLinkedEntityGuids();
```

- *Type:* java.util.List<java.lang.String>

(Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#linked_entity_guids OneDashboardRaw#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.width"></a>

```java
public java.lang.Number getWidth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/one_dashboard_raw#width OneDashboardRaw#width}.

---

## Classes <a name="Classes" id="Classes"></a>

### OneDashboardRawPageList <a name="OneDashboardRawPageList" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRawPageList;

new OneDashboardRawPageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get"></a>

```java
public OneDashboardRawPageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OneDashboardRawPage> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>>

---


### OneDashboardRawPageOutputReference <a name="OneDashboardRawPageOutputReference" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRawPageOutputReference;

new OneDashboardRawPageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget">putWidget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetWidget">resetWidget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWidget` <a name="putWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget"></a>

```java
public void putWidget(IResolvable|java.util.List<OneDashboardRawPageWidget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetWidget` <a name="resetWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetWidget"></a>

```java
public void resetWidget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widget">widget</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList">OneDashboardRawPageWidgetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widgetInput">widgetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `widget`<sup>Required</sup> <a name="widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widget"></a>

```java
public OneDashboardRawPageWidgetList getWidget();
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList">OneDashboardRawPageWidgetList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `widgetInput`<sup>Optional</sup> <a name="widgetInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widgetInput"></a>

```java
public IResolvable|java.util.List<OneDashboardRawPageWidget> getWidgetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.internalValue"></a>

```java
public IResolvable|OneDashboardRawPage getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>

---


### OneDashboardRawPageWidgetList <a name="OneDashboardRawPageWidgetList" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRawPageWidgetList;

new OneDashboardRawPageWidgetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get"></a>

```java
public OneDashboardRawPageWidgetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OneDashboardRawPageWidget> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>>

---


### OneDashboardRawPageWidgetOutputReference <a name="OneDashboardRawPageWidgetOutputReference" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.one_dashboard_raw.OneDashboardRawPageWidgetOutputReference;

new OneDashboardRawPageWidgetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetLinkedEntityGuids">resetLinkedEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeight` <a name="resetHeight" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetHeight"></a>

```java
public void resetHeight()
```

##### `resetLinkedEntityGuids` <a name="resetLinkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetLinkedEntityGuids"></a>

```java
public void resetLinkedEntityGuids()
```

##### `resetWidth` <a name="resetWidth" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetWidth"></a>

```java
public void resetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.columnInput">columnInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.heightInput">heightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuidsInput">linkedEntityGuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.rowInput">rowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationIdInput">visualizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.widthInput">widthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.column">column</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.height">height</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuids">linkedEntityGuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.row">row</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationId">visualizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.width">width</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.columnInput"></a>

```java
public java.lang.Number getColumnInput();
```

- *Type:* java.lang.Number

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.heightInput"></a>

```java
public java.lang.Number getHeightInput();
```

- *Type:* java.lang.Number

---

##### `linkedEntityGuidsInput`<sup>Optional</sup> <a name="linkedEntityGuidsInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuidsInput"></a>

```java
public java.util.List<java.lang.String> getLinkedEntityGuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rowInput`<sup>Optional</sup> <a name="rowInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.rowInput"></a>

```java
public java.lang.Number getRowInput();
```

- *Type:* java.lang.Number

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `visualizationIdInput`<sup>Optional</sup> <a name="visualizationIdInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationIdInput"></a>

```java
public java.lang.String getVisualizationIdInput();
```

- *Type:* java.lang.String

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.widthInput"></a>

```java
public java.lang.Number getWidthInput();
```

- *Type:* java.lang.Number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.column"></a>

```java
public java.lang.Number getColumn();
```

- *Type:* java.lang.Number

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.height"></a>

```java
public java.lang.Number getHeight();
```

- *Type:* java.lang.Number

---

##### `linkedEntityGuids`<sup>Required</sup> <a name="linkedEntityGuids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuids"></a>

```java
public java.util.List<java.lang.String> getLinkedEntityGuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.row"></a>

```java
public java.lang.Number getRow();
```

- *Type:* java.lang.Number

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `visualizationId`<sup>Required</sup> <a name="visualizationId" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationId"></a>

```java
public java.lang.String getVisualizationId();
```

- *Type:* java.lang.String

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.width"></a>

```java
public java.lang.Number getWidth();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.internalValue"></a>

```java
public IResolvable|OneDashboardRawPageWidget getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>

---



