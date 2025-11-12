# `workload` Submodule <a name="`workload` Submodule" id="@cdktf/provider-newrelic.workload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workload <a name="Workload" id="@cdktf/provider-newrelic.workload.Workload"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload newrelic_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.Workload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.Workload;

Workload.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .description(java.lang.String)
//  .entityGuids(java.util.List<java.lang.String>)
//  .entitySearchQuery(IResolvable|java.util.List<WorkloadEntitySearchQuery>)
//  .id(java.lang.String)
//  .scopeAccountIds(java.util.List<java.lang.Number>)
//  .statusConfigAutomatic(WorkloadStatusConfigAutomatic)
//  .statusConfigStatic(WorkloadStatusConfigStatic)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The workload's name. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to create the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Relevant information about the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.entityGuids">entityGuids</a></code> | <code>java.util.List<java.lang.String></code> | A list of entity GUIDs manually assigned to this workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.entitySearchQuery">entitySearchQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>></code> | entity_search_query block. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#id Workload#id}. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.Number></code> | A list of account IDs that will be used to get entities from. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.statusConfigAutomatic">statusConfigAutomatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | status_config_automatic block. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.statusConfigStatic">statusConfigStatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | status_config_static block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The workload's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#name Workload#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID where you want to create the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#account_id Workload#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Relevant information about the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#description Workload#description}

---

##### `entityGuids`<sup>Optional</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.entityGuids"></a>

- *Type:* java.util.List<java.lang.String>

A list of entity GUIDs manually assigned to this workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `entitySearchQuery`<sup>Optional</sup> <a name="entitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.entitySearchQuery"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>>

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#entity_search_query Workload#entity_search_query}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#id Workload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scopeAccountIds"></a>

- *Type:* java.util.List<java.lang.Number>

A list of account IDs that will be used to get entities from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#scope_account_ids Workload#scope_account_ids}

---

##### `statusConfigAutomatic`<sup>Optional</sup> <a name="statusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.statusConfigAutomatic"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

status_config_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#status_config_automatic Workload#status_config_automatic}

---

##### `statusConfigStatic`<sup>Optional</sup> <a name="statusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.statusConfigStatic"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

status_config_static block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#status_config_static Workload#status_config_static}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery">putEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic">putStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic">putStatusConfigStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetEntityGuids">resetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetEntitySearchQuery">resetEntitySearchQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetScopeAccountIds">resetScopeAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetStatusConfigAutomatic">resetStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetStatusConfigStatic">resetStatusConfigStatic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.Workload.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.workload.Workload.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.workload.Workload.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.workload.Workload.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.workload.Workload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.workload.Workload.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.workload.Workload.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.workload.Workload.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.workload.Workload.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.workload.Workload.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.workload.Workload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.Workload.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.workload.Workload.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.workload.Workload.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.workload.Workload.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.workload.Workload.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.workload.Workload.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.workload.Workload.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.workload.Workload.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntitySearchQuery` <a name="putEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery"></a>

