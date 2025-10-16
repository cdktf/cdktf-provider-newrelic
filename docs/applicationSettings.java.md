# `applicationSettings` Submodule <a name="`applicationSettings` Submodule" id="@cdktf/provider-newrelic.applicationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationSettings <a name="ApplicationSettings" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings newrelic_application_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettings;

ApplicationSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .appApdexThreshold(java.lang.Number)
//  .enableRealUserMonitoring(java.lang.Boolean|IResolvable)
//  .enableSlowSql(java.lang.Boolean|IResolvable)
//  .enableThreadProfiler(java.lang.Boolean|IResolvable)
//  .endUserApdexThreshold(java.lang.Number)
//  .errorCollector(IResolvable|java.util.List<ApplicationSettingsErrorCollector>)
//  .guid(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .tracerType(java.lang.String)
//  .transactionTracer(IResolvable|java.util.List<ApplicationSettingsTransactionTracer>)
//  .useServerSideConfig(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.appApdexThreshold">appApdexThreshold</a></code> | <code>java.lang.Number</code> | The response time threshold value for Apdex score calculation. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableRealUserMonitoring">enableRealUserMonitoring</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableSlowSql">enableSlowSql</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Samples and reports the slowest database queries in your traces. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableThreadProfiler">enableThreadProfiler</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable the thread profiler. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.endUserApdexThreshold">endUserApdexThreshold</a></code> | <code>java.lang.Number</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.errorCollector">errorCollector</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>></code> | error_collector block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.guid">guid</a></code> | <code>java.lang.String</code> | The GUID of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.tracerType">tracerType</a></code> | <code>java.lang.String</code> | The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.transactionTracer">transactionTracer</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>></code> | transaction_tracer block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.useServerSideConfig">useServerSideConfig</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable server side monitoring. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appApdexThreshold`<sup>Optional</sup> <a name="appApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.appApdexThreshold"></a>

- *Type:* java.lang.Number

The response time threshold value for Apdex score calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}

---

##### `enableRealUserMonitoring`<sup>Optional</sup> <a name="enableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableRealUserMonitoring"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}

---

##### `enableSlowSql`<sup>Optional</sup> <a name="enableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableSlowSql"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Samples and reports the slowest database queries in your traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#enable_slow_sql ApplicationSettings#enable_slow_sql}

---

##### `enableThreadProfiler`<sup>Optional</sup> <a name="enableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableThreadProfiler"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable the thread profiler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#enable_thread_profiler ApplicationSettings#enable_thread_profiler}

---

##### `endUserApdexThreshold`<sup>Optional</sup> <a name="endUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.endUserApdexThreshold"></a>

- *Type:* java.lang.Number

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}

---

##### `errorCollector`<sup>Optional</sup> <a name="errorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.errorCollector"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>>

error_collector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#error_collector ApplicationSettings#error_collector}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.guid"></a>

- *Type:* java.lang.String

The GUID of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#guid ApplicationSettings#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#name ApplicationSettings#name}

---

##### `tracerType`<sup>Optional</sup> <a name="tracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.tracerType"></a>

- *Type:* java.lang.String

The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#tracer_type ApplicationSettings#tracer_type}

---

##### `transactionTracer`<sup>Optional</sup> <a name="transactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.transactionTracer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>>

transaction_tracer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#transaction_tracer ApplicationSettings#transaction_tracer}

---

##### `useServerSideConfig`<sup>Optional</sup> <a name="useServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.useServerSideConfig"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable server side monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#use_server_side_config ApplicationSettings#use_server_side_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector">putErrorCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer">putTransactionTracer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetAppApdexThreshold">resetAppApdexThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableRealUserMonitoring">resetEnableRealUserMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableSlowSql">resetEnableSlowSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableThreadProfiler">resetEnableThreadProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEndUserApdexThreshold">resetEndUserApdexThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetErrorCollector">resetErrorCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetGuid">resetGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTracerType">resetTracerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTransactionTracer">resetTransactionTracer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetUseServerSideConfig">resetUseServerSideConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorCollector` <a name="putErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector"></a>

