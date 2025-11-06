# `serviceLevel` Submodule <a name="`serviceLevel` Submodule" id="@cdktf/provider-newrelic.serviceLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevel <a name="ServiceLevel" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level newrelic_service_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevel;

ServiceLevel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .events(ServiceLevelEvents)
    .guid(java.lang.String)
    .name(java.lang.String)
    .objective(ServiceLevelObjective)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.events">events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.guid">guid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#guid ServiceLevel#guid}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#name ServiceLevel#name}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.objective">objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | objective block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#id ServiceLevel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.events"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#events ServiceLevel#events}

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.guid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#guid ServiceLevel#guid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#name ServiceLevel#name}.

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.objective"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

objective block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#objective ServiceLevel#objective}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#id ServiceLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents">putEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective">putObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEvents` <a name="putEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents"></a>

```java
public void putEvents(ServiceLevelEvents value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `putObjective` <a name="putObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective"></a>

```java
public void putObjective(ServiceLevelObjective value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevel;

ServiceLevel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevel;

ServiceLevel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevel;

ServiceLevel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevel;

ServiceLevel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceLevel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceLevel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events">events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective">objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid">sliGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId">sliId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput">eventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput">guidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput">objectiveInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events"></a>

```java
public ServiceLevelEventsOutputReference getEvents();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a>

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective"></a>

```java
public ServiceLevelObjectiveOutputReference getObjective();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a>

---

##### `sliGuid`<sup>Required</sup> <a name="sliGuid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid"></a>

```java
public java.lang.String getSliGuid();
```

- *Type:* java.lang.String

---

##### `sliId`<sup>Required</sup> <a name="sliId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId"></a>

```java
public java.lang.String getSliId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput"></a>

```java
public ServiceLevelEvents getEventsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput"></a>

```java
public java.lang.String getGuidInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `objectiveInput`<sup>Optional</sup> <a name="objectiveInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput"></a>

```java
public ServiceLevelObjective getObjectiveInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelConfig <a name="ServiceLevelConfig" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelConfig;

ServiceLevelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .events(ServiceLevelEvents)
    .guid(java.lang.String)
    .name(java.lang.String)
    .objective(ServiceLevelObjective)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events">events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid">guid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#guid ServiceLevel#guid}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#name ServiceLevel#name}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective">objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | objective block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#id ServiceLevel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events"></a>

```java
public ServiceLevelEvents getEvents();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#events ServiceLevel#events}

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#guid ServiceLevel#guid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#name ServiceLevel#name}.

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective"></a>

```java
public ServiceLevelObjective getObjective();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

objective block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#objective ServiceLevel#objective}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#id ServiceLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServiceLevelEvents <a name="ServiceLevelEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEvents;

ServiceLevelEvents.builder()
    .accountId(java.lang.Number)
    .validEvents(ServiceLevelEventsValidEvents)
//  .badEvents(ServiceLevelEventsBadEvents)
//  .goodEvents(ServiceLevelEventsGoodEvents)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#account_id ServiceLevel#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents">validEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | valid_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents">badEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | bad_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents">goodEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | good_events block. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#account_id ServiceLevel#account_id}.

---

##### `validEvents`<sup>Required</sup> <a name="validEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents"></a>

```java
public ServiceLevelEventsValidEvents getValidEvents();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

valid_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#valid_events ServiceLevel#valid_events}

---

##### `badEvents`<sup>Optional</sup> <a name="badEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents"></a>

```java
public ServiceLevelEventsBadEvents getBadEvents();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

bad_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#bad_events ServiceLevel#bad_events}

---

##### `goodEvents`<sup>Optional</sup> <a name="goodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents"></a>

```java
public ServiceLevelEventsGoodEvents getGoodEvents();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

good_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#good_events ServiceLevel#good_events}

---

### ServiceLevelEventsBadEvents <a name="ServiceLevelEventsBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsBadEvents;

ServiceLevelEventsBadEvents.builder()
    .from(java.lang.String)
//  .select(ServiceLevelEventsBadEventsSelect)
//  .where(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where">where</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select"></a>

```java
public ServiceLevelEventsBadEventsSelect getSelect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsBadEventsSelect <a name="ServiceLevelEventsBadEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsBadEventsSelect;

ServiceLevelEventsBadEventsSelect.builder()
    .function(java.lang.String)
//  .attribute(java.lang.String)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function">function</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsGoodEvents <a name="ServiceLevelEventsGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsGoodEvents;

ServiceLevelEventsGoodEvents.builder()
    .from(java.lang.String)
//  .select(ServiceLevelEventsGoodEventsSelect)
//  .where(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where">where</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select"></a>

```java
public ServiceLevelEventsGoodEventsSelect getSelect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsGoodEventsSelect <a name="ServiceLevelEventsGoodEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsGoodEventsSelect;

ServiceLevelEventsGoodEventsSelect.builder()
    .function(java.lang.String)
//  .attribute(java.lang.String)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function">function</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsValidEvents <a name="ServiceLevelEventsValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsValidEvents;

ServiceLevelEventsValidEvents.builder()
    .from(java.lang.String)
//  .select(ServiceLevelEventsValidEventsSelect)
//  .where(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where">where</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select"></a>

```java
public ServiceLevelEventsValidEventsSelect getSelect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsValidEventsSelect <a name="ServiceLevelEventsValidEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsValidEventsSelect;

ServiceLevelEventsValidEventsSelect.builder()
    .function(java.lang.String)
//  .attribute(java.lang.String)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function">function</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelObjective;

ServiceLevelObjective.builder()
    .target(java.lang.Number)
    .timeWindow(ServiceLevelObjectiveTimeWindow)
//  .description(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target">target</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#target ServiceLevel#target}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#name ServiceLevel#name}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#target ServiceLevel#target}.

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow"></a>

```java
public ServiceLevelObjectiveTimeWindow getTimeWindow();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#time_window ServiceLevel#time_window}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#description ServiceLevel#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#name ServiceLevel#name}.

---

### ServiceLevelObjectiveTimeWindow <a name="ServiceLevelObjectiveTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelObjectiveTimeWindow;

ServiceLevelObjectiveTimeWindow.builder()
    .rolling(ServiceLevelObjectiveTimeWindowRolling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | rolling block. |

---

##### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling"></a>

```java
public ServiceLevelObjectiveTimeWindowRolling getRolling();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#rolling ServiceLevel#rolling}

---

### ServiceLevelObjectiveTimeWindowRolling <a name="ServiceLevelObjectiveTimeWindowRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelObjectiveTimeWindowRolling;

ServiceLevelObjectiveTimeWindowRolling.builder()
    .count(java.lang.Number)
    .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count">count</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#count ServiceLevel#count}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#unit ServiceLevel#unit}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#count ServiceLevel#count}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/service_level#unit ServiceLevel#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelEventsBadEventsOutputReference <a name="ServiceLevelEventsBadEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsBadEventsOutputReference;

new ServiceLevelEventsBadEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect">resetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect"></a>

```java
public void putSelect(ServiceLevelEventsBadEventsSelect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `resetSelect` <a name="resetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect"></a>

```java
public void resetSelect()
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere"></a>

```java
public void resetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput">whereInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where">where</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select"></a>

```java
public ServiceLevelEventsBadEventsSelectOutputReference getSelect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput"></a>

```java
public ServiceLevelEventsBadEventsSelect getSelectInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput"></a>

```java
public java.lang.String getWhereInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue"></a>

```java
public ServiceLevelEventsBadEvents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---


### ServiceLevelEventsBadEventsSelectOutputReference <a name="ServiceLevelEventsBadEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsBadEventsSelectOutputReference;

new ServiceLevelEventsBadEventsSelectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput">functionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function">function</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput"></a>

```java
public java.lang.String getFunctionInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue"></a>

```java
public ServiceLevelEventsBadEventsSelect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---


### ServiceLevelEventsGoodEventsOutputReference <a name="ServiceLevelEventsGoodEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsGoodEventsOutputReference;

new ServiceLevelEventsGoodEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect">resetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect"></a>

```java
public void putSelect(ServiceLevelEventsGoodEventsSelect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `resetSelect` <a name="resetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect"></a>

```java
public void resetSelect()
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere"></a>

```java
public void resetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput">whereInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where">where</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select"></a>

```java
public ServiceLevelEventsGoodEventsSelectOutputReference getSelect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput"></a>

```java
public ServiceLevelEventsGoodEventsSelect getSelectInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput"></a>

```java
public java.lang.String getWhereInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue"></a>

```java
public ServiceLevelEventsGoodEvents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---


### ServiceLevelEventsGoodEventsSelectOutputReference <a name="ServiceLevelEventsGoodEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsGoodEventsSelectOutputReference;

new ServiceLevelEventsGoodEventsSelectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput">functionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function">function</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput"></a>

```java
public java.lang.String getFunctionInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue"></a>

```java
public ServiceLevelEventsGoodEventsSelect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---


### ServiceLevelEventsOutputReference <a name="ServiceLevelEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsOutputReference;

new ServiceLevelEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents">putBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents">putGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents">putValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents">resetBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents">resetGoodEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBadEvents` <a name="putBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents"></a>

```java
public void putBadEvents(ServiceLevelEventsBadEvents value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `putGoodEvents` <a name="putGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents"></a>

```java
public void putGoodEvents(ServiceLevelEventsGoodEvents value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `putValidEvents` <a name="putValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents"></a>

```java
public void putValidEvents(ServiceLevelEventsValidEvents value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `resetBadEvents` <a name="resetBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents"></a>

```java
public void resetBadEvents()
```

##### `resetGoodEvents` <a name="resetGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents"></a>

```java
public void resetGoodEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents">badEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents">goodEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents">validEvents</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput">badEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput">goodEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput">validEventsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `badEvents`<sup>Required</sup> <a name="badEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents"></a>

```java
public ServiceLevelEventsBadEventsOutputReference getBadEvents();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a>

---

##### `goodEvents`<sup>Required</sup> <a name="goodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents"></a>

```java
public ServiceLevelEventsGoodEventsOutputReference getGoodEvents();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a>

---

##### `validEvents`<sup>Required</sup> <a name="validEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents"></a>

```java
public ServiceLevelEventsValidEventsOutputReference getValidEvents();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `badEventsInput`<sup>Optional</sup> <a name="badEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput"></a>

```java
public ServiceLevelEventsBadEvents getBadEventsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `goodEventsInput`<sup>Optional</sup> <a name="goodEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput"></a>

```java
public ServiceLevelEventsGoodEvents getGoodEventsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `validEventsInput`<sup>Optional</sup> <a name="validEventsInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput"></a>

```java
public ServiceLevelEventsValidEvents getValidEventsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue"></a>

```java
public ServiceLevelEvents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---


### ServiceLevelEventsValidEventsOutputReference <a name="ServiceLevelEventsValidEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsValidEventsOutputReference;

new ServiceLevelEventsValidEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect">putSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect">resetSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere">resetWhere</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelect` <a name="putSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect"></a>

```java
public void putSelect(ServiceLevelEventsValidEventsSelect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `resetSelect` <a name="resetSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect"></a>

```java
public void resetSelect()
```

##### `resetWhere` <a name="resetWhere" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere"></a>

```java
public void resetWhere()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput">selectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput">whereInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where">where</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select"></a>

```java
public ServiceLevelEventsValidEventsSelectOutputReference getSelect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `selectInput`<sup>Optional</sup> <a name="selectInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput"></a>

```java
public ServiceLevelEventsValidEventsSelect getSelectInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `whereInput`<sup>Optional</sup> <a name="whereInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput"></a>

```java
public java.lang.String getWhereInput();
```

- *Type:* java.lang.String

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where"></a>

```java
public java.lang.String getWhere();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue"></a>

```java
public ServiceLevelEventsValidEvents getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---


### ServiceLevelEventsValidEventsSelectOutputReference <a name="ServiceLevelEventsValidEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelEventsValidEventsSelectOutputReference;

new ServiceLevelEventsValidEventsSelectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput">functionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function">function</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput"></a>

```java
public java.lang.String getFunctionInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue"></a>

```java
public ServiceLevelEventsValidEventsSelect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---


### ServiceLevelObjectiveOutputReference <a name="ServiceLevelObjectiveOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelObjectiveOutputReference;

new ServiceLevelObjectiveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow"></a>

```java
public void putTimeWindow(ServiceLevelObjectiveTimeWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow"></a>

```java
public ServiceLevelObjectiveTimeWindowOutputReference getTimeWindow();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput"></a>

```java
public ServiceLevelObjectiveTimeWindow getTimeWindowInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue"></a>

```java
public ServiceLevelObjective getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---


### ServiceLevelObjectiveTimeWindowOutputReference <a name="ServiceLevelObjectiveTimeWindowOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelObjectiveTimeWindowOutputReference;

new ServiceLevelObjectiveTimeWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling">putRolling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRolling` <a name="putRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling"></a>

```java
public void putRolling(ServiceLevelObjectiveTimeWindowRolling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput">rollingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling"></a>

```java
public ServiceLevelObjectiveTimeWindowRollingOutputReference getRolling();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a>

---

##### `rollingInput`<sup>Optional</sup> <a name="rollingInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput"></a>

```java
public ServiceLevelObjectiveTimeWindowRolling getRollingInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue"></a>

```java
public ServiceLevelObjectiveTimeWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---


### ServiceLevelObjectiveTimeWindowRollingOutputReference <a name="ServiceLevelObjectiveTimeWindowRollingOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.service_level.ServiceLevelObjectiveTimeWindowRollingOutputReference;

new ServiceLevelObjectiveTimeWindowRollingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput">countInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput"></a>

```java
public java.lang.Number getCountInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue"></a>

```java
public ServiceLevelObjectiveTimeWindowRolling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---



