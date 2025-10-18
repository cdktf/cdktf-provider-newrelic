# `dataNewrelicTestGrokPattern` Submodule <a name="`dataNewrelicTestGrokPattern` Submodule" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicTestGrokPattern <a name="DataNewrelicTestGrokPattern" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern newrelic_test_grok_pattern}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPattern;

DataNewrelicTestGrokPattern.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .grok(java.lang.String)
    .logLines(java.util.List<java.lang.String>)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.grok">grok</a></code> | <code>java.lang.String</code> | The Grok pattern to test. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.logLines">logLines</a></code> | <code>java.util.List<java.lang.String></code> | The log lines to test the Grok pattern against. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account id associated with the test grok. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.grok"></a>

- *Type:* java.lang.String

The Grok pattern to test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#grok DataNewrelicTestGrokPattern#grok}

---

##### `logLines`<sup>Required</sup> <a name="logLines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.logLines"></a>

- *Type:* java.util.List<java.lang.String>

The log lines to test the Grok pattern against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#log_lines DataNewrelicTestGrokPattern#log_lines}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The account id associated with the test grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#account_id DataNewrelicTestGrokPattern#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicTestGrokPattern resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPattern;

DataNewrelicTestGrokPattern.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPattern;

DataNewrelicTestGrokPattern.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPattern;

DataNewrelicTestGrokPattern.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPattern;

DataNewrelicTestGrokPattern.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataNewrelicTestGrokPattern.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataNewrelicTestGrokPattern resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataNewrelicTestGrokPattern to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataNewrelicTestGrokPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicTestGrokPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.testGrok">testGrok</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList">DataNewrelicTestGrokPatternTestGrokList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grokInput">grokInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLinesInput">logLinesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grok">grok</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLines">logLines</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `testGrok`<sup>Required</sup> <a name="testGrok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.testGrok"></a>

```java
public DataNewrelicTestGrokPatternTestGrokList getTestGrok();
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList">DataNewrelicTestGrokPatternTestGrokList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `grokInput`<sup>Optional</sup> <a name="grokInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grokInput"></a>

```java
public java.lang.String getGrokInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logLinesInput`<sup>Optional</sup> <a name="logLinesInput" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLinesInput"></a>

```java
public java.util.List<java.lang.String> getLogLinesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.grok"></a>

```java
public java.lang.String getGrok();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logLines`<sup>Required</sup> <a name="logLines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.logLines"></a>

```java
public java.util.List<java.lang.String> getLogLines();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPattern.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicTestGrokPatternConfig <a name="DataNewrelicTestGrokPatternConfig" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPatternConfig;

DataNewrelicTestGrokPatternConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .grok(java.lang.String)
    .logLines(java.util.List<java.lang.String>)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.grok">grok</a></code> | <code>java.lang.String</code> | The Grok pattern to test. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.logLines">logLines</a></code> | <code>java.util.List<java.lang.String></code> | The log lines to test the Grok pattern against. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account id associated with the test grok. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.grok"></a>

```java
public java.lang.String getGrok();
```

- *Type:* java.lang.String

The Grok pattern to test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#grok DataNewrelicTestGrokPattern#grok}

---

##### `logLines`<sup>Required</sup> <a name="logLines" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.logLines"></a>

```java
public java.util.List<java.lang.String> getLogLines();
```

- *Type:* java.util.List<java.lang.String>

The log lines to test the Grok pattern against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#log_lines DataNewrelicTestGrokPattern#log_lines}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The account id associated with the test grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#account_id DataNewrelicTestGrokPattern#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/data-sources/test_grok_pattern#id DataNewrelicTestGrokPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataNewrelicTestGrokPatternTestGrok <a name="DataNewrelicTestGrokPatternTestGrok" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPatternTestGrok;

DataNewrelicTestGrokPatternTestGrok.builder()
    .build();
```


### DataNewrelicTestGrokPatternTestGrokAttributes <a name="DataNewrelicTestGrokPatternTestGrokAttributes" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPatternTestGrokAttributes;

DataNewrelicTestGrokPatternTestGrokAttributes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicTestGrokPatternTestGrokAttributesList <a name="DataNewrelicTestGrokPatternTestGrokAttributesList" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPatternTestGrokAttributesList;

new DataNewrelicTestGrokPatternTestGrokAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get"></a>

```java
public DataNewrelicTestGrokPatternTestGrokAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataNewrelicTestGrokPatternTestGrokAttributesOutputReference <a name="DataNewrelicTestGrokPatternTestGrokAttributesOutputReference" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference;

new DataNewrelicTestGrokPatternTestGrokAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes">DataNewrelicTestGrokPatternTestGrokAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesOutputReference.property.internalValue"></a>

```java
public DataNewrelicTestGrokPatternTestGrokAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributes">DataNewrelicTestGrokPatternTestGrokAttributes</a>

---


### DataNewrelicTestGrokPatternTestGrokList <a name="DataNewrelicTestGrokPatternTestGrokList" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPatternTestGrokList;

new DataNewrelicTestGrokPatternTestGrokList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get"></a>

```java
public DataNewrelicTestGrokPatternTestGrokOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataNewrelicTestGrokPatternTestGrokOutputReference <a name="DataNewrelicTestGrokPatternTestGrokOutputReference" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_test_grok_pattern.DataNewrelicTestGrokPatternTestGrokOutputReference;

new DataNewrelicTestGrokPatternTestGrokOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList">DataNewrelicTestGrokPatternTestGrokAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.logLine">logLine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.matched">matched</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok">DataNewrelicTestGrokPatternTestGrok</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.attributes"></a>

```java
public DataNewrelicTestGrokPatternTestGrokAttributesList getAttributes();
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokAttributesList">DataNewrelicTestGrokPatternTestGrokAttributesList</a>

---

##### `logLine`<sup>Required</sup> <a name="logLine" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.logLine"></a>

```java
public java.lang.String getLogLine();
```

- *Type:* java.lang.String

---

##### `matched`<sup>Required</sup> <a name="matched" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.matched"></a>

```java
public IResolvable getMatched();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrokOutputReference.property.internalValue"></a>

```java
public DataNewrelicTestGrokPatternTestGrok getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicTestGrokPattern.DataNewrelicTestGrokPatternTestGrok">DataNewrelicTestGrokPatternTestGrok</a>

---