```java
public void putErrorCollector(IResolvable|java.util.List<ApplicationSettingsErrorCollector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>>

---

##### `putTransactionTracer` <a name="putTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer"></a>

```java
public void putTransactionTracer(IResolvable|java.util.List<ApplicationSettingsTransactionTracer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>>

---

##### `resetAppApdexThreshold` <a name="resetAppApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetAppApdexThreshold"></a>

```java
public void resetAppApdexThreshold()
```

##### `resetEnableRealUserMonitoring` <a name="resetEnableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableRealUserMonitoring"></a>

```java
public void resetEnableRealUserMonitoring()
```

##### `resetEnableSlowSql` <a name="resetEnableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableSlowSql"></a>

```java
public void resetEnableSlowSql()
```

##### `resetEnableThreadProfiler` <a name="resetEnableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableThreadProfiler"></a>

```java
public void resetEnableThreadProfiler()
```

##### `resetEndUserApdexThreshold` <a name="resetEndUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEndUserApdexThreshold"></a>

```java
public void resetEndUserApdexThreshold()
```

##### `resetErrorCollector` <a name="resetErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetErrorCollector"></a>

```java
public void resetErrorCollector()
```

##### `resetGuid` <a name="resetGuid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetGuid"></a>

```java
public void resetGuid()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetName"></a>

```java
public void resetName()
```

##### `resetTracerType` <a name="resetTracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTracerType"></a>

```java
public void resetTracerType()
```

##### `resetTransactionTracer` <a name="resetTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTransactionTracer"></a>

```java
public void resetTransactionTracer()
```

##### `resetUseServerSideConfig` <a name="resetUseServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetUseServerSideConfig"></a>

```java
public void resetUseServerSideConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettings;

ApplicationSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettings;

ApplicationSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettings;

ApplicationSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettings;

ApplicationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollector">errorCollector</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList">ApplicationSettingsErrorCollectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.isImported">isImported</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracer">transactionTracer</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList">ApplicationSettingsTransactionTracerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThresholdInput">appApdexThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoringInput">enableRealUserMonitoringInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSqlInput">enableSlowSqlInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfilerInput">enableThreadProfilerInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThresholdInput">endUserApdexThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollectorInput">errorCollectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guidInput">guidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerTypeInput">tracerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracerInput">transactionTracerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfigInput">useServerSideConfigInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThreshold">appApdexThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoring">enableRealUserMonitoring</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSql">enableSlowSql</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfiler">enableThreadProfiler</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThreshold">endUserApdexThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerType">tracerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfig">useServerSideConfig</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `errorCollector`<sup>Required</sup> <a name="errorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollector"></a>

```java
public ApplicationSettingsErrorCollectorList getErrorCollector();
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList">ApplicationSettingsErrorCollectorList</a>

---

##### `isImported`<sup>Required</sup> <a name="isImported" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.isImported"></a>

```java
public IResolvable getIsImported();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `transactionTracer`<sup>Required</sup> <a name="transactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracer"></a>

```java
public ApplicationSettingsTransactionTracerList getTransactionTracer();
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList">ApplicationSettingsTransactionTracerList</a>

---

##### `appApdexThresholdInput`<sup>Optional</sup> <a name="appApdexThresholdInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThresholdInput"></a>

```java
public java.lang.Number getAppApdexThresholdInput();
```

- *Type:* java.lang.Number

---

##### `enableRealUserMonitoringInput`<sup>Optional</sup> <a name="enableRealUserMonitoringInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoringInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRealUserMonitoringInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableSlowSqlInput`<sup>Optional</sup> <a name="enableSlowSqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSqlInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSlowSqlInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableThreadProfilerInput`<sup>Optional</sup> <a name="enableThreadProfilerInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfilerInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableThreadProfilerInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `endUserApdexThresholdInput`<sup>Optional</sup> <a name="endUserApdexThresholdInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThresholdInput"></a>

```java
public java.lang.Number getEndUserApdexThresholdInput();
```

- *Type:* java.lang.Number

---

##### `errorCollectorInput`<sup>Optional</sup> <a name="errorCollectorInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollectorInput"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsErrorCollector> getErrorCollectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>>

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guidInput"></a>

```java
public java.lang.String getGuidInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tracerTypeInput`<sup>Optional</sup> <a name="tracerTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerTypeInput"></a>

```java
public java.lang.String getTracerTypeInput();
```

- *Type:* java.lang.String

---

##### `transactionTracerInput`<sup>Optional</sup> <a name="transactionTracerInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracerInput"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsTransactionTracer> getTransactionTracerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>>

---

##### `useServerSideConfigInput`<sup>Optional</sup> <a name="useServerSideConfigInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfigInput"></a>

```java
public java.lang.Boolean|IResolvable getUseServerSideConfigInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `appApdexThreshold`<sup>Required</sup> <a name="appApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThreshold"></a>

```java
public java.lang.Number getAppApdexThreshold();
```

- *Type:* java.lang.Number

---

##### `enableRealUserMonitoring`<sup>Required</sup> <a name="enableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnableRealUserMonitoring();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableSlowSql`<sup>Required</sup> <a name="enableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSql"></a>

```java
public java.lang.Boolean|IResolvable getEnableSlowSql();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableThreadProfiler`<sup>Required</sup> <a name="enableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfiler"></a>

```java
public java.lang.Boolean|IResolvable getEnableThreadProfiler();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `endUserApdexThreshold`<sup>Required</sup> <a name="endUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThreshold"></a>

```java
public java.lang.Number getEndUserApdexThreshold();
```

- *Type:* java.lang.Number

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tracerType`<sup>Required</sup> <a name="tracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerType"></a>

```java
public java.lang.String getTracerType();
```

- *Type:* java.lang.String

---

##### `useServerSideConfig`<sup>Required</sup> <a name="useServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfig"></a>

```java
public java.lang.Boolean|IResolvable getUseServerSideConfig();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationSettingsConfig <a name="ApplicationSettingsConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsConfig;

ApplicationSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .appApdexThreshold(java.lang.Number)
//  .enableRealUserMonitoring(java.lang.Boolean|IResolvable)
//  .enableSlowSql(java.lang.Boolean|IResolvable)
//  .enableThreadProfiler(java.lang.Boolean|IResolvable)
//  .endUserApdexThreshold(java.lang.Number)
//  .errorCollector(IResolvable|java.util.List<ApplicationSettingsErrorCollector>)
//  .guid(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .tracerType(java.lang.String)
//  .transactionTracer(IResolvable|java.util.List<ApplicationSettingsTransactionTracer>)
//  .useServerSideConfig(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.appApdexThreshold">appApdexThreshold</a></code> | <code>java.lang.Number</code> | The response time threshold value for Apdex score calculation. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableRealUserMonitoring">enableRealUserMonitoring</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableSlowSql">enableSlowSql</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Samples and reports the slowest database queries in your traces. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableThreadProfiler">enableThreadProfiler</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable the thread profiler. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.endUserApdexThreshold">endUserApdexThreshold</a></code> | <code>java.lang.Number</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.errorCollector">errorCollector</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>></code> | error_collector block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.guid">guid</a></code> | <code>java.lang.String</code> | The GUID of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.tracerType">tracerType</a></code> | <code>java.lang.String</code> | The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.transactionTracer">transactionTracer</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>></code> | transaction_tracer block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.useServerSideConfig">useServerSideConfig</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable or disable server side monitoring. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appApdexThreshold`<sup>Optional</sup> <a name="appApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.appApdexThreshold"></a>

```java
public java.lang.Number getAppApdexThreshold();
```

- *Type:* java.lang.Number

The response time threshold value for Apdex score calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}

