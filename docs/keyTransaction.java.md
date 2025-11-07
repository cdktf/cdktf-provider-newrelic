# `keyTransaction` Submodule <a name="`keyTransaction` Submodule" id="@cdktf/provider-newrelic.keyTransaction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyTransaction <a name="KeyTransaction" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction newrelic_key_transaction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.key_transaction.KeyTransaction;

KeyTransaction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apdexIndex(java.lang.Number)
    .applicationGuid(java.lang.String)
    .browserApdexTarget(java.lang.Number)
    .metricName(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.apdexIndex">apdexIndex</a></code> | <code>java.lang.Number</code> | The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target). |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.applicationGuid">applicationGuid</a></code> | <code>java.lang.String</code> | The GUID of the application. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.browserApdexTarget">browserApdexTarget</a></code> | <code>java.lang.Number</code> | The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target). |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric underlying this key transaction. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the key transaction. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#id KeyTransaction#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apdexIndex`<sup>Required</sup> <a name="apdexIndex" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.apdexIndex"></a>

- *Type:* java.lang.Number

The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#apdex_index KeyTransaction#apdex_index}

---

##### `applicationGuid`<sup>Required</sup> <a name="applicationGuid" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.applicationGuid"></a>

- *Type:* java.lang.String

The GUID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#application_guid KeyTransaction#application_guid}

---

##### `browserApdexTarget`<sup>Required</sup> <a name="browserApdexTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.browserApdexTarget"></a>

- *Type:* java.lang.Number

The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#browser_apdex_target KeyTransaction#browser_apdex_target}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

The name of the metric underlying this key transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#metric_name KeyTransaction#metric_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the key transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#name KeyTransaction#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#id KeyTransaction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KeyTransaction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.key_transaction.KeyTransaction;

KeyTransaction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.key_transaction.KeyTransaction;

KeyTransaction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.key_transaction.KeyTransaction;

KeyTransaction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.key_transaction.KeyTransaction;

KeyTransaction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeyTransaction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KeyTransaction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeyTransaction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeyTransaction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KeyTransaction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndexInput">apdexIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuidInput">applicationGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTargetInput">browserApdexTargetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndex">apdexIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuid">applicationGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTarget">browserApdexTarget</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `apdexIndexInput`<sup>Optional</sup> <a name="apdexIndexInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndexInput"></a>

```java
public java.lang.Number getApdexIndexInput();
```

- *Type:* java.lang.Number

---

##### `applicationGuidInput`<sup>Optional</sup> <a name="applicationGuidInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuidInput"></a>

```java
public java.lang.String getApplicationGuidInput();
```

- *Type:* java.lang.String

---

##### `browserApdexTargetInput`<sup>Optional</sup> <a name="browserApdexTargetInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTargetInput"></a>

```java
public java.lang.Number getBrowserApdexTargetInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apdexIndex`<sup>Required</sup> <a name="apdexIndex" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.apdexIndex"></a>

```java
public java.lang.Number getApdexIndex();
```

- *Type:* java.lang.Number

---

##### `applicationGuid`<sup>Required</sup> <a name="applicationGuid" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.applicationGuid"></a>

```java
public java.lang.String getApplicationGuid();
```

- *Type:* java.lang.String

---

##### `browserApdexTarget`<sup>Required</sup> <a name="browserApdexTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.browserApdexTarget"></a>

```java
public java.lang.Number getBrowserApdexTarget();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.keyTransaction.KeyTransaction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyTransactionConfig <a name="KeyTransactionConfig" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.key_transaction.KeyTransactionConfig;

KeyTransactionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apdexIndex(java.lang.Number)
    .applicationGuid(java.lang.String)
    .browserApdexTarget(java.lang.Number)
    .metricName(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.apdexIndex">apdexIndex</a></code> | <code>java.lang.Number</code> | The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target). |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.applicationGuid">applicationGuid</a></code> | <code>java.lang.String</code> | The GUID of the application. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.browserApdexTarget">browserApdexTarget</a></code> | <code>java.lang.Number</code> | The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target). |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | The name of the metric underlying this key transaction. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the key transaction. |
| <code><a href="#@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#id KeyTransaction#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apdexIndex`<sup>Required</sup> <a name="apdexIndex" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.apdexIndex"></a>

```java
public java.lang.Number getApdexIndex();
```

- *Type:* java.lang.Number

The acceptable amount of the time spent in the backend before customers get frustrated (Apdex target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#apdex_index KeyTransaction#apdex_index}

---

##### `applicationGuid`<sup>Required</sup> <a name="applicationGuid" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.applicationGuid"></a>

```java
public java.lang.String getApplicationGuid();
```

- *Type:* java.lang.String

The GUID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#application_guid KeyTransaction#application_guid}

---

##### `browserApdexTarget`<sup>Required</sup> <a name="browserApdexTarget" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.browserApdexTarget"></a>

```java
public java.lang.Number getBrowserApdexTarget();
```

- *Type:* java.lang.Number

The acceptable amount of time for rendering a page in a browser before customers get frustrated (browser Apdex target).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#browser_apdex_target KeyTransaction#browser_apdex_target}

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

The name of the metric underlying this key transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#metric_name KeyTransaction#metric_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the key transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#name KeyTransaction#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.keyTransaction.KeyTransactionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.2/docs/resources/key_transaction#id KeyTransaction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