```java
public void putEntitySearchQuery(IResolvable|java.util.List<WorkloadEntitySearchQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>>

---

##### `putStatusConfigAutomatic` <a name="putStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic"></a>

```java
public void putStatusConfigAutomatic(WorkloadStatusConfigAutomatic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---

##### `putStatusConfigStatic` <a name="putStatusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic"></a>

```java
public void putStatusConfigStatic(WorkloadStatusConfigStatic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.workload.Workload.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.workload.Workload.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEntityGuids` <a name="resetEntityGuids" id="@cdktf/provider-newrelic.workload.Workload.resetEntityGuids"></a>

```java
public void resetEntityGuids()
```

##### `resetEntitySearchQuery` <a name="resetEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.resetEntitySearchQuery"></a>

```java
public void resetEntitySearchQuery()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.workload.Workload.resetId"></a>

```java
public void resetId()
```

##### `resetScopeAccountIds` <a name="resetScopeAccountIds" id="@cdktf/provider-newrelic.workload.Workload.resetScopeAccountIds"></a>

```java
public void resetScopeAccountIds()
```

##### `resetStatusConfigAutomatic` <a name="resetStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.resetStatusConfigAutomatic"></a>

```java
public void resetStatusConfigAutomatic()
```

##### `resetStatusConfigStatic` <a name="resetStatusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.resetStatusConfigStatic"></a>

```java
public void resetStatusConfigStatic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.workload.Workload.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.Workload;

Workload.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.workload.Workload.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.Workload;

Workload.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.workload.Workload.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.Workload;

Workload.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.Workload;

Workload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Workload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Workload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Workload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Workload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.compositeEntitySearchQuery">compositeEntitySearchQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entitySearchQuery">entitySearchQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList">WorkloadEntitySearchQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.permalink">permalink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomatic">statusConfigAutomatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference">WorkloadStatusConfigAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigStatic">statusConfigStatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference">WorkloadStatusConfigStaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.workloadId">workloadId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entityGuidsInput">entityGuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entitySearchQueryInput">entitySearchQueryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIdsInput">scopeAccountIdsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomaticInput">statusConfigAutomaticInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigStaticInput">statusConfigStaticInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entityGuids">entityGuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.workload.Workload.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.workload.Workload.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.Workload.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.workload.Workload.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.workload.Workload.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.workload.Workload.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.workload.Workload.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workload.Workload.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workload.Workload.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.workload.Workload.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.workload.Workload.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workload.Workload.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workload.Workload.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compositeEntitySearchQuery`<sup>Required</sup> <a name="compositeEntitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.property.compositeEntitySearchQuery"></a>

```java
public java.lang.String getCompositeEntitySearchQuery();
```

- *Type:* java.lang.String

---

##### `entitySearchQuery`<sup>Required</sup> <a name="entitySearchQuery" id="@cdktf/provider-newrelic.workload.Workload.property.entitySearchQuery"></a>

```java
public WorkloadEntitySearchQueryList getEntitySearchQuery();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList">WorkloadEntitySearchQueryList</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.workload.Workload.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `permalink`<sup>Required</sup> <a name="permalink" id="@cdktf/provider-newrelic.workload.Workload.property.permalink"></a>

```java
public java.lang.String getPermalink();
```

- *Type:* java.lang.String

---

##### `statusConfigAutomatic`<sup>Required</sup> <a name="statusConfigAutomatic" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomatic"></a>

```java
public WorkloadStatusConfigAutomaticOutputReference getStatusConfigAutomatic();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference">WorkloadStatusConfigAutomaticOutputReference</a>

---

##### `statusConfigStatic`<sup>Required</sup> <a name="statusConfigStatic" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigStatic"></a>

```java
public WorkloadStatusConfigStaticOutputReference getStatusConfigStatic();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference">WorkloadStatusConfigStaticOutputReference</a>

---

##### `workloadId`<sup>Required</sup> <a name="workloadId" id="@cdktf/provider-newrelic.workload.Workload.property.workloadId"></a>

```java
public java.lang.Number getWorkloadId();
```

- *Type:* java.lang.Number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.workload.Workload.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.workload.Workload.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entityGuidsInput`<sup>Optional</sup> <a name="entityGuidsInput" id="@cdktf/provider-newrelic.workload.Workload.property.entityGuidsInput"></a>

```java
public java.util.List<java.lang.String> getEntityGuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entitySearchQueryInput`<sup>Optional</sup> <a name="entitySearchQueryInput" id="@cdktf/provider-newrelic.workload.Workload.property.entitySearchQueryInput"></a>

```java
public IResolvable|java.util.List<WorkloadEntitySearchQuery> getEntitySearchQueryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.workload.Workload.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.workload.Workload.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopeAccountIdsInput`<sup>Optional</sup> <a name="scopeAccountIdsInput" id="@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIdsInput"></a>

```java
public java.util.List<java.lang.Number> getScopeAccountIdsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `statusConfigAutomaticInput`<sup>Optional</sup> <a name="statusConfigAutomaticInput" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomaticInput"></a>

```java
public WorkloadStatusConfigAutomatic getStatusConfigAutomaticInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---

##### `statusConfigStaticInput`<sup>Optional</sup> <a name="statusConfigStaticInput" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigStaticInput"></a>

```java
public WorkloadStatusConfigStatic getStatusConfigStaticInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.workload.Workload.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.workload.Workload.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entityGuids`<sup>Required</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.Workload.property.entityGuids"></a>

```java
public java.util.List<java.lang.String> getEntityGuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workload.Workload.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopeAccountIds`<sup>Required</sup> <a name="scopeAccountIds" id="@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIds"></a>

```java
public java.util.List<java.lang.Number> getScopeAccountIds();
```

- *Type:* java.util.List<java.lang.Number>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.workload.Workload.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadConfig <a name="WorkloadConfig" id="@cdktf/provider-newrelic.workload.WorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadConfig;

WorkloadConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .description(java.lang.String)
//  .entityGuids(java.util.List<java.lang.String>)
//  .entitySearchQuery(IResolvable|java.util.List<WorkloadEntitySearchQuery>)
//  .id(java.lang.String)
//  .scopeAccountIds(java.util.List<java.lang.Number>)
//  .statusConfigAutomatic(WorkloadStatusConfigAutomatic)
//  .statusConfigStatic(WorkloadStatusConfigStatic)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.name">name</a></code> | <code>java.lang.String</code> | The workload's name. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to create the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.description">description</a></code> | <code>java.lang.String</code> | Relevant information about the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.entityGuids">entityGuids</a></code> | <code>java.util.List<java.lang.String></code> | A list of entity GUIDs manually assigned to this workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.entitySearchQuery">entitySearchQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>></code> | entity_search_query block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#id Workload#id}. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.scopeAccountIds">scopeAccountIds</a></code> | <code>java.util.List<java.lang.Number></code> | A list of account IDs that will be used to get entities from. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigAutomatic">statusConfigAutomatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | status_config_automatic block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigStatic">statusConfigStatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | status_config_static block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The workload's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#name Workload#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID where you want to create the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#account_id Workload#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Relevant information about the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#description Workload#description}

---

##### `entityGuids`<sup>Optional</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.entityGuids"></a>

```java
public java.util.List<java.lang.String> getEntityGuids();
```

- *Type:* java.util.List<java.lang.String>

A list of entity GUIDs manually assigned to this workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `entitySearchQuery`<sup>Optional</sup> <a name="entitySearchQuery" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.entitySearchQuery"></a>

```java
public IResolvable|java.util.List<WorkloadEntitySearchQuery> getEntitySearchQuery();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>>

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#entity_search_query Workload#entity_search_query}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#id Workload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopeAccountIds`<sup>Optional</sup> <a name="scopeAccountIds" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.scopeAccountIds"></a>

```java
public java.util.List<java.lang.Number> getScopeAccountIds();
```

- *Type:* java.util.List<java.lang.Number>

A list of account IDs that will be used to get entities from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#scope_account_ids Workload#scope_account_ids}

---

##### `statusConfigAutomatic`<sup>Optional</sup> <a name="statusConfigAutomatic" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigAutomatic"></a>

```java
public WorkloadStatusConfigAutomatic getStatusConfigAutomatic();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

status_config_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#status_config_automatic Workload#status_config_automatic}

---

##### `statusConfigStatic`<sup>Optional</sup> <a name="statusConfigStatic" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigStatic"></a>

```java
public WorkloadStatusConfigStatic getStatusConfigStatic();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

status_config_static block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#status_config_static Workload#status_config_static}

---

### WorkloadEntitySearchQuery <a name="WorkloadEntitySearchQuery" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadEntitySearchQuery;

WorkloadEntitySearchQuery.builder()
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.property.query">query</a></code> | <code>java.lang.String</code> | A valid entity search query; empty, and null values are considered invalid. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

A valid entity search query; empty, and null values are considered invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#query Workload#query}

---

### WorkloadStatusConfigAutomatic <a name="WorkloadStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomatic;

WorkloadStatusConfigAutomatic.builder()
    .enabled(java.lang.Boolean|IResolvable)
//  .remainingEntitiesRule(WorkloadStatusConfigAutomaticRemainingEntitiesRule)
//  .rule(IResolvable|java.util.List<WorkloadStatusConfigAutomaticRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the automatic status configuration is enabled or not. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.remainingEntitiesRule">remainingEntitiesRule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | remaining_entities_rule block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>></code> | rule block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the automatic status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#enabled Workload#enabled}

---

##### `remainingEntitiesRule`<sup>Optional</sup> <a name="remainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.remainingEntitiesRule"></a>

```java
public WorkloadStatusConfigAutomaticRemainingEntitiesRule getRemainingEntitiesRule();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

remaining_entities_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#remaining_entities_rule Workload#remaining_entities_rule}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.rule"></a>

```java
public IResolvable|java.util.List<WorkloadStatusConfigAutomaticRule> getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#rule Workload#rule}

---

### WorkloadStatusConfigAutomaticRemainingEntitiesRule <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule;

WorkloadStatusConfigAutomaticRemainingEntitiesRule.builder()
    .remainingEntitiesRuleRollup(WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.property.remainingEntitiesRuleRollup">remainingEntitiesRuleRollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | remaining_entities_rule_rollup block. |

---

##### `remainingEntitiesRuleRollup`<sup>Required</sup> <a name="remainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.property.remainingEntitiesRuleRollup"></a>

```java
public WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup getRemainingEntitiesRuleRollup();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

remaining_entities_rule_rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#remaining_entities_rule_rollup Workload#remaining_entities_rule_rollup}

---

### WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup;

WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.builder()
    .groupBy(java.lang.String)
    .strategy(java.lang.String)
//  .thresholdType(java.lang.String)
//  .thresholdValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.groupBy">groupBy</a></code> | <code>java.lang.String</code> | The grouping to be applied to the remaining entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.strategy">strategy</a></code> | <code>java.lang.String</code> | The rollup strategy that is applied to a group of entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | Type of threshold defined for the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | Threshold value defined for the rule. |

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.groupBy"></a>

```java
public java.lang.String getGroupBy();
```

- *Type:* java.lang.String

The grouping to be applied to the remaining entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#group_by Workload#group_by}

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#strategy Workload#strategy}

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#threshold_type Workload#threshold_type}

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#threshold_value Workload#threshold_value}

---

### WorkloadStatusConfigAutomaticRule <a name="WorkloadStatusConfigAutomaticRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRule;

WorkloadStatusConfigAutomaticRule.builder()
    .rollup(WorkloadStatusConfigAutomaticRuleRollup)
//  .entityGuids(java.util.List<java.lang.String>)
//  .nrqlQuery(IResolvable|java.util.List<WorkloadStatusConfigAutomaticRuleNrqlQuery>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.rollup">rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | rollup block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.entityGuids">entityGuids</a></code> | <code>java.util.List<java.lang.String></code> | A list of entity GUIDs composing the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.nrqlQuery">nrqlQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>></code> | nrql_query block. |

---

##### `rollup`<sup>Required</sup> <a name="rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.rollup"></a>

```java
public WorkloadStatusConfigAutomaticRuleRollup getRollup();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#rollup Workload#rollup}

---

##### `entityGuids`<sup>Optional</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.entityGuids"></a>

```java
public java.util.List<java.lang.String> getEntityGuids();
```

- *Type:* java.util.List<java.lang.String>

A list of entity GUIDs composing the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `nrqlQuery`<sup>Optional</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.nrqlQuery"></a>

```java
public IResolvable|java.util.List<WorkloadStatusConfigAutomaticRuleNrqlQuery> getNrqlQuery();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>>

nrql_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#nrql_query Workload#nrql_query}

---

### WorkloadStatusConfigAutomaticRuleNrqlQuery <a name="WorkloadStatusConfigAutomaticRuleNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery;

WorkloadStatusConfigAutomaticRuleNrqlQuery.builder()
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.property.query">query</a></code> | <code>java.lang.String</code> | The entity search query that is used to perform the search of a group of entities. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The entity search query that is used to perform the search of a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#query Workload#query}

---

### WorkloadStatusConfigAutomaticRuleRollup <a name="WorkloadStatusConfigAutomaticRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup;

WorkloadStatusConfigAutomaticRuleRollup.builder()
    .strategy(java.lang.String)
//  .thresholdType(java.lang.String)
//  .thresholdValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.strategy">strategy</a></code> | <code>java.lang.String</code> | The rollup strategy that is applied to a group of entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | Type of threshold defined for the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | Threshold value defined for the rule. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#strategy Workload#strategy}

---

##### `thresholdType`<sup>Optional</sup> <a name="thresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#threshold_type Workload#threshold_type}

---

##### `thresholdValue`<sup>Optional</sup> <a name="thresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#threshold_value Workload#threshold_value}

---

### WorkloadStatusConfigStatic <a name="WorkloadStatusConfigStatic" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigStatic;

WorkloadStatusConfigStatic.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .status(java.lang.String)
//  .description(java.lang.String)
//  .summary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the static status configuration is enabled or not. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.status">status</a></code> | <code>java.lang.String</code> | The status of the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.description">description</a></code> | <code>java.lang.String</code> | A description that provides additional details about the status of the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.summary">summary</a></code> | <code>java.lang.String</code> | A short description of the status of the workload. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the static status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#enabled Workload#enabled}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#status Workload#status}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description that provides additional details about the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#description Workload#description}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

A short description of the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/workload#summary Workload#summary}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadEntitySearchQueryList <a name="WorkloadEntitySearchQueryList" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadEntitySearchQueryList;

new WorkloadEntitySearchQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get"></a>

```java
public WorkloadEntitySearchQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkloadEntitySearchQuery> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>>

---


### WorkloadEntitySearchQueryOutputReference <a name="WorkloadEntitySearchQueryOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadEntitySearchQueryOutputReference;

new WorkloadEntitySearchQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkloadEntitySearchQuery getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>

---


### WorkloadStatusConfigAutomaticOutputReference <a name="WorkloadStatusConfigAutomaticOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticOutputReference;

new WorkloadStatusConfigAutomaticOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule">putRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRemainingEntitiesRule">resetRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemainingEntitiesRule` <a name="putRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule"></a>

```java
public void putRemainingEntitiesRule(WorkloadStatusConfigAutomaticRemainingEntitiesRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<WorkloadStatusConfigAutomaticRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>>

---

##### `resetRemainingEntitiesRule` <a name="resetRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRemainingEntitiesRule"></a>

```java
public void resetRemainingEntitiesRule()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRule"></a>

```java
public void resetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRule">remainingEntitiesRule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList">WorkloadStatusConfigAutomaticRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRuleInput">remainingEntitiesRuleInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `remainingEntitiesRule`<sup>Required</sup> <a name="remainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRule"></a>

```java
public WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference getRemainingEntitiesRule();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.rule"></a>

```java
public WorkloadStatusConfigAutomaticRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList">WorkloadStatusConfigAutomaticRuleList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `remainingEntitiesRuleInput`<sup>Optional</sup> <a name="remainingEntitiesRuleInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRuleInput"></a>

```java
public WorkloadStatusConfigAutomaticRemainingEntitiesRule getRemainingEntitiesRuleInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.ruleInput"></a>

```java
public IResolvable|java.util.List<WorkloadStatusConfigAutomaticRule> getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.internalValue"></a>

```java
public WorkloadStatusConfigAutomatic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---


### WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference;

new WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup">putRemainingEntitiesRuleRollup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemainingEntitiesRuleRollup` <a name="putRemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup"></a>

```java
public void putRemainingEntitiesRuleRollup(WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollup">remainingEntitiesRuleRollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollupInput">remainingEntitiesRuleRollupInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `remainingEntitiesRuleRollup`<sup>Required</sup> <a name="remainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollup"></a>

```java
public WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference getRemainingEntitiesRuleRollup();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference</a>

---

##### `remainingEntitiesRuleRollupInput`<sup>Optional</sup> <a name="remainingEntitiesRuleRollupInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollupInput"></a>

```java
public WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup getRemainingEntitiesRuleRollupInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.internalValue"></a>

```java
public WorkloadStatusConfigAutomaticRemainingEntitiesRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---


### WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference;

new WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdType">resetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThresholdType` <a name="resetThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdType"></a>

```java
public void resetThresholdType()
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdValue"></a>

```java
public void resetThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupByInput">groupByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupBy">groupBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupByInput"></a>

```java
public java.lang.String getGroupByInput();
```

- *Type:* java.lang.String

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdTypeInput"></a>

```java
public java.lang.String getThresholdTypeInput();
```

- *Type:* java.lang.String

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValueInput"></a>

```java
public java.lang.Number getThresholdValueInput();
```

- *Type:* java.lang.Number

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupBy"></a>

```java
public java.lang.String getGroupBy();
```

- *Type:* java.lang.String

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.internalValue"></a>

```java
public WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---


### WorkloadStatusConfigAutomaticRuleList <a name="WorkloadStatusConfigAutomaticRuleList" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRuleList;

new WorkloadStatusConfigAutomaticRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get"></a>

```java
public WorkloadStatusConfigAutomaticRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkloadStatusConfigAutomaticRule> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>>

---


### WorkloadStatusConfigAutomaticRuleNrqlQueryList <a name="WorkloadStatusConfigAutomaticRuleNrqlQueryList" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList;

new WorkloadStatusConfigAutomaticRuleNrqlQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get"></a>

```java
public WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WorkloadStatusConfigAutomaticRuleNrqlQuery> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>>

---


### WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference <a name="WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference;

new WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkloadStatusConfigAutomaticRuleNrqlQuery getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>

---


### WorkloadStatusConfigAutomaticRuleOutputReference <a name="WorkloadStatusConfigAutomaticRuleOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference;

new WorkloadStatusConfigAutomaticRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery">putNrqlQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup">putRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetEntityGuids">resetEntityGuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetNrqlQuery">resetNrqlQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrqlQuery` <a name="putNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery"></a>

```java
public void putNrqlQuery(IResolvable|java.util.List<WorkloadStatusConfigAutomaticRuleNrqlQuery> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>>

---

##### `putRollup` <a name="putRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup"></a>

```java
public void putRollup(WorkloadStatusConfigAutomaticRuleRollup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---

##### `resetEntityGuids` <a name="resetEntityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetEntityGuids"></a>

```java
public void resetEntityGuids()
```

##### `resetNrqlQuery` <a name="resetNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetNrqlQuery"></a>

```java
public void resetNrqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQuery">nrqlQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList">WorkloadStatusConfigAutomaticRuleNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollup">rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference">WorkloadStatusConfigAutomaticRuleRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuidsInput">entityGuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQueryInput">nrqlQueryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollupInput">rollupInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuids">entityGuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nrqlQuery`<sup>Required</sup> <a name="nrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQuery"></a>

```java
public WorkloadStatusConfigAutomaticRuleNrqlQueryList getNrqlQuery();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList">WorkloadStatusConfigAutomaticRuleNrqlQueryList</a>

---

##### `rollup`<sup>Required</sup> <a name="rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollup"></a>

```java
public WorkloadStatusConfigAutomaticRuleRollupOutputReference getRollup();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference">WorkloadStatusConfigAutomaticRuleRollupOutputReference</a>

---

##### `entityGuidsInput`<sup>Optional</sup> <a name="entityGuidsInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuidsInput"></a>

```java
public java.util.List<java.lang.String> getEntityGuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nrqlQueryInput`<sup>Optional</sup> <a name="nrqlQueryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQueryInput"></a>

```java
public IResolvable|java.util.List<WorkloadStatusConfigAutomaticRuleNrqlQuery> getNrqlQueryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>>

---

##### `rollupInput`<sup>Optional</sup> <a name="rollupInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollupInput"></a>

```java
public WorkloadStatusConfigAutomaticRuleRollup getRollupInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---

##### `entityGuids`<sup>Required</sup> <a name="entityGuids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuids"></a>

```java
public java.util.List<java.lang.String> getEntityGuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkloadStatusConfigAutomaticRule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>

---


### WorkloadStatusConfigAutomaticRuleRollupOutputReference <a name="WorkloadStatusConfigAutomaticRuleRollupOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference;

new WorkloadStatusConfigAutomaticRuleRollupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdType">resetThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdValue">resetThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetThresholdType` <a name="resetThresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdType"></a>

```java
public void resetThresholdType()
```

##### `resetThresholdValue` <a name="resetThresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdValue"></a>

```java
public void resetThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValueInput">thresholdValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdType">thresholdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValue">thresholdValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdTypeInput"></a>

```java
public java.lang.String getThresholdTypeInput();
```

- *Type:* java.lang.String

---

##### `thresholdValueInput`<sup>Optional</sup> <a name="thresholdValueInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValueInput"></a>

```java
public java.lang.Number getThresholdValueInput();
```

- *Type:* java.lang.Number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdType"></a>

```java
public java.lang.String getThresholdType();
```

- *Type:* java.lang.String

---

##### `thresholdValue`<sup>Required</sup> <a name="thresholdValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValue"></a>

```java
public java.lang.Number getThresholdValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.internalValue"></a>

```java
public WorkloadStatusConfigAutomaticRuleRollup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---


### WorkloadStatusConfigStaticOutputReference <a name="WorkloadStatusConfigStaticOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workload.WorkloadStatusConfigStaticOutputReference;

new WorkloadStatusConfigStaticOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetSummary">resetSummary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetSummary"></a>

```java
public void resetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.internalValue"></a>

```java
public WorkloadStatusConfigStatic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---