---

##### `enableRealUserMonitoring`<sup>Optional</sup> <a name="enableRealUserMonitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableRealUserMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnableRealUserMonitoring();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}

---

##### `enableSlowSql`<sup>Optional</sup> <a name="enableSlowSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableSlowSql"></a>

```java
public java.lang.Boolean|IResolvable getEnableSlowSql();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Samples and reports the slowest database queries in your traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#enable_slow_sql ApplicationSettings#enable_slow_sql}

---

##### `enableThreadProfiler`<sup>Optional</sup> <a name="enableThreadProfiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableThreadProfiler"></a>

```java
public java.lang.Boolean|IResolvable getEnableThreadProfiler();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable the thread profiler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#enable_thread_profiler ApplicationSettings#enable_thread_profiler}

---

##### `endUserApdexThreshold`<sup>Optional</sup> <a name="endUserApdexThreshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.endUserApdexThreshold"></a>

```java
public java.lang.Number getEndUserApdexThreshold();
```

- *Type:* java.lang.Number

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}

---

##### `errorCollector`<sup>Optional</sup> <a name="errorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.errorCollector"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsErrorCollector> getErrorCollector();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>>

error_collector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#error_collector ApplicationSettings#error_collector}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

The GUID of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#guid ApplicationSettings#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#name ApplicationSettings#name}

