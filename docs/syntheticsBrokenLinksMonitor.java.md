# `syntheticsBrokenLinksMonitor` Submodule <a name="`syntheticsBrokenLinksMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsBrokenLinksMonitor <a name="SyntheticsBrokenLinksMonitor" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor newrelic_synthetics_broken_links_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitor;

SyntheticsBrokenLinksMonitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .period(java.lang.String)
    .status(java.lang.String)
    .uri(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .locationsPrivate(java.util.List<java.lang.String>)
//  .locationsPublic(java.util.List<java.lang.String>)
//  .runtimeType(java.lang.String)
//  .runtimeTypeVersion(java.lang.String)
//  .tag(IResolvable|java.util.List<SyntheticsBrokenLinksMonitorTag>)
//  .useUnsupportedLegacyRuntime(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.uri">uri</a></code> | <code>java.lang.String</code> | The URI the monitor runs against. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | List private location GUIDs for which the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | Publicly available location names in which the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#name SyntheticsBrokenLinksMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.period"></a>

- *Type:* java.lang.String

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#period SyntheticsBrokenLinksMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#status SyntheticsBrokenLinksMonitor#status}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.uri"></a>

- *Type:* java.lang.String

The URI the monitor runs against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#uri SyntheticsBrokenLinksMonitor#uri}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#account_id SyntheticsBrokenLinksMonitor#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationsPrivate`<sup>Optional</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.locationsPrivate"></a>

- *Type:* java.util.List<java.lang.String>

List private location GUIDs for which the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#locations_private SyntheticsBrokenLinksMonitor#locations_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.locationsPublic"></a>

- *Type:* java.util.List<java.lang.String>

Publicly available location names in which the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#locations_public SyntheticsBrokenLinksMonitor#locations_public}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.runtimeType"></a>

- *Type:* java.lang.String

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#runtime_type SyntheticsBrokenLinksMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.runtimeTypeVersion"></a>

- *Type:* java.lang.String

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#runtime_type_version SyntheticsBrokenLinksMonitor#runtime_type_version}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.tag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#tag SyntheticsBrokenLinksMonitor#tag}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.Initializer.parameter.useUnsupportedLegacyRuntime"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#use_unsupported_legacy_runtime SyntheticsBrokenLinksMonitor#use_unsupported_legacy_runtime}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPrivate">resetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPublic">resetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeType">resetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeTypeVersion">resetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetUseUnsupportedLegacyRuntime">resetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTag` <a name="putTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag"></a>

```java
public void putTag(IResolvable|java.util.List<SyntheticsBrokenLinksMonitorTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.putTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetId"></a>

```java
public void resetId()
```

##### `resetLocationsPrivate` <a name="resetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPrivate"></a>

```java
public void resetLocationsPrivate()
```

##### `resetLocationsPublic` <a name="resetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetLocationsPublic"></a>

```java
public void resetLocationsPublic()
```

##### `resetRuntimeType` <a name="resetRuntimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeType"></a>

```java
public void resetRuntimeType()
```

##### `resetRuntimeTypeVersion` <a name="resetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetRuntimeTypeVersion"></a>

```java
public void resetRuntimeTypeVersion()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetTag"></a>

```java
public void resetTag()
```

##### `resetUseUnsupportedLegacyRuntime` <a name="resetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.resetUseUnsupportedLegacyRuntime"></a>

```java
public void resetUseUnsupportedLegacyRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsBrokenLinksMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitor;

SyntheticsBrokenLinksMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitor;

SyntheticsBrokenLinksMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitor;

SyntheticsBrokenLinksMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitor;

SyntheticsBrokenLinksMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SyntheticsBrokenLinksMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SyntheticsBrokenLinksMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SyntheticsBrokenLinksMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SyntheticsBrokenLinksMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsBrokenLinksMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInMinutes">periodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList">SyntheticsBrokenLinksMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivateInput">locationsPrivateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublicInput">locationsPublicInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeInput">runtimeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersionInput">runtimeTypeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tagInput">tagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntimeInput">useUnsupportedLegacyRuntimeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `periodInMinutes`<sup>Required</sup> <a name="periodInMinutes" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInMinutes"></a>

```java
public java.lang.Number getPeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tag"></a>

```java
public SyntheticsBrokenLinksMonitorTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList">SyntheticsBrokenLinksMonitorTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationsPrivateInput`<sup>Optional</sup> <a name="locationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivateInput"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationsPublicInput`<sup>Optional</sup> <a name="locationsPublicInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublicInput"></a>

```java
public java.util.List<java.lang.String> getLocationsPublicInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `runtimeTypeInput`<sup>Optional</sup> <a name="runtimeTypeInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeInput"></a>

```java
public java.lang.String getRuntimeTypeInput();
```

- *Type:* java.lang.String

---

##### `runtimeTypeVersionInput`<sup>Optional</sup> <a name="runtimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersionInput"></a>

```java
public java.lang.String getRuntimeTypeVersionInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tagInput"></a>

```java
public IResolvable|java.util.List<SyntheticsBrokenLinksMonitorTag> getTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `useUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```java
public java.lang.Boolean|IResolvable getUseUnsupportedLegacyRuntimeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationsPrivate`<sup>Required</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPrivate"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationsPublic`<sup>Required</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.locationsPublic"></a>

```java
public java.util.List<java.lang.String> getLocationsPublic();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `runtimeType`<sup>Required</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeType"></a>

```java
public java.lang.String getRuntimeType();
```

- *Type:* java.lang.String

---

##### `runtimeTypeVersion`<sup>Required</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.runtimeTypeVersion"></a>

```java
public java.lang.String getRuntimeTypeVersion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `useUnsupportedLegacyRuntime`<sup>Required</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.useUnsupportedLegacyRuntime"></a>

```java
public java.lang.Boolean|IResolvable getUseUnsupportedLegacyRuntime();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsBrokenLinksMonitorConfig <a name="SyntheticsBrokenLinksMonitorConfig" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitorConfig;

SyntheticsBrokenLinksMonitorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .period(java.lang.String)
    .status(java.lang.String)
    .uri(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .locationsPrivate(java.util.List<java.lang.String>)
//  .locationsPublic(java.util.List<java.lang.String>)
//  .runtimeType(java.lang.String)
//  .runtimeTypeVersion(java.lang.String)
//  .tag(IResolvable|java.util.List<SyntheticsBrokenLinksMonitorTag>)
//  .useUnsupportedLegacyRuntime(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.name">name</a></code> | <code>java.lang.String</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.period">period</a></code> | <code>java.lang.String</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.status">status</a></code> | <code>java.lang.String</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI the monitor runs against. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | List private location GUIDs for which the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | Publicly available location names in which the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#name SyntheticsBrokenLinksMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#period SyntheticsBrokenLinksMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#status SyntheticsBrokenLinksMonitor#status}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI the monitor runs against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#uri SyntheticsBrokenLinksMonitor#uri}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#account_id SyntheticsBrokenLinksMonitor#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#id SyntheticsBrokenLinksMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationsPrivate`<sup>Optional</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPrivate"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivate();
```

- *Type:* java.util.List<java.lang.String>

List private location GUIDs for which the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#locations_private SyntheticsBrokenLinksMonitor#locations_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.locationsPublic"></a>

```java
public java.util.List<java.lang.String> getLocationsPublic();
```

- *Type:* java.util.List<java.lang.String>

Publicly available location names in which the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#locations_public SyntheticsBrokenLinksMonitor#locations_public}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeType"></a>

```java
public java.lang.String getRuntimeType();
```

- *Type:* java.lang.String

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#runtime_type SyntheticsBrokenLinksMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.runtimeTypeVersion"></a>

```java
public java.lang.String getRuntimeTypeVersion();
```

- *Type:* java.lang.String

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#runtime_type_version SyntheticsBrokenLinksMonitor#runtime_type_version}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.tag"></a>

```java
public IResolvable|java.util.List<SyntheticsBrokenLinksMonitorTag> getTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#tag SyntheticsBrokenLinksMonitor#tag}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```java
public java.lang.Boolean|IResolvable getUseUnsupportedLegacyRuntime();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#use_unsupported_legacy_runtime SyntheticsBrokenLinksMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsBrokenLinksMonitorTag <a name="SyntheticsBrokenLinksMonitorTag" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitorTag;

SyntheticsBrokenLinksMonitorTag.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.key">key</a></code> | <code>java.lang.String</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#key SyntheticsBrokenLinksMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/synthetics_broken_links_monitor#values SyntheticsBrokenLinksMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsBrokenLinksMonitorTagList <a name="SyntheticsBrokenLinksMonitorTagList" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitorTagList;

new SyntheticsBrokenLinksMonitorTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get"></a>

```java
public SyntheticsBrokenLinksMonitorTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsBrokenLinksMonitorTag> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>>

---


### SyntheticsBrokenLinksMonitorTagOutputReference <a name="SyntheticsBrokenLinksMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_broken_links_monitor.SyntheticsBrokenLinksMonitorTagOutputReference;

new SyntheticsBrokenLinksMonitorTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTagOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsBrokenLinksMonitorTag getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.syntheticsBrokenLinksMonitor.SyntheticsBrokenLinksMonitorTag">SyntheticsBrokenLinksMonitorTag</a>

---



