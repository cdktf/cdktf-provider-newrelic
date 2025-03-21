# `nrqlDropRule` Submodule <a name="`nrqlDropRule` Submodule" id="@cdktf/provider-newrelic.nrqlDropRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NrqlDropRule <a name="NrqlDropRule" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule newrelic_nrql_drop_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_drop_rule.NrqlDropRule;

NrqlDropRule.Builder.create(Construct scope, java.lang.String id)
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
    .action(java.lang.String)
    .nrql(java.lang.String)
//  .accountId(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The drop rule action (drop_data, drop_attributes, or drop_attributes_from_metric_aggregates). |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.nrql">nrql</a></code> | <code>java.lang.String</code> | Explains which data to apply the drop rule to. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | Account with the NRQL drop rule will be put. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Provides additional information about the rule. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#id NrqlDropRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The drop rule action (drop_data, drop_attributes, or drop_attributes_from_metric_aggregates).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#action NrqlDropRule#action}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.nrql"></a>

- *Type:* java.lang.String

Explains which data to apply the drop rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#nrql NrqlDropRule#nrql}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

Account with the NRQL drop rule will be put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#account_id NrqlDropRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Provides additional information about the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#description NrqlDropRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#id NrqlDropRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NrqlDropRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_drop_rule.NrqlDropRule;

NrqlDropRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_drop_rule.NrqlDropRule;

NrqlDropRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_drop_rule.NrqlDropRule;

NrqlDropRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_drop_rule.NrqlDropRule;

NrqlDropRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NrqlDropRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NrqlDropRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NrqlDropRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NrqlDropRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NrqlDropRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.nrqlInput">nrqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.nrql">nrql</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nrqlInput`<sup>Optional</sup> <a name="nrqlInput" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.nrqlInput"></a>

```java
public java.lang.String getNrqlInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.nrql"></a>

```java
public java.lang.String getNrql();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NrqlDropRuleConfig <a name="NrqlDropRuleConfig" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.nrql_drop_rule.NrqlDropRuleConfig;

NrqlDropRuleConfig.builder()
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
    .action(java.lang.String)
    .nrql(java.lang.String)
//  .accountId(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | The drop rule action (drop_data, drop_attributes, or drop_attributes_from_metric_aggregates). |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.nrql">nrql</a></code> | <code>java.lang.String</code> | Explains which data to apply the drop rule to. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | Account with the NRQL drop rule will be put. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Provides additional information about the rule. |
| <code><a href="#@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#id NrqlDropRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The drop rule action (drop_data, drop_attributes, or drop_attributes_from_metric_aggregates).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#action NrqlDropRule#action}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.nrql"></a>

```java
public java.lang.String getNrql();
```

- *Type:* java.lang.String

Explains which data to apply the drop rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#nrql NrqlDropRule#nrql}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

Account with the NRQL drop rule will be put.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#account_id NrqlDropRule#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Provides additional information about the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#description NrqlDropRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.nrqlDropRule.NrqlDropRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.59.0/docs/resources/nrql_drop_rule#id NrqlDropRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



