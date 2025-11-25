# `cloudOciLinkAccount` Submodule <a name="`cloudOciLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudOciLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudOciLinkAccount <a name="CloudOciLinkAccount" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account newrelic_cloud_oci_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_oci_link_account.CloudOciLinkAccount;

CloudOciLinkAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .compartmentOcid(java.lang.String)
    .name(java.lang.String)
    .ociClientId(java.lang.String)
    .ociClientSecret(java.lang.String)
    .ociDomainUrl(java.lang.String)
    .ociHomeRegion(java.lang.String)
    .tenantId(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .ingestVaultOcid(java.lang.String)
//  .instrumentationType(java.lang.String)
//  .loggingStackOcid(java.lang.String)
//  .metricStackOcid(java.lang.String)
//  .ociRegion(java.lang.String)
//  .userVaultOcid(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | The New Relic compartment OCID in OCI. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The linked account name. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociClientId">ociClientId</a></code> | <code>java.lang.String</code> | The client ID for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociClientSecret">ociClientSecret</a></code> | <code>java.lang.String</code> | The client secret for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociDomainUrl">ociDomainUrl</a></code> | <code>java.lang.String</code> | The OCI domain URL for WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociHomeRegion">ociHomeRegion</a></code> | <code>java.lang.String</code> | The home region of the tenancy. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The OCI tenant identifier. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to link the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ingestVaultOcid">ingestVaultOcid</a></code> | <code>java.lang.String</code> | The OCI ingest secret OCID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.instrumentationType">instrumentationType</a></code> | <code>java.lang.String</code> | Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.loggingStackOcid">loggingStackOcid</a></code> | <code>java.lang.String</code> | The Logging stack identifier for the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.metricStackOcid">metricStackOcid</a></code> | <code>java.lang.String</code> | The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociRegion">ociRegion</a></code> | <code>java.lang.String</code> | The OCI region for the account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.userVaultOcid">userVaultOcid</a></code> | <code>java.lang.String</code> | The user secret OCID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.compartmentOcid"></a>

- *Type:* java.lang.String

The New Relic compartment OCID in OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#compartment_ocid CloudOciLinkAccount#compartment_ocid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The linked account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#name CloudOciLinkAccount#name}

---

##### `ociClientId`<sup>Required</sup> <a name="ociClientId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociClientId"></a>

- *Type:* java.lang.String

The client ID for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_client_id CloudOciLinkAccount#oci_client_id}

---

##### `ociClientSecret`<sup>Required</sup> <a name="ociClientSecret" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociClientSecret"></a>

- *Type:* java.lang.String

The client secret for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_client_secret CloudOciLinkAccount#oci_client_secret}

---

##### `ociDomainUrl`<sup>Required</sup> <a name="ociDomainUrl" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociDomainUrl"></a>

- *Type:* java.lang.String

The OCI domain URL for WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_domain_url CloudOciLinkAccount#oci_domain_url}

---

##### `ociHomeRegion`<sup>Required</sup> <a name="ociHomeRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociHomeRegion"></a>

- *Type:* java.lang.String

The home region of the tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_home_region CloudOciLinkAccount#oci_home_region}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

The OCI tenant identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#tenant_id CloudOciLinkAccount#tenant_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The New Relic account ID where you want to link the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#account_id CloudOciLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestVaultOcid`<sup>Optional</sup> <a name="ingestVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ingestVaultOcid"></a>

- *Type:* java.lang.String

The OCI ingest secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#ingest_vault_ocid CloudOciLinkAccount#ingest_vault_ocid}

---

##### `instrumentationType`<sup>Optional</sup> <a name="instrumentationType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.instrumentationType"></a>

- *Type:* java.lang.String

Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#instrumentation_type CloudOciLinkAccount#instrumentation_type}

---

##### `loggingStackOcid`<sup>Optional</sup> <a name="loggingStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.loggingStackOcid"></a>

- *Type:* java.lang.String

The Logging stack identifier for the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#logging_stack_ocid CloudOciLinkAccount#logging_stack_ocid}

---

##### `metricStackOcid`<sup>Optional</sup> <a name="metricStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.metricStackOcid"></a>

- *Type:* java.lang.String

The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#metric_stack_ocid CloudOciLinkAccount#metric_stack_ocid}

---

##### `ociRegion`<sup>Optional</sup> <a name="ociRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociRegion"></a>

- *Type:* java.lang.String

The OCI region for the account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_region CloudOciLinkAccount#oci_region}

---

##### `userVaultOcid`<sup>Optional</sup> <a name="userVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.userVaultOcid"></a>

- *Type:* java.lang.String

The user secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#user_vault_ocid CloudOciLinkAccount#user_vault_ocid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetIngestVaultOcid">resetIngestVaultOcid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetInstrumentationType">resetInstrumentationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetLoggingStackOcid">resetLoggingStackOcid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetMetricStackOcid">resetMetricStackOcid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOciRegion">resetOciRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetUserVaultOcid">resetUserVaultOcid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetId"></a>

```java
public void resetId()
```

##### `resetIngestVaultOcid` <a name="resetIngestVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetIngestVaultOcid"></a>

```java
public void resetIngestVaultOcid()
```

##### `resetInstrumentationType` <a name="resetInstrumentationType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetInstrumentationType"></a>

```java
public void resetInstrumentationType()
```

##### `resetLoggingStackOcid` <a name="resetLoggingStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetLoggingStackOcid"></a>

```java
public void resetLoggingStackOcid()
```

##### `resetMetricStackOcid` <a name="resetMetricStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetMetricStackOcid"></a>

```java
public void resetMetricStackOcid()
```

##### `resetOciRegion` <a name="resetOciRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOciRegion"></a>

```java
public void resetOciRegion()
```

##### `resetUserVaultOcid` <a name="resetUserVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetUserVaultOcid"></a>

```java
public void resetUserVaultOcid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudOciLinkAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_oci_link_account.CloudOciLinkAccount;

CloudOciLinkAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_oci_link_account.CloudOciLinkAccount;

CloudOciLinkAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_oci_link_account.CloudOciLinkAccount;

CloudOciLinkAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_oci_link_account.CloudOciLinkAccount;

CloudOciLinkAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudOciLinkAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudOciLinkAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudOciLinkAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudOciLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudOciLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcidInput">compartmentOcidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcidInput">ingestVaultOcidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationTypeInput">instrumentationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcidInput">loggingStackOcidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcidInput">metricStackOcidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientIdInput">ociClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecretInput">ociClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrlInput">ociDomainUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegionInput">ociHomeRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegionInput">ociRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcidInput">userVaultOcidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcid">ingestVaultOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationType">instrumentationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcid">loggingStackOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcid">metricStackOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientId">ociClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecret">ociClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrl">ociDomainUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegion">ociHomeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegion">ociRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcid">userVaultOcid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `compartmentOcidInput`<sup>Optional</sup> <a name="compartmentOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcidInput"></a>

```java
public java.lang.String getCompartmentOcidInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingestVaultOcidInput`<sup>Optional</sup> <a name="ingestVaultOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcidInput"></a>

```java
public java.lang.String getIngestVaultOcidInput();
```

- *Type:* java.lang.String

---

##### `instrumentationTypeInput`<sup>Optional</sup> <a name="instrumentationTypeInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationTypeInput"></a>

```java
public java.lang.String getInstrumentationTypeInput();
```

- *Type:* java.lang.String

---

##### `loggingStackOcidInput`<sup>Optional</sup> <a name="loggingStackOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcidInput"></a>

```java
public java.lang.String getLoggingStackOcidInput();
```

- *Type:* java.lang.String

---

##### `metricStackOcidInput`<sup>Optional</sup> <a name="metricStackOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcidInput"></a>

```java
public java.lang.String getMetricStackOcidInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ociClientIdInput`<sup>Optional</sup> <a name="ociClientIdInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientIdInput"></a>

```java
public java.lang.String getOciClientIdInput();
```

- *Type:* java.lang.String

---

##### `ociClientSecretInput`<sup>Optional</sup> <a name="ociClientSecretInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecretInput"></a>

```java
public java.lang.String getOciClientSecretInput();
```

- *Type:* java.lang.String

---

##### `ociDomainUrlInput`<sup>Optional</sup> <a name="ociDomainUrlInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrlInput"></a>

```java
public java.lang.String getOciDomainUrlInput();
```

- *Type:* java.lang.String

---

##### `ociHomeRegionInput`<sup>Optional</sup> <a name="ociHomeRegionInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegionInput"></a>

```java
public java.lang.String getOciHomeRegionInput();
```

- *Type:* java.lang.String

---

##### `ociRegionInput`<sup>Optional</sup> <a name="ociRegionInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegionInput"></a>

```java
public java.lang.String getOciRegionInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `userVaultOcidInput`<sup>Optional</sup> <a name="userVaultOcidInput" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcidInput"></a>

```java
public java.lang.String getUserVaultOcidInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingestVaultOcid`<sup>Required</sup> <a name="ingestVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcid"></a>

```java
public java.lang.String getIngestVaultOcid();
```

- *Type:* java.lang.String

---

##### `instrumentationType`<sup>Required</sup> <a name="instrumentationType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationType"></a>

```java
public java.lang.String getInstrumentationType();
```

- *Type:* java.lang.String

---

##### `loggingStackOcid`<sup>Required</sup> <a name="loggingStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcid"></a>

```java
public java.lang.String getLoggingStackOcid();
```

- *Type:* java.lang.String

---

##### `metricStackOcid`<sup>Required</sup> <a name="metricStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcid"></a>

```java
public java.lang.String getMetricStackOcid();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ociClientId`<sup>Required</sup> <a name="ociClientId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientId"></a>

```java
public java.lang.String getOciClientId();
```

- *Type:* java.lang.String

---

##### `ociClientSecret`<sup>Required</sup> <a name="ociClientSecret" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecret"></a>

```java
public java.lang.String getOciClientSecret();
```

- *Type:* java.lang.String

---

##### `ociDomainUrl`<sup>Required</sup> <a name="ociDomainUrl" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrl"></a>

```java
public java.lang.String getOciDomainUrl();
```

- *Type:* java.lang.String

---

##### `ociHomeRegion`<sup>Required</sup> <a name="ociHomeRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegion"></a>

```java
public java.lang.String getOciHomeRegion();
```

- *Type:* java.lang.String

---

##### `ociRegion`<sup>Required</sup> <a name="ociRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegion"></a>

```java
public java.lang.String getOciRegion();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `userVaultOcid`<sup>Required</sup> <a name="userVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcid"></a>

```java
public java.lang.String getUserVaultOcid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudOciLinkAccountConfig <a name="CloudOciLinkAccountConfig" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_oci_link_account.CloudOciLinkAccountConfig;

CloudOciLinkAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .compartmentOcid(java.lang.String)
    .name(java.lang.String)
    .ociClientId(java.lang.String)
    .ociClientSecret(java.lang.String)
    .ociDomainUrl(java.lang.String)
    .ociHomeRegion(java.lang.String)
    .tenantId(java.lang.String)
//  .accountId(java.lang.Number)
//  .id(java.lang.String)
//  .ingestVaultOcid(java.lang.String)
//  .instrumentationType(java.lang.String)
//  .loggingStackOcid(java.lang.String)
//  .metricStackOcid(java.lang.String)
//  .ociRegion(java.lang.String)
//  .userVaultOcid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.compartmentOcid">compartmentOcid</a></code> | <code>java.lang.String</code> | The New Relic compartment OCID in OCI. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | The linked account name. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientId">ociClientId</a></code> | <code>java.lang.String</code> | The client ID for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientSecret">ociClientSecret</a></code> | <code>java.lang.String</code> | The client secret for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociDomainUrl">ociDomainUrl</a></code> | <code>java.lang.String</code> | The OCI domain URL for WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociHomeRegion">ociHomeRegion</a></code> | <code>java.lang.String</code> | The home region of the tenancy. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | The OCI tenant identifier. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The New Relic account ID where you want to link the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ingestVaultOcid">ingestVaultOcid</a></code> | <code>java.lang.String</code> | The OCI ingest secret OCID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.instrumentationType">instrumentationType</a></code> | <code>java.lang.String</code> | Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.loggingStackOcid">loggingStackOcid</a></code> | <code>java.lang.String</code> | The Logging stack identifier for the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.metricStackOcid">metricStackOcid</a></code> | <code>java.lang.String</code> | The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociRegion">ociRegion</a></code> | <code>java.lang.String</code> | The OCI region for the account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.userVaultOcid">userVaultOcid</a></code> | <code>java.lang.String</code> | The user secret OCID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentOcid`<sup>Required</sup> <a name="compartmentOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.compartmentOcid"></a>

```java
public java.lang.String getCompartmentOcid();
```

- *Type:* java.lang.String

The New Relic compartment OCID in OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#compartment_ocid CloudOciLinkAccount#compartment_ocid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The linked account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#name CloudOciLinkAccount#name}

---

##### `ociClientId`<sup>Required</sup> <a name="ociClientId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientId"></a>

```java
public java.lang.String getOciClientId();
```

- *Type:* java.lang.String

The client ID for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_client_id CloudOciLinkAccount#oci_client_id}

---

##### `ociClientSecret`<sup>Required</sup> <a name="ociClientSecret" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientSecret"></a>

```java
public java.lang.String getOciClientSecret();
```

- *Type:* java.lang.String

The client secret for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_client_secret CloudOciLinkAccount#oci_client_secret}

---

##### `ociDomainUrl`<sup>Required</sup> <a name="ociDomainUrl" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociDomainUrl"></a>

```java
public java.lang.String getOciDomainUrl();
```

- *Type:* java.lang.String

The OCI domain URL for WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_domain_url CloudOciLinkAccount#oci_domain_url}

---

##### `ociHomeRegion`<sup>Required</sup> <a name="ociHomeRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociHomeRegion"></a>

```java
public java.lang.String getOciHomeRegion();
```

- *Type:* java.lang.String

The home region of the tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_home_region CloudOciLinkAccount#oci_home_region}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

The OCI tenant identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#tenant_id CloudOciLinkAccount#tenant_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The New Relic account ID where you want to link the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#account_id CloudOciLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestVaultOcid`<sup>Optional</sup> <a name="ingestVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ingestVaultOcid"></a>

```java
public java.lang.String getIngestVaultOcid();
```

- *Type:* java.lang.String

The OCI ingest secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#ingest_vault_ocid CloudOciLinkAccount#ingest_vault_ocid}

---

##### `instrumentationType`<sup>Optional</sup> <a name="instrumentationType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.instrumentationType"></a>

```java
public java.lang.String getInstrumentationType();
```

- *Type:* java.lang.String

Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#instrumentation_type CloudOciLinkAccount#instrumentation_type}

---

##### `loggingStackOcid`<sup>Optional</sup> <a name="loggingStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.loggingStackOcid"></a>

```java
public java.lang.String getLoggingStackOcid();
```

- *Type:* java.lang.String

The Logging stack identifier for the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#logging_stack_ocid CloudOciLinkAccount#logging_stack_ocid}

---

##### `metricStackOcid`<sup>Optional</sup> <a name="metricStackOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.metricStackOcid"></a>

```java
public java.lang.String getMetricStackOcid();
```

- *Type:* java.lang.String

The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#metric_stack_ocid CloudOciLinkAccount#metric_stack_ocid}

---

##### `ociRegion`<sup>Optional</sup> <a name="ociRegion" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociRegion"></a>

```java
public java.lang.String getOciRegion();
```

- *Type:* java.lang.String

The OCI region for the account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#oci_region CloudOciLinkAccount#oci_region}

---

##### `userVaultOcid`<sup>Optional</sup> <a name="userVaultOcid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.userVaultOcid"></a>

```java
public java.lang.String getUserVaultOcid();
```

- *Type:* java.lang.String

The user secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_oci_link_account#user_vault_ocid CloudOciLinkAccount#user_vault_ocid}

---



