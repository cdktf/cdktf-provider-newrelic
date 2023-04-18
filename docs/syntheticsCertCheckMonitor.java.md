# `newrelic_synthetics_cert_check_monitor`

Refer to the Terraform Registory for docs: [`newrelic_synthetics_cert_check_monitor`](https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor).

# `syntheticsCertCheckMonitor` Submodule <a name="`syntheticsCertCheckMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCertCheckMonitor <a name="SyntheticsCertCheckMonitor" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor newrelic_synthetics_cert_check_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_cert_check_monitor.SyntheticsCertCheckMonitor;

SyntheticsCertCheckMonitor.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .certificateExpiration(java.lang.Number)
    .domain(java.lang.String)
    .name(java.lang.String)
    .period(java.lang.String)
    .status(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .locationsPrivate(java.util.List<java.lang.String>)
//  .locationsPublic(java.util.List<java.lang.String>)
//  .tag(IResolvable)
//  .tag(java.util.List<SyntheticsCertCheckMonitorTag>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.certificateExpiration">certificateExpiration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | name of the cert check monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>></code> | tag block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateExpiration`<sup>Required</sup> <a name="certificateExpiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.certificateExpiration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

name of the cert check monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#name SyntheticsCertCheckMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.period"></a>

- *Type:* java.lang.String

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#period SyntheticsCertCheckMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#status SyntheticsCertCheckMonitor#status}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#account_id SyntheticsCertCheckMonitor#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationsPrivate`<sup>Optional</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.locationsPrivate"></a>

- *Type:* java.util.List<java.lang.String>

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#locations_private SyntheticsCertCheckMonitor#locations_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.locationsPublic"></a>

- *Type:* java.util.List<java.lang.String>

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#locations_public SyntheticsCertCheckMonitor#locations_public}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.tag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#tag SyntheticsCertCheckMonitor#tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPrivate">resetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPublic">resetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetTag">resetTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTag` <a name="putTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag"></a>

```java
public void putTag(IResolvable OR java.util.List<SyntheticsCertCheckMonitorTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetId"></a>

```java
public void resetId()
```

##### `resetLocationsPrivate` <a name="resetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPrivate"></a>

```java
public void resetLocationsPrivate()
```

##### `resetLocationsPublic` <a name="resetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPublic"></a>

```java
public void resetLocationsPublic()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetTag"></a>

```java
public void resetTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_cert_check_monitor.SyntheticsCertCheckMonitor;

SyntheticsCertCheckMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_cert_check_monitor.SyntheticsCertCheckMonitor;

SyntheticsCertCheckMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_cert_check_monitor.SyntheticsCertCheckMonitor;

SyntheticsCertCheckMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList">SyntheticsCertCheckMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpirationInput">certificateExpirationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivateInput">locationsPrivateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublicInput">locationsPublicInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tagInput">tagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpiration">certificateExpiration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tag"></a>

```java
public SyntheticsCertCheckMonitorTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList">SyntheticsCertCheckMonitorTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `certificateExpirationInput`<sup>Optional</sup> <a name="certificateExpirationInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpirationInput"></a>

```java
public java.lang.Number getCertificateExpirationInput();
```

- *Type:* java.lang.Number

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationsPrivateInput`<sup>Optional</sup> <a name="locationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivateInput"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationsPublicInput`<sup>Optional</sup> <a name="locationsPublicInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublicInput"></a>

```java
public java.util.List<java.lang.String> getLocationsPublicInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tagInput"></a>

```java
public java.lang.Object getTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `certificateExpiration`<sup>Required</sup> <a name="certificateExpiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpiration"></a>

```java
public java.lang.Number getCertificateExpiration();
```

- *Type:* java.lang.Number

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationsPrivate`<sup>Required</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivate"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationsPublic`<sup>Required</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublic"></a>

```java
public java.util.List<java.lang.String> getLocationsPublic();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCertCheckMonitorConfig <a name="SyntheticsCertCheckMonitorConfig" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_cert_check_monitor.SyntheticsCertCheckMonitorConfig;

SyntheticsCertCheckMonitorConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .certificateExpiration(java.lang.Number)
    .domain(java.lang.String)
    .name(java.lang.String)
    .period(java.lang.String)
    .status(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .locationsPrivate(java.util.List<java.lang.String>)
//  .locationsPublic(java.util.List<java.lang.String>)
//  .tag(IResolvable)
//  .tag(java.util.List<SyntheticsCertCheckMonitorTag>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.certificateExpiration">certificateExpiration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.name">name</a></code> | <code>java.lang.String</code> | name of the cert check monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.period">period</a></code> | <code>java.lang.String</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.status">status</a></code> | <code>java.lang.String</code> | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>></code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateExpiration`<sup>Required</sup> <a name="certificateExpiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.certificateExpiration"></a>

```java
public java.lang.Number getCertificateExpiration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name of the cert check monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#name SyntheticsCertCheckMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#period SyntheticsCertCheckMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#status SyntheticsCertCheckMonitor#status}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#account_id SyntheticsCertCheckMonitor#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationsPrivate`<sup>Optional</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPrivate"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivate();
```

- *Type:* java.util.List<java.lang.String>

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#locations_private SyntheticsCertCheckMonitor#locations_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPublic"></a>

```java
public java.util.List<java.lang.String> getLocationsPublic();
```

- *Type:* java.util.List<java.lang.String>

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#locations_public SyntheticsCertCheckMonitor#locations_public}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.tag"></a>

```java
public java.lang.Object getTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>>

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#tag SyntheticsCertCheckMonitor#tag}

---

### SyntheticsCertCheckMonitorTag <a name="SyntheticsCertCheckMonitorTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_cert_check_monitor.SyntheticsCertCheckMonitorTag;

SyntheticsCertCheckMonitorTag.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.key">key</a></code> | <code>java.lang.String</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#key SyntheticsCertCheckMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Values associated with the tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#values SyntheticsCertCheckMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCertCheckMonitorTagList <a name="SyntheticsCertCheckMonitorTagList" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_cert_check_monitor.SyntheticsCertCheckMonitorTagList;

new SyntheticsCertCheckMonitorTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get"></a>

```java
public SyntheticsCertCheckMonitorTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>>

---


### SyntheticsCertCheckMonitorTagOutputReference <a name="SyntheticsCertCheckMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_cert_check_monitor.SyntheticsCertCheckMonitorTagOutputReference;

new SyntheticsCertCheckMonitorTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a> OR com.hashicorp.cdktf.IResolvable

---



