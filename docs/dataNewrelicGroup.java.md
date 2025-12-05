# `dataNewrelicGroup` Submodule <a name="`dataNewrelicGroup` Submodule" id="@cdktf/provider-newrelic.dataNewrelicGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicGroup <a name="DataNewrelicGroup" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/group newrelic_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_group.DataNewrelicGroup;

DataNewrelicGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authenticationDomainId(java.lang.String)
    .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.authenticationDomainId">authenticationDomainId</a></code> | <code>java.lang.String</code> | The ID of the Authentication Domain the group being queried would belong to. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the group to be queried. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationDomainId`<sup>Required</sup> <a name="authenticationDomainId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.authenticationDomainId"></a>

- *Type:* java.lang.String

The ID of the Authentication Domain the group being queried would belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/group#authentication_domain_id DataNewrelicGroup#authentication_domain_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the group to be queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/group#name DataNewrelicGroup#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataNewrelicGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_group.DataNewrelicGroup;

DataNewrelicGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_group.DataNewrelicGroup;

DataNewrelicGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_group.DataNewrelicGroup;

DataNewrelicGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_group.DataNewrelicGroup;

DataNewrelicGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataNewrelicGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataNewrelicGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataNewrelicGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataNewrelicGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.userIds">userIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.authenticationDomainIdInput">authenticationDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.authenticationDomainId">authenticationDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.userIds"></a>

```java
public java.util.List<java.lang.String> getUserIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationDomainIdInput`<sup>Optional</sup> <a name="authenticationDomainIdInput" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.authenticationDomainIdInput"></a>

```java
public java.lang.String getAuthenticationDomainIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `authenticationDomainId`<sup>Required</sup> <a name="authenticationDomainId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.authenticationDomainId"></a>

```java
public java.lang.String getAuthenticationDomainId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicGroupConfig <a name="DataNewrelicGroupConfig" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.data_newrelic_group.DataNewrelicGroupConfig;

DataNewrelicGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authenticationDomainId(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.authenticationDomainId">authenticationDomainId</a></code> | <code>java.lang.String</code> | The ID of the Authentication Domain the group being queried would belong to. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the group to be queried. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationDomainId`<sup>Required</sup> <a name="authenticationDomainId" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.authenticationDomainId"></a>

```java
public java.lang.String getAuthenticationDomainId();
```

- *Type:* java.lang.String

The ID of the Authentication Domain the group being queried would belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/group#authentication_domain_id DataNewrelicGroup#authentication_domain_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicGroup.DataNewrelicGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the group to be queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/data-sources/group#name DataNewrelicGroup#name}

---



