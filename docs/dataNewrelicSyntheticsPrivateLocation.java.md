# `dataNewrelicSyntheticsPrivateLocation` Submodule <a name="`dataNewrelicSyntheticsPrivateLocation` Submodule" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicSyntheticsPrivateLocation <a name="DataNewrelicSyntheticsPrivateLocation" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location newrelic_synthetics_private_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_synthetics_private_location.DataNewrelicSyntheticsPrivateLocation;

DataNewrelicSyntheticsPrivateLocation.Builder.create(Construct scope, java.lang.String id)
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
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .key(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Synthetics monitor private location. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.key">key</a></code> | <code>java.util.List<java.lang.String></code> | The key of the queried private location. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Synthetics monitor private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#name DataNewrelicSyntheticsPrivateLocation#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#account_id DataNewrelicSyntheticsPrivateLocation#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.Initializer.parameter.key"></a>

- *Type:* java.util.List<java.lang.String>

The key of the queried private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#key DataNewrelicSyntheticsPrivateLocation#key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetKey">resetKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetId"></a>

```java
public void resetId()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.resetKey"></a>

```java
public void resetKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicSyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_synthetics_private_location.DataNewrelicSyntheticsPrivateLocation;

DataNewrelicSyntheticsPrivateLocation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_synthetics_private_location.DataNewrelicSyntheticsPrivateLocation;

DataNewrelicSyntheticsPrivateLocation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_synthetics_private_location.DataNewrelicSyntheticsPrivateLocation;

DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_synthetics_private_location.DataNewrelicSyntheticsPrivateLocation;

DataNewrelicSyntheticsPrivateLocation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataNewrelicSyntheticsPrivateLocation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataNewrelicSyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataNewrelicSyntheticsPrivateLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataNewrelicSyntheticsPrivateLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicSyntheticsPrivateLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.keyInput">keyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.key">key</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.keyInput"></a>

```java
public java.util.List<java.lang.String> getKeyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.key"></a>

```java
public java.util.List<java.lang.String> getKey();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicSyntheticsPrivateLocationConfig <a name="DataNewrelicSyntheticsPrivateLocationConfig" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_synthetics_private_location.DataNewrelicSyntheticsPrivateLocationConfig;

DataNewrelicSyntheticsPrivateLocationConfig.builder()
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
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .key(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Synthetics monitor private location. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.key">key</a></code> | <code>java.util.List<java.lang.String></code> | The key of the queried private location. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Synthetics monitor private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#name DataNewrelicSyntheticsPrivateLocation#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#account_id DataNewrelicSyntheticsPrivateLocation#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#id DataNewrelicSyntheticsPrivateLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicSyntheticsPrivateLocation.DataNewrelicSyntheticsPrivateLocationConfig.property.key"></a>

```java
public java.util.List<java.lang.String> getKey();
```

- *Type:* java.util.List<java.lang.String>

The key of the queried private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.63.0/docs/data-sources/synthetics_private_location#key DataNewrelicSyntheticsPrivateLocation#key}

---



