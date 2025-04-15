# `workflow` Submodule <a name="`workflow` Submodule" id="@cdktf/provider-newrelic.workflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workflow <a name="Workflow" id="@cdktf/provider-newrelic.workflow.Workflow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow newrelic_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.Workflow;

Workflow.Builder.create(Construct scope, java.lang.String id)
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
    .destination(IResolvable)
    .destination(java.util.List<WorkflowDestination>)
    .issuesFilter(WorkflowIssuesFilter)
    .mutingRulesHandling(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .destinationsEnabled(java.lang.Boolean)
//  .destinationsEnabled(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .enrichments(WorkflowEnrichments)
//  .enrichmentsEnabled(java.lang.Boolean)
//  .enrichmentsEnabled(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.destination">destination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>></code> | destination block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.issuesFilter">issuesFilter</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | issues_filter block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.mutingRulesHandling">mutingRulesHandling</a></code> | <code>java.lang.String</code> | The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES). |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | (Required) The name of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account id of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.destinationsEnabled">destinationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the destinations are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the workflow is enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enrichments">enrichments</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | enrichments block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enrichmentsEnabled">enrichmentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the enrichments are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#id Workflow#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.destination"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#destination Workflow#destination}

---

##### `issuesFilter`<sup>Required</sup> <a name="issuesFilter" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.issuesFilter"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

issues_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#issues_filter Workflow#issues_filter}

---

##### `mutingRulesHandling`<sup>Required</sup> <a name="mutingRulesHandling" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.mutingRulesHandling"></a>

- *Type:* java.lang.String

The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#muting_rules_handling Workflow#muting_rules_handling}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

(Required) The name of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#name Workflow#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The account id of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#account_id Workflow#account_id}

---

##### `destinationsEnabled`<sup>Optional</sup> <a name="destinationsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.destinationsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the destinations are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#destinations_enabled Workflow#destinations_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the workflow is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#enabled Workflow#enabled}

---

##### `enrichments`<sup>Optional</sup> <a name="enrichments" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enrichments"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

enrichments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#enrichments Workflow#enrichments}

---

##### `enrichmentsEnabled`<sup>Optional</sup> <a name="enrichmentsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enrichmentsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the enrichments are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#enrichments_enabled Workflow#enrichments_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#id Workflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putEnrichments">putEnrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter">putIssuesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetDestinationsEnabled">resetDestinationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnrichments">resetEnrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnrichmentsEnabled">resetEnrichmentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.Workflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.workflow.Workflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.workflow.Workflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.workflow.Workflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.workflow.Workflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.workflow.Workflow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.workflow.Workflow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.workflow.Workflow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-newrelic.workflow.Workflow.putDestination"></a>

```java
public void putDestination(IResolvable OR java.util.List<WorkflowDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.Workflow.putDestination.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>>

---

##### `putEnrichments` <a name="putEnrichments" id="@cdktf/provider-newrelic.workflow.Workflow.putEnrichments"></a>

```java
public void putEnrichments(WorkflowEnrichments value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.Workflow.putEnrichments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

---

##### `putIssuesFilter` <a name="putIssuesFilter" id="@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter"></a>

```java
public void putIssuesFilter(WorkflowIssuesFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.workflow.Workflow.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetDestinationsEnabled` <a name="resetDestinationsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetDestinationsEnabled"></a>

```java
public void resetDestinationsEnabled()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnrichments` <a name="resetEnrichments" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnrichments"></a>

```java
public void resetEnrichments()
```

##### `resetEnrichmentsEnabled` <a name="resetEnrichmentsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnrichmentsEnabled"></a>

```java
public void resetEnrichmentsEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.workflow.Workflow.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.workflow.Workflow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.Workflow;

Workflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workflow.Workflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.Workflow;

Workflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.Workflow;

Workflow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.Workflow;

Workflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Workflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Workflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Workflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Workflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList">WorkflowDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichments">enrichments</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference">WorkflowEnrichmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilter">issuesFilter</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference">WorkflowIssuesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.lastRun">lastRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.workflowId">workflowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationInput">destinationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabledInput">destinationsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabledInput">enrichmentsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsInput">enrichmentsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilterInput">issuesFilterInput</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandlingInput">mutingRulesHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabled">destinationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabled">enrichmentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandling">mutingRulesHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.workflow.Workflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.workflow.Workflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.Workflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.workflow.Workflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workflow.Workflow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workflow.Workflow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.workflow.Workflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.workflow.Workflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workflow.Workflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.Workflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workflow.Workflow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-newrelic.workflow.Workflow.property.destination"></a>

```java
public WorkflowDestinationList getDestination();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList">WorkflowDestinationList</a>

---

##### `enrichments`<sup>Required</sup> <a name="enrichments" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichments"></a>

```java
public WorkflowEnrichmentsOutputReference getEnrichments();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference">WorkflowEnrichmentsOutputReference</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.workflow.Workflow.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `issuesFilter`<sup>Required</sup> <a name="issuesFilter" id="@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilter"></a>

```java
public WorkflowIssuesFilterOutputReference getIssuesFilter();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference">WorkflowIssuesFilterOutputReference</a>

---

##### `lastRun`<sup>Required</sup> <a name="lastRun" id="@cdktf/provider-newrelic.workflow.Workflow.property.lastRun"></a>

```java
public java.lang.String getLastRun();
```

- *Type:* java.lang.String

---

##### `workflowId`<sup>Required</sup> <a name="workflowId" id="@cdktf/provider-newrelic.workflow.Workflow.property.workflowId"></a>

```java
public java.lang.String getWorkflowId();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationInput"></a>

```java
public java.lang.Object getDestinationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>>

---

##### `destinationsEnabledInput`<sup>Optional</sup> <a name="destinationsEnabledInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabledInput"></a>

```java
public java.lang.Object getDestinationsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enrichmentsEnabledInput`<sup>Optional</sup> <a name="enrichmentsEnabledInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabledInput"></a>

```java
public java.lang.Object getEnrichmentsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enrichmentsInput`<sup>Optional</sup> <a name="enrichmentsInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsInput"></a>

```java
public WorkflowEnrichments getEnrichmentsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuesFilterInput`<sup>Optional</sup> <a name="issuesFilterInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilterInput"></a>

```java
public WorkflowIssuesFilter getIssuesFilterInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

---

##### `mutingRulesHandlingInput`<sup>Optional</sup> <a name="mutingRulesHandlingInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandlingInput"></a>

```java
public java.lang.String getMutingRulesHandlingInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.workflow.Workflow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.workflow.Workflow.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `destinationsEnabled`<sup>Required</sup> <a name="destinationsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabled"></a>

```java
public java.lang.Object getDestinationsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enrichmentsEnabled`<sup>Required</sup> <a name="enrichmentsEnabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabled"></a>

```java
public java.lang.Object getEnrichmentsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mutingRulesHandling`<sup>Required</sup> <a name="mutingRulesHandling" id="@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandling"></a>

```java
public java.lang.String getMutingRulesHandling();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.Workflow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.workflow.Workflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowConfig <a name="WorkflowConfig" id="@cdktf/provider-newrelic.workflow.WorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowConfig;

WorkflowConfig.builder()
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
    .destination(IResolvable)
    .destination(java.util.List<WorkflowDestination>)
    .issuesFilter(WorkflowIssuesFilter)
    .mutingRulesHandling(java.lang.String)
    .name(java.lang.String)
//  .accountId(java.lang.Number)
//  .destinationsEnabled(java.lang.Boolean)
//  .destinationsEnabled(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .enrichments(WorkflowEnrichments)
//  .enrichmentsEnabled(java.lang.Boolean)
//  .enrichmentsEnabled(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destination">destination</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>></code> | destination block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.issuesFilter">issuesFilter</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | issues_filter block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.mutingRulesHandling">mutingRulesHandling</a></code> | <code>java.lang.String</code> | The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES). |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.name">name</a></code> | <code>java.lang.String</code> | (Required) The name of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The account id of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destinationsEnabled">destinationsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the destinations are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the workflow is enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichments">enrichments</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | enrichments block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichmentsEnabled">enrichmentsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the enrichments are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#id Workflow#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destination"></a>

```java
public java.lang.Object getDestination();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#destination Workflow#destination}

---

##### `issuesFilter`<sup>Required</sup> <a name="issuesFilter" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.issuesFilter"></a>

```java
public WorkflowIssuesFilter getIssuesFilter();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

issues_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#issues_filter Workflow#issues_filter}

---

##### `mutingRulesHandling`<sup>Required</sup> <a name="mutingRulesHandling" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.mutingRulesHandling"></a>

```java
public java.lang.String getMutingRulesHandling();
```

- *Type:* java.lang.String

The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#muting_rules_handling Workflow#muting_rules_handling}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

(Required) The name of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#name Workflow#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The account id of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#account_id Workflow#account_id}

---

##### `destinationsEnabled`<sup>Optional</sup> <a name="destinationsEnabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destinationsEnabled"></a>

```java
public java.lang.Object getDestinationsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the destinations are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#destinations_enabled Workflow#destinations_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the workflow is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#enabled Workflow#enabled}

---

##### `enrichments`<sup>Optional</sup> <a name="enrichments" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichments"></a>

```java
public WorkflowEnrichments getEnrichments();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

enrichments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#enrichments Workflow#enrichments}

---

##### `enrichmentsEnabled`<sup>Optional</sup> <a name="enrichmentsEnabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichmentsEnabled"></a>

```java
public java.lang.Object getEnrichmentsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the enrichments are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#enrichments_enabled Workflow#enrichments_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#id Workflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkflowDestination <a name="WorkflowDestination" id="@cdktf/provider-newrelic.workflow.WorkflowDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowDestination;

WorkflowDestination.builder()
    .channelId(java.lang.String)
//  .notificationTriggers(java.util.List<java.lang.String>)
//  .updateOriginalMessage(java.lang.Boolean)
//  .updateOriginalMessage(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.channelId">channelId</a></code> | <code>java.lang.String</code> | (Required) Destination's channel id. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.notificationTriggers">notificationTriggers</a></code> | <code>java.util.List<java.lang.String></code> | List of triggers to notify about in this destination configuration. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.updateOriginalMessage">updateOriginalMessage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Update original notification message (Slack channels only). |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

(Required) Destination's channel id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#channel_id Workflow#channel_id}

---

##### `notificationTriggers`<sup>Optional</sup> <a name="notificationTriggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.notificationTriggers"></a>

```java
public java.util.List<java.lang.String> getNotificationTriggers();
```

- *Type:* java.util.List<java.lang.String>

List of triggers to notify about in this destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#notification_triggers Workflow#notification_triggers}

---

##### `updateOriginalMessage`<sup>Optional</sup> <a name="updateOriginalMessage" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.updateOriginalMessage"></a>

```java
public java.lang.Object getUpdateOriginalMessage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Update original notification message (Slack channels only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#update_original_message Workflow#update_original_message}

---

### WorkflowEnrichments <a name="WorkflowEnrichments" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowEnrichments;

WorkflowEnrichments.builder()
    .nrql(IResolvable)
    .nrql(java.util.List<WorkflowEnrichmentsNrql>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments.property.nrql">nrql</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>></code> | nrql block. |

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments.property.nrql"></a>

```java
public java.lang.Object getNrql();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>>

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#nrql Workflow#nrql}

---

### WorkflowEnrichmentsNrql <a name="WorkflowEnrichmentsNrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowEnrichmentsNrql;

WorkflowEnrichmentsNrql.builder()
    .configuration(IResolvable)
    .configuration(java.util.List<WorkflowEnrichmentsNrqlConfiguration>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.configuration">configuration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.name">name</a></code> | <code>java.lang.String</code> | (Required) Enrichment's name. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.configuration"></a>

```java
public java.lang.Object getConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#configuration Workflow#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

(Required) Enrichment's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#name Workflow#name}

---

### WorkflowEnrichmentsNrqlConfiguration <a name="WorkflowEnrichmentsNrqlConfiguration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration;

WorkflowEnrichmentsNrqlConfiguration.builder()
    .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.property.query">query</a></code> | <code>java.lang.String</code> | enrichment's NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

enrichment's NRQL query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#query Workflow#query}

---

### WorkflowIssuesFilter <a name="WorkflowIssuesFilter" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowIssuesFilter;

WorkflowIssuesFilter.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .predicate(IResolvable)
//  .predicate(java.util.List<WorkflowIssuesFilterPredicate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.name">name</a></code> | <code>java.lang.String</code> | (Required) Filter's name. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.type">type</a></code> | <code>java.lang.String</code> | (Required) The type of the filter. One of: (FILTER, VIEW). |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.predicate">predicate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>></code> | predicate block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

(Required) Filter's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#name Workflow#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

(Required) The type of the filter. One of: (FILTER, VIEW).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#type Workflow#type}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.predicate"></a>

```java
public java.lang.Object getPredicate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#predicate Workflow#predicate}

---

### WorkflowIssuesFilterPredicate <a name="WorkflowIssuesFilterPredicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowIssuesFilterPredicate;

WorkflowIssuesFilterPredicate.builder()
    .attribute(java.lang.String)
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.attribute">attribute</a></code> | <code>java.lang.String</code> | (Required) predicate's attribute. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.operator">operator</a></code> | <code>java.lang.String</code> | The type of the operator. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | List of predicate values. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

(Required) predicate's attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#attribute Workflow#attribute}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The type of the operator.

One of: (CONTAINS, DOES_NOT_CONTAIN, DOES_NOT_EQUAL, DOES_NOT_EXACTLY_MATCH, ENDS_WITH, EQUAL, EXACTLY_MATCHES, GREATER_OR_EQUAL, GREATER_THAN, IS, IS_NOT, LESS_OR_EQUAL, LESS_THAN, STARTS_WITH).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#operator Workflow#operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

List of predicate values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.60.2/docs/resources/workflow#values Workflow#values}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkflowDestinationList <a name="WorkflowDestinationList" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowDestinationList;

new WorkflowDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get"></a>

```java
public WorkflowDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>>

---


### WorkflowDestinationOutputReference <a name="WorkflowDestinationOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowDestinationOutputReference;

new WorkflowDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetNotificationTriggers">resetNotificationTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetUpdateOriginalMessage">resetUpdateOriginalMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotificationTriggers` <a name="resetNotificationTriggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetNotificationTriggers"></a>

```java
public void resetNotificationTriggers()
```

##### `resetUpdateOriginalMessage` <a name="resetUpdateOriginalMessage" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetUpdateOriginalMessage"></a>

```java
public void resetUpdateOriginalMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggersInput">notificationTriggersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessageInput">updateOriginalMessageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggers">notificationTriggers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessage">updateOriginalMessage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `notificationTriggersInput`<sup>Optional</sup> <a name="notificationTriggersInput" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggersInput"></a>

```java
public java.util.List<java.lang.String> getNotificationTriggersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updateOriginalMessageInput`<sup>Optional</sup> <a name="updateOriginalMessageInput" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessageInput"></a>

```java
public java.lang.Object getUpdateOriginalMessageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `notificationTriggers`<sup>Required</sup> <a name="notificationTriggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggers"></a>

```java
public java.util.List<java.lang.String> getNotificationTriggers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updateOriginalMessage`<sup>Required</sup> <a name="updateOriginalMessage" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessage"></a>

```java
public java.lang.Object getUpdateOriginalMessage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>

---


### WorkflowEnrichmentsNrqlConfigurationList <a name="WorkflowEnrichmentsNrqlConfigurationList" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList;

new WorkflowEnrichmentsNrqlConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get"></a>

```java
public WorkflowEnrichmentsNrqlConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>>

---


### WorkflowEnrichmentsNrqlConfigurationOutputReference <a name="WorkflowEnrichmentsNrqlConfigurationOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference;

new WorkflowEnrichmentsNrqlConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>

---


### WorkflowEnrichmentsNrqlList <a name="WorkflowEnrichmentsNrqlList" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowEnrichmentsNrqlList;

new WorkflowEnrichmentsNrqlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get"></a>

```java
public WorkflowEnrichmentsNrqlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>>

---


### WorkflowEnrichmentsNrqlOutputReference <a name="WorkflowEnrichmentsNrqlOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference;

new WorkflowEnrichmentsNrqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration">putConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfiguration` <a name="putConfiguration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration"></a>

```java
public void putConfiguration(IResolvable OR java.util.List<WorkflowEnrichmentsNrqlConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList">WorkflowEnrichmentsNrqlConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.enrichmentId">enrichmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configurationInput">configurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configuration"></a>

```java
public WorkflowEnrichmentsNrqlConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList">WorkflowEnrichmentsNrqlConfigurationList</a>

---

##### `enrichmentId`<sup>Required</sup> <a name="enrichmentId" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.enrichmentId"></a>

```java
public java.lang.String getEnrichmentId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configurationInput"></a>

```java
public java.lang.Object getConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>

---


### WorkflowEnrichmentsOutputReference <a name="WorkflowEnrichmentsOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowEnrichmentsOutputReference;

new WorkflowEnrichmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql">putNrql</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNrql` <a name="putNrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql"></a>

```java
public void putNrql(IResolvable OR java.util.List<WorkflowEnrichmentsNrql> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrql">nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList">WorkflowEnrichmentsNrqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrqlInput">nrqlInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrql"></a>

```java
public WorkflowEnrichmentsNrqlList getNrql();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList">WorkflowEnrichmentsNrqlList</a>

---

##### `nrqlInput`<sup>Optional</sup> <a name="nrqlInput" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrqlInput"></a>

```java
public java.lang.Object getNrqlInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.internalValue"></a>

```java
public WorkflowEnrichments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

---


### WorkflowIssuesFilterOutputReference <a name="WorkflowIssuesFilterOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowIssuesFilterOutputReference;

new WorkflowIssuesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resetPredicate">resetPredicate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate"></a>

```java
public void putPredicate(IResolvable OR java.util.List<WorkflowIssuesFilterPredicate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>>

---

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resetPredicate"></a>

```java
public void resetPredicate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.filterId">filterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList">WorkflowIssuesFilterPredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicateInput">predicateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterId`<sup>Required</sup> <a name="filterId" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.filterId"></a>

```java
public java.lang.String getFilterId();
```

- *Type:* java.lang.String

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicate"></a>

```java
public WorkflowIssuesFilterPredicateList getPredicate();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList">WorkflowIssuesFilterPredicateList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicateInput"></a>

```java
public java.lang.Object getPredicateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.internalValue"></a>

```java
public WorkflowIssuesFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

---


### WorkflowIssuesFilterPredicateList <a name="WorkflowIssuesFilterPredicateList" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowIssuesFilterPredicateList;

new WorkflowIssuesFilterPredicateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get"></a>

```java
public WorkflowIssuesFilterPredicateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>>

---


### WorkflowIssuesFilterPredicateOutputReference <a name="WorkflowIssuesFilterPredicateOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference;

new WorkflowIssuesFilterPredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>

---