---

##### `tracerType`<sup>Optional</sup> <a name="tracerType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.tracerType"></a>

```java
public java.lang.String getTracerType();
```

- *Type:* java.lang.String

The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#tracer_type ApplicationSettings#tracer_type}

---

##### `transactionTracer`<sup>Optional</sup> <a name="transactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.transactionTracer"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsTransactionTracer> getTransactionTracer();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>>

transaction_tracer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#transaction_tracer ApplicationSettings#transaction_tracer}

---

##### `useServerSideConfig`<sup>Optional</sup> <a name="useServerSideConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.useServerSideConfig"></a>

```java
public java.lang.Boolean|IResolvable getUseServerSideConfig();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable or disable server side monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#use_server_side_config ApplicationSettings#use_server_side_config}

---

### ApplicationSettingsErrorCollector <a name="ApplicationSettingsErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsErrorCollector;

ApplicationSettingsErrorCollector.builder()
//  .expectedErrorClasses(java.util.List<java.lang.String>)
//  .expectedErrorCodes(java.util.List<java.lang.String>)
//  .ignoredErrorClasses(java.util.List<java.lang.String>)
//  .ignoredErrorCodes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorClasses">expectedErrorClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of error classes that are expected and should not trigger alerts. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorCodes">expectedErrorCodes</a></code> | <code>java.util.List<java.lang.String></code> | A list of error codes that are expected and should not trigger alerts. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorClasses">ignoredErrorClasses</a></code> | <code>java.util.List<java.lang.String></code> | A list of error classes that should be ignored. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorCodes">ignoredErrorCodes</a></code> | <code>java.util.List<java.lang.String></code> | A list of error codes that should be ignored. |

---

##### `expectedErrorClasses`<sup>Optional</sup> <a name="expectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorClasses"></a>

```java
public java.util.List<java.lang.String> getExpectedErrorClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of error classes that are expected and should not trigger alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#expected_error_classes ApplicationSettings#expected_error_classes}

---

##### `expectedErrorCodes`<sup>Optional</sup> <a name="expectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorCodes"></a>

```java
public java.util.List<java.lang.String> getExpectedErrorCodes();
```

- *Type:* java.util.List<java.lang.String>

A list of error codes that are expected and should not trigger alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#expected_error_codes ApplicationSettings#expected_error_codes}

---

##### `ignoredErrorClasses`<sup>Optional</sup> <a name="ignoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorClasses"></a>

```java
public java.util.List<java.lang.String> getIgnoredErrorClasses();
```

- *Type:* java.util.List<java.lang.String>

A list of error classes that should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#ignored_error_classes ApplicationSettings#ignored_error_classes}

---

##### `ignoredErrorCodes`<sup>Optional</sup> <a name="ignoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorCodes"></a>

```java
public java.util.List<java.lang.String> getIgnoredErrorCodes();
```

- *Type:* java.util.List<java.lang.String>

A list of error codes that should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#ignored_error_codes ApplicationSettings#ignored_error_codes}

---

### ApplicationSettingsTransactionTracer <a name="ApplicationSettingsTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsTransactionTracer;

ApplicationSettingsTransactionTracer.builder()
//  .explainQueryPlans(IResolvable|java.util.List<ApplicationSettingsTransactionTracerExplainQueryPlans>)
//  .sql(ApplicationSettingsTransactionTracerSql)
//  .stackTraceThresholdValue(java.lang.Number)
//  .transactionThresholdType(java.lang.String)
//  .transactionThresholdValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.explainQueryPlans">explainQueryPlans</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>></code> | explain_query_plans block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.stackTraceThresholdValue">stackTraceThresholdValue</a></code> | <code>java.lang.Number</code> | The response time threshold value for capturing stack traces of SQL queries. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdType">transactionThresholdType</a></code> | <code>java.lang.String</code> | The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdValue">transactionThresholdValue</a></code> | <code>java.lang.Number</code> | The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'. |

