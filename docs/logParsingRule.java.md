# `logParsingRule` Submodule <a name="`logParsingRule` Submodule" id="@cdktf/provider-newrelic.logParsingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogParsingRule <a name="LogParsingRule" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule newrelic_log_parsing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.log_parsing_rule.LogParsingRule;

LogParsingRule.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .grok(java.lang.String)
    .lucene(java.lang.String)
    .name(java.lang.String)
    .nrql(java.lang.String)
//  .accountId(java.lang.Number)
//  .attribute(java.lang.String)
//  .id(java.lang.String)
//  .matched(java.lang.Boolean)
//  .matched(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not this rule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.grok">grok</a></code> | <code>java.lang.String</code> | The Grok of what to parse. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.lucene">lucene</a></code> | <code>java.lang.String</code> | The Lucene to match events to the parsing rule. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A description of what this parsing rule represents. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.nrql">nrql</a></code> | <code>java.lang.String</code> | The NRQL to match events to the parsing rule. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account id associated with the obfuscation expression. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.attribute">attribute</a></code> | <code>java.lang.String</code> | The parsing rule will apply to value of this attribute. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#id LogParsingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.matched">matched</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the Grok pattern matched. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not this rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#enabled LogParsingRule#enabled}

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.grok"></a>

- *Type:* java.lang.String

The Grok of what to parse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#grok LogParsingRule#grok}

---

##### `lucene`<sup>Required</sup> <a name="lucene" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.lucene"></a>

- *Type:* java.lang.String

The Lucene to match events to the parsing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#lucene LogParsingRule#lucene}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A description of what this parsing rule represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#name LogParsingRule#name}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.nrql"></a>

- *Type:* java.lang.String

The NRQL to match events to the parsing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#nrql LogParsingRule#nrql}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The account id associated with the obfuscation expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#account_id LogParsingRule#account_id}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.attribute"></a>

- *Type:* java.lang.String

The parsing rule will apply to value of this attribute.

If field is not provided, value will default to message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#attribute LogParsingRule#attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#id LogParsingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matched`<sup>Optional</sup> <a name="matched" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.matched"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the Grok pattern matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#matched LogParsingRule#matched}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetMatched">resetMatched</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetId"></a>

```java
public void resetId()
```

##### `resetMatched` <a name="resetMatched" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetMatched"></a>

```java
public void resetMatched()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LogParsingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.log_parsing_rule.LogParsingRule;

LogParsingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.log_parsing_rule.LogParsingRule;

LogParsingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.log_parsing_rule.LogParsingRule;

LogParsingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.log_parsing_rule.LogParsingRule;

LogParsingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogParsingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LogParsingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogParsingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogParsingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LogParsingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.deleted">deleted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.grokInput">grokInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.luceneInput">luceneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.matchedInput">matchedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nrqlInput">nrqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.grok">grok</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.lucene">lucene</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.matched">matched</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nrql">nrql</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.deleted"></a>

```java
public IResolvable getDeleted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `grokInput`<sup>Optional</sup> <a name="grokInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.grokInput"></a>

```java
public java.lang.String getGrokInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `luceneInput`<sup>Optional</sup> <a name="luceneInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.luceneInput"></a>

```java
public java.lang.String getLuceneInput();
```

- *Type:* java.lang.String

---

##### `matchedInput`<sup>Optional</sup> <a name="matchedInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.matchedInput"></a>

```java
public java.lang.Object getMatchedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nrqlInput`<sup>Optional</sup> <a name="nrqlInput" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nrqlInput"></a>

```java
public java.lang.String getNrqlInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.grok"></a>

```java
public java.lang.String getGrok();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lucene`<sup>Required</sup> <a name="lucene" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.lucene"></a>

```java
public java.lang.String getLucene();
```

- *Type:* java.lang.String

---

##### `matched`<sup>Required</sup> <a name="matched" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.matched"></a>

```java
public java.lang.Object getMatched();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nrql"></a>

```java
public java.lang.String getNrql();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogParsingRuleConfig <a name="LogParsingRuleConfig" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.log_parsing_rule.LogParsingRuleConfig;

LogParsingRuleConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .grok(java.lang.String)
    .lucene(java.lang.String)
    .name(java.lang.String)
    .nrql(java.lang.String)
//  .accountId(java.lang.Number)
//  .attribute(java.lang.String)
//  .id(java.lang.String)
//  .matched(java.lang.Boolean)
//  .matched(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not this rule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.grok">grok</a></code> | <code>java.lang.String</code> | The Grok of what to parse. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.lucene">lucene</a></code> | <code>java.lang.String</code> | The Lucene to match events to the parsing rule. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | A description of what this parsing rule represents. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.nrql">nrql</a></code> | <code>java.lang.String</code> | The NRQL to match events to the parsing rule. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account id associated with the obfuscation expression. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.attribute">attribute</a></code> | <code>java.lang.String</code> | The parsing rule will apply to value of this attribute. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#id LogParsingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.matched">matched</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the Grok pattern matched. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not this rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#enabled LogParsingRule#enabled}

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.grok"></a>

```java
public java.lang.String getGrok();
```

- *Type:* java.lang.String

The Grok of what to parse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#grok LogParsingRule#grok}

---

##### `lucene`<sup>Required</sup> <a name="lucene" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.lucene"></a>

```java
public java.lang.String getLucene();
```

- *Type:* java.lang.String

The Lucene to match events to the parsing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#lucene LogParsingRule#lucene}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A description of what this parsing rule represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#name LogParsingRule#name}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.nrql"></a>

```java
public java.lang.String getNrql();
```

- *Type:* java.lang.String

The NRQL to match events to the parsing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#nrql LogParsingRule#nrql}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The account id associated with the obfuscation expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#account_id LogParsingRule#account_id}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

The parsing rule will apply to value of this attribute.

If field is not provided, value will default to message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#attribute LogParsingRule#attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#id LogParsingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matched`<sup>Optional</sup> <a name="matched" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.matched"></a>

```java
public java.lang.Object getMatched();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the Grok pattern matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.0/docs/resources/log_parsing_rule#matched LogParsingRule#matched}

---