---

##### `explainQueryPlans`<sup>Optional</sup> <a name="explainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.explainQueryPlans"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsTransactionTracerExplainQueryPlans> getExplainQueryPlans();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>>

explain_query_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#explain_query_plans ApplicationSettings#explain_query_plans}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.sql"></a>

```java
public ApplicationSettingsTransactionTracerSql getSql();
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#sql ApplicationSettings#sql}

---

##### `stackTraceThresholdValue`<sup>Optional</sup> <a name="stackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.stackTraceThresholdValue"></a>

```java
public java.lang.Number getStackTraceThresholdValue();
```

- *Type:* java.lang.Number

The response time threshold value for capturing stack traces of SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#stack_trace_threshold_value ApplicationSettings#stack_trace_threshold_value}

---

##### `transactionThresholdType`<sup>Optional</sup> <a name="transactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdType"></a>

```java
public java.lang.String getTransactionThresholdType();
```

- *Type:* java.lang.String

The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#transaction_threshold_type ApplicationSettings#transaction_threshold_type}

---

##### `transactionThresholdValue`<sup>Optional</sup> <a name="transactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdValue"></a>

```java
public java.lang.Number getTransactionThresholdValue();
```

- *Type:* java.lang.Number

The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#transaction_threshold_value ApplicationSettings#transaction_threshold_value}

---

### ApplicationSettingsTransactionTracerExplainQueryPlans <a name="ApplicationSettingsTransactionTracerExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsTransactionTracerExplainQueryPlans;

ApplicationSettingsTransactionTracerExplainQueryPlans.builder()
//  .queryPlanThresholdType(java.lang.String)
//  .queryPlanThresholdValue(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdType">queryPlanThresholdType</a></code> | <code>java.lang.String</code> | The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdValue">queryPlanThresholdValue</a></code> | <code>java.lang.Number</code> | The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'. |

---

##### `queryPlanThresholdType`<sup>Optional</sup> <a name="queryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdType"></a>

```java
public java.lang.String getQueryPlanThresholdType();
```

- *Type:* java.lang.String

The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#query_plan_threshold_type ApplicationSettings#query_plan_threshold_type}

---

##### `queryPlanThresholdValue`<sup>Optional</sup> <a name="queryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdValue"></a>

```java
public java.lang.Number getQueryPlanThresholdValue();
```

- *Type:* java.lang.Number

The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#query_plan_threshold_value ApplicationSettings#query_plan_threshold_value}

---

### ApplicationSettingsTransactionTracerSql <a name="ApplicationSettingsTransactionTracerSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsTransactionTracerSql;

ApplicationSettingsTransactionTracerSql.builder()
    .recordSql(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.property.recordSql">recordSql</a></code> | <code>java.lang.String</code> | The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'. |

---

##### `recordSql`<sup>Required</sup> <a name="recordSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.property.recordSql"></a>

```java
public java.lang.String getRecordSql();
```

- *Type:* java.lang.String

The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.1/docs/resources/application_settings#record_sql ApplicationSettings#record_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationSettingsErrorCollectorList <a name="ApplicationSettingsErrorCollectorList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsErrorCollectorList;

new ApplicationSettingsErrorCollectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get"></a>

```java
public ApplicationSettingsErrorCollectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsErrorCollector> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>>

---


### ApplicationSettingsErrorCollectorOutputReference <a name="ApplicationSettingsErrorCollectorOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsErrorCollectorOutputReference;

new ApplicationSettingsErrorCollectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorClasses">resetExpectedErrorClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorCodes">resetExpectedErrorCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorClasses">resetIgnoredErrorClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorCodes">resetIgnoredErrorCodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpectedErrorClasses` <a name="resetExpectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorClasses"></a>

```java
public void resetExpectedErrorClasses()
```

##### `resetExpectedErrorCodes` <a name="resetExpectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorCodes"></a>

```java
public void resetExpectedErrorCodes()
```

##### `resetIgnoredErrorClasses` <a name="resetIgnoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorClasses"></a>

```java
public void resetIgnoredErrorClasses()
```

##### `resetIgnoredErrorCodes` <a name="resetIgnoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorCodes"></a>

```java
public void resetIgnoredErrorCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClassesInput">expectedErrorClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodesInput">expectedErrorCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClassesInput">ignoredErrorClassesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodesInput">ignoredErrorCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClasses">expectedErrorClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodes">expectedErrorCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClasses">ignoredErrorClasses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodes">ignoredErrorCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expectedErrorClassesInput`<sup>Optional</sup> <a name="expectedErrorClassesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClassesInput"></a>

```java
public java.util.List<java.lang.String> getExpectedErrorClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expectedErrorCodesInput`<sup>Optional</sup> <a name="expectedErrorCodesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodesInput"></a>

```java
public java.util.List<java.lang.String> getExpectedErrorCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoredErrorClassesInput`<sup>Optional</sup> <a name="ignoredErrorClassesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClassesInput"></a>

```java
public java.util.List<java.lang.String> getIgnoredErrorClassesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoredErrorCodesInput`<sup>Optional</sup> <a name="ignoredErrorCodesInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodesInput"></a>

```java
public java.util.List<java.lang.String> getIgnoredErrorCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expectedErrorClasses`<sup>Required</sup> <a name="expectedErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClasses"></a>

```java
public java.util.List<java.lang.String> getExpectedErrorClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expectedErrorCodes`<sup>Required</sup> <a name="expectedErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodes"></a>

```java
public java.util.List<java.lang.String> getExpectedErrorCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoredErrorClasses`<sup>Required</sup> <a name="ignoredErrorClasses" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClasses"></a>

```java
public java.util.List<java.lang.String> getIgnoredErrorClasses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ignoredErrorCodes`<sup>Required</sup> <a name="ignoredErrorCodes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodes"></a>

```java
public java.util.List<java.lang.String> getIgnoredErrorCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationSettingsErrorCollector getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>

---


### ApplicationSettingsTransactionTracerExplainQueryPlansList <a name="ApplicationSettingsTransactionTracerExplainQueryPlansList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsTransactionTracerExplainQueryPlansList;

new ApplicationSettingsTransactionTracerExplainQueryPlansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get"></a>

```java
public ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsTransactionTracerExplainQueryPlans> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>>

---


### ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference <a name="ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference;

new ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdType">resetQueryPlanThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdValue">resetQueryPlanThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryPlanThresholdType` <a name="resetQueryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdType"></a>

```java
public void resetQueryPlanThresholdType()
```

##### `resetQueryPlanThresholdValue` <a name="resetQueryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdValue"></a>

```java
public void resetQueryPlanThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdTypeInput">queryPlanThresholdTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValueInput">queryPlanThresholdValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdType">queryPlanThresholdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValue">queryPlanThresholdValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryPlanThresholdTypeInput`<sup>Optional</sup> <a name="queryPlanThresholdTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdTypeInput"></a>

```java
public java.lang.String getQueryPlanThresholdTypeInput();
```

- *Type:* java.lang.String

---

##### `queryPlanThresholdValueInput`<sup>Optional</sup> <a name="queryPlanThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValueInput"></a>

```java
public java.lang.Number getQueryPlanThresholdValueInput();
```

- *Type:* java.lang.Number

---

##### `queryPlanThresholdType`<sup>Required</sup> <a name="queryPlanThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdType"></a>

```java
public java.lang.String getQueryPlanThresholdType();
```

- *Type:* java.lang.String

---

##### `queryPlanThresholdValue`<sup>Required</sup> <a name="queryPlanThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValue"></a>

```java
public java.lang.Number getQueryPlanThresholdValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationSettingsTransactionTracerExplainQueryPlans getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>

---


### ApplicationSettingsTransactionTracerList <a name="ApplicationSettingsTransactionTracerList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsTransactionTracerList;

new ApplicationSettingsTransactionTracerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get"></a>

```java
public ApplicationSettingsTransactionTracerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsTransactionTracer> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>>

---


### ApplicationSettingsTransactionTracerOutputReference <a name="ApplicationSettingsTransactionTracerOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsTransactionTracerOutputReference;

new ApplicationSettingsTransactionTracerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans">putExplainQueryPlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql">putSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetExplainQueryPlans">resetExplainQueryPlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetStackTraceThresholdValue">resetStackTraceThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdType">resetTransactionThresholdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdValue">resetTransactionThresholdValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExplainQueryPlans` <a name="putExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans"></a>

```java
public void putExplainQueryPlans(IResolvable|java.util.List<ApplicationSettingsTransactionTracerExplainQueryPlans> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>>

---

##### `putSql` <a name="putSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql"></a>

```java
public void putSql(ApplicationSettingsTransactionTracerSql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---

##### `resetExplainQueryPlans` <a name="resetExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetExplainQueryPlans"></a>

```java
public void resetExplainQueryPlans()
```

##### `resetSql` <a name="resetSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetSql"></a>

```java
public void resetSql()
```

##### `resetStackTraceThresholdValue` <a name="resetStackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetStackTraceThresholdValue"></a>

```java
public void resetStackTraceThresholdValue()
```

##### `resetTransactionThresholdType` <a name="resetTransactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdType"></a>

```java
public void resetTransactionThresholdType()
```

##### `resetTransactionThresholdValue` <a name="resetTransactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdValue"></a>

```java
public void resetTransactionThresholdValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlans">explainQueryPlans</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList">ApplicationSettingsTransactionTracerExplainQueryPlansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference">ApplicationSettingsTransactionTracerSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlansInput">explainQueryPlansInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sqlInput">sqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValueInput">stackTraceThresholdValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdTypeInput">transactionThresholdTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValueInput">transactionThresholdValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValue">stackTraceThresholdValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdType">transactionThresholdType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValue">transactionThresholdValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `explainQueryPlans`<sup>Required</sup> <a name="explainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlans"></a>

```java
public ApplicationSettingsTransactionTracerExplainQueryPlansList getExplainQueryPlans();
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList">ApplicationSettingsTransactionTracerExplainQueryPlansList</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sql"></a>

```java
public ApplicationSettingsTransactionTracerSqlOutputReference getSql();
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference">ApplicationSettingsTransactionTracerSqlOutputReference</a>

---

##### `explainQueryPlansInput`<sup>Optional</sup> <a name="explainQueryPlansInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlansInput"></a>

```java
public IResolvable|java.util.List<ApplicationSettingsTransactionTracerExplainQueryPlans> getExplainQueryPlansInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sqlInput"></a>

```java
public ApplicationSettingsTransactionTracerSql getSqlInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---

##### `stackTraceThresholdValueInput`<sup>Optional</sup> <a name="stackTraceThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValueInput"></a>

```java
public java.lang.Number getStackTraceThresholdValueInput();
```

- *Type:* java.lang.Number

---

##### `transactionThresholdTypeInput`<sup>Optional</sup> <a name="transactionThresholdTypeInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdTypeInput"></a>

```java
public java.lang.String getTransactionThresholdTypeInput();
```

- *Type:* java.lang.String

---

##### `transactionThresholdValueInput`<sup>Optional</sup> <a name="transactionThresholdValueInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValueInput"></a>

```java
public java.lang.Number getTransactionThresholdValueInput();
```

- *Type:* java.lang.Number

---

##### `stackTraceThresholdValue`<sup>Required</sup> <a name="stackTraceThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValue"></a>

```java
public java.lang.Number getStackTraceThresholdValue();
```

- *Type:* java.lang.Number

---

##### `transactionThresholdType`<sup>Required</sup> <a name="transactionThresholdType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdType"></a>

```java
public java.lang.String getTransactionThresholdType();
```

- *Type:* java.lang.String

---

##### `transactionThresholdValue`<sup>Required</sup> <a name="transactionThresholdValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValue"></a>

```java
public java.lang.Number getTransactionThresholdValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationSettingsTransactionTracer getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>

---


### ApplicationSettingsTransactionTracerSqlOutputReference <a name="ApplicationSettingsTransactionTracerSqlOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.application_settings.ApplicationSettingsTransactionTracerSqlOutputReference;

new ApplicationSettingsTransactionTracerSqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSqlInput">recordSqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSql">recordSql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recordSqlInput`<sup>Optional</sup> <a name="recordSqlInput" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSqlInput"></a>

```java
public java.lang.String getRecordSqlInput();
```

- *Type:* java.lang.String

---

##### `recordSql`<sup>Required</sup> <a name="recordSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSql"></a>

```java
public java.lang.String getRecordSql();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.internalValue"></a>

```java
public ApplicationSettingsTransactionTracerSql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---



