# `cloudOciLinkAccount` Submodule <a name="`cloudOciLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudOciLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudOciLinkAccount <a name="CloudOciLinkAccount" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account newrelic_cloud_oci_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_oci_link_account

cloudOciLinkAccount.CloudOciLinkAccount(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  compartment_ocid: str,
  name: str,
  oci_client_id: str,
  oci_client_secret: str,
  oci_domain_url: str,
  oci_home_region: str,
  oci_svc_user_name: str,
  tenant_id: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  ingest_vault_ocid: str = None,
  instrumentation_type: str = None,
  logging_stack_ocid: str = None,
  metric_stack_ocid: str = None,
  oci_region: str = None,
  user_vault_ocid: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | The New Relic compartment OCID in OCI. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | The linked account name. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociClientId">oci_client_id</a></code> | <code>str</code> | The client ID for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociClientSecret">oci_client_secret</a></code> | <code>str</code> | The client secret for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociDomainUrl">oci_domain_url</a></code> | <code>str</code> | The OCI domain URL for WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociHomeRegion">oci_home_region</a></code> | <code>str</code> | The home region of the tenancy. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociSvcUserName">oci_svc_user_name</a></code> | <code>str</code> | The service user name for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The OCI tenant identifier. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to link the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ingestVaultOcid">ingest_vault_ocid</a></code> | <code>str</code> | The OCI ingest secret OCID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.instrumentationType">instrumentation_type</a></code> | <code>str</code> | Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.loggingStackOcid">logging_stack_ocid</a></code> | <code>str</code> | The Logging stack identifier for the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.metricStackOcid">metric_stack_ocid</a></code> | <code>str</code> | The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociRegion">oci_region</a></code> | <code>str</code> | The OCI region for the account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.userVaultOcid">user_vault_ocid</a></code> | <code>str</code> | The user secret OCID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.compartmentOcid"></a>

- *Type:* str

The New Relic compartment OCID in OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#compartment_ocid CloudOciLinkAccount#compartment_ocid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.name"></a>

- *Type:* str

The linked account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#name CloudOciLinkAccount#name}

---

##### `oci_client_id`<sup>Required</sup> <a name="oci_client_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociClientId"></a>

- *Type:* str

The client ID for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_client_id CloudOciLinkAccount#oci_client_id}

---

##### `oci_client_secret`<sup>Required</sup> <a name="oci_client_secret" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociClientSecret"></a>

- *Type:* str

The client secret for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_client_secret CloudOciLinkAccount#oci_client_secret}

---

##### `oci_domain_url`<sup>Required</sup> <a name="oci_domain_url" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociDomainUrl"></a>

- *Type:* str

The OCI domain URL for WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_domain_url CloudOciLinkAccount#oci_domain_url}

---

##### `oci_home_region`<sup>Required</sup> <a name="oci_home_region" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociHomeRegion"></a>

- *Type:* str

The home region of the tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_home_region CloudOciLinkAccount#oci_home_region}

---

##### `oci_svc_user_name`<sup>Required</sup> <a name="oci_svc_user_name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociSvcUserName"></a>

- *Type:* str

The service user name for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_svc_user_name CloudOciLinkAccount#oci_svc_user_name}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.tenantId"></a>

- *Type:* str

The OCI tenant identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#tenant_id CloudOciLinkAccount#tenant_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to link the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#account_id CloudOciLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingest_vault_ocid`<sup>Optional</sup> <a name="ingest_vault_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ingestVaultOcid"></a>

- *Type:* str

The OCI ingest secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#ingest_vault_ocid CloudOciLinkAccount#ingest_vault_ocid}

---

##### `instrumentation_type`<sup>Optional</sup> <a name="instrumentation_type" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.instrumentationType"></a>

- *Type:* str

Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#instrumentation_type CloudOciLinkAccount#instrumentation_type}

---

##### `logging_stack_ocid`<sup>Optional</sup> <a name="logging_stack_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.loggingStackOcid"></a>

- *Type:* str

The Logging stack identifier for the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#logging_stack_ocid CloudOciLinkAccount#logging_stack_ocid}

---

##### `metric_stack_ocid`<sup>Optional</sup> <a name="metric_stack_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.metricStackOcid"></a>

- *Type:* str

The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#metric_stack_ocid CloudOciLinkAccount#metric_stack_ocid}

---

##### `oci_region`<sup>Optional</sup> <a name="oci_region" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.ociRegion"></a>

- *Type:* str

The OCI region for the account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_region CloudOciLinkAccount#oci_region}

---

##### `user_vault_ocid`<sup>Optional</sup> <a name="user_vault_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.Initializer.parameter.userVaultOcid"></a>

- *Type:* str

The user secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#user_vault_ocid CloudOciLinkAccount#user_vault_ocid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetIngestVaultOcid">reset_ingest_vault_ocid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetInstrumentationType">reset_instrumentation_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetLoggingStackOcid">reset_logging_stack_ocid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetMetricStackOcid">reset_metric_stack_ocid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOciRegion">reset_oci_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetUserVaultOcid">reset_user_vault_ocid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingest_vault_ocid` <a name="reset_ingest_vault_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetIngestVaultOcid"></a>

```python
def reset_ingest_vault_ocid() -> None
```

##### `reset_instrumentation_type` <a name="reset_instrumentation_type" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetInstrumentationType"></a>

```python
def reset_instrumentation_type() -> None
```

##### `reset_logging_stack_ocid` <a name="reset_logging_stack_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetLoggingStackOcid"></a>

```python
def reset_logging_stack_ocid() -> None
```

##### `reset_metric_stack_ocid` <a name="reset_metric_stack_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetMetricStackOcid"></a>

```python
def reset_metric_stack_ocid() -> None
```

##### `reset_oci_region` <a name="reset_oci_region" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetOciRegion"></a>

```python
def reset_oci_region() -> None
```

##### `reset_user_vault_ocid` <a name="reset_user_vault_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.resetUserVaultOcid"></a>

```python
def reset_user_vault_ocid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudOciLinkAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_oci_link_account

cloudOciLinkAccount.CloudOciLinkAccount.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_oci_link_account

cloudOciLinkAccount.CloudOciLinkAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_oci_link_account

cloudOciLinkAccount.CloudOciLinkAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_oci_link_account

cloudOciLinkAccount.CloudOciLinkAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudOciLinkAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudOciLinkAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudOciLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudOciLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcidInput">compartment_ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcidInput">ingest_vault_ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationTypeInput">instrumentation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcidInput">logging_stack_ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcidInput">metric_stack_ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientIdInput">oci_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecretInput">oci_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrlInput">oci_domain_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegionInput">oci_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegionInput">oci_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociSvcUserNameInput">oci_svc_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcidInput">user_vault_ocid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcid">ingest_vault_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationType">instrumentation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcid">logging_stack_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcid">metric_stack_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientId">oci_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecret">oci_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrl">oci_domain_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegion">oci_home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegion">oci_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociSvcUserName">oci_svc_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcid">user_vault_ocid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_ocid_input`<sup>Optional</sup> <a name="compartment_ocid_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcidInput"></a>

```python
compartment_ocid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingest_vault_ocid_input`<sup>Optional</sup> <a name="ingest_vault_ocid_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcidInput"></a>

```python
ingest_vault_ocid_input: str
```

- *Type:* str

---

##### `instrumentation_type_input`<sup>Optional</sup> <a name="instrumentation_type_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationTypeInput"></a>

```python
instrumentation_type_input: str
```

- *Type:* str

---

##### `logging_stack_ocid_input`<sup>Optional</sup> <a name="logging_stack_ocid_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcidInput"></a>

```python
logging_stack_ocid_input: str
```

- *Type:* str

---

##### `metric_stack_ocid_input`<sup>Optional</sup> <a name="metric_stack_ocid_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcidInput"></a>

```python
metric_stack_ocid_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oci_client_id_input`<sup>Optional</sup> <a name="oci_client_id_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientIdInput"></a>

```python
oci_client_id_input: str
```

- *Type:* str

---

##### `oci_client_secret_input`<sup>Optional</sup> <a name="oci_client_secret_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecretInput"></a>

```python
oci_client_secret_input: str
```

- *Type:* str

---

##### `oci_domain_url_input`<sup>Optional</sup> <a name="oci_domain_url_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrlInput"></a>

```python
oci_domain_url_input: str
```

- *Type:* str

---

##### `oci_home_region_input`<sup>Optional</sup> <a name="oci_home_region_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegionInput"></a>

```python
oci_home_region_input: str
```

- *Type:* str

---

##### `oci_region_input`<sup>Optional</sup> <a name="oci_region_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegionInput"></a>

```python
oci_region_input: str
```

- *Type:* str

---

##### `oci_svc_user_name_input`<sup>Optional</sup> <a name="oci_svc_user_name_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociSvcUserNameInput"></a>

```python
oci_svc_user_name_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `user_vault_ocid_input`<sup>Optional</sup> <a name="user_vault_ocid_input" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcidInput"></a>

```python
user_vault_ocid_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingest_vault_ocid`<sup>Required</sup> <a name="ingest_vault_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ingestVaultOcid"></a>

```python
ingest_vault_ocid: str
```

- *Type:* str

---

##### `instrumentation_type`<sup>Required</sup> <a name="instrumentation_type" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.instrumentationType"></a>

```python
instrumentation_type: str
```

- *Type:* str

---

##### `logging_stack_ocid`<sup>Required</sup> <a name="logging_stack_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.loggingStackOcid"></a>

```python
logging_stack_ocid: str
```

- *Type:* str

---

##### `metric_stack_ocid`<sup>Required</sup> <a name="metric_stack_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.metricStackOcid"></a>

```python
metric_stack_ocid: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oci_client_id`<sup>Required</sup> <a name="oci_client_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientId"></a>

```python
oci_client_id: str
```

- *Type:* str

---

##### `oci_client_secret`<sup>Required</sup> <a name="oci_client_secret" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociClientSecret"></a>

```python
oci_client_secret: str
```

- *Type:* str

---

##### `oci_domain_url`<sup>Required</sup> <a name="oci_domain_url" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociDomainUrl"></a>

```python
oci_domain_url: str
```

- *Type:* str

---

##### `oci_home_region`<sup>Required</sup> <a name="oci_home_region" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociHomeRegion"></a>

```python
oci_home_region: str
```

- *Type:* str

---

##### `oci_region`<sup>Required</sup> <a name="oci_region" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociRegion"></a>

```python
oci_region: str
```

- *Type:* str

---

##### `oci_svc_user_name`<sup>Required</sup> <a name="oci_svc_user_name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.ociSvcUserName"></a>

```python
oci_svc_user_name: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `user_vault_ocid`<sup>Required</sup> <a name="user_vault_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.userVaultOcid"></a>

```python
user_vault_ocid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudOciLinkAccountConfig <a name="CloudOciLinkAccountConfig" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_oci_link_account

cloudOciLinkAccount.CloudOciLinkAccountConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  compartment_ocid: str,
  name: str,
  oci_client_id: str,
  oci_client_secret: str,
  oci_domain_url: str,
  oci_home_region: str,
  oci_svc_user_name: str,
  tenant_id: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  ingest_vault_ocid: str = None,
  instrumentation_type: str = None,
  logging_stack_ocid: str = None,
  metric_stack_ocid: str = None,
  oci_region: str = None,
  user_vault_ocid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | The New Relic compartment OCID in OCI. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.name">name</a></code> | <code>str</code> | The linked account name. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientId">oci_client_id</a></code> | <code>str</code> | The client ID for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientSecret">oci_client_secret</a></code> | <code>str</code> | The client secret for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociDomainUrl">oci_domain_url</a></code> | <code>str</code> | The OCI domain URL for WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociHomeRegion">oci_home_region</a></code> | <code>str</code> | The home region of the tenancy. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociSvcUserName">oci_svc_user_name</a></code> | <code>str</code> | The service user name for OCI WIF. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The OCI tenant identifier. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to link the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ingestVaultOcid">ingest_vault_ocid</a></code> | <code>str</code> | The OCI ingest secret OCID. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.instrumentationType">instrumentation_type</a></code> | <code>str</code> | Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.loggingStackOcid">logging_stack_ocid</a></code> | <code>str</code> | The Logging stack identifier for the OCI account. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.metricStackOcid">metric_stack_ocid</a></code> | <code>str</code> | The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociRegion">oci_region</a></code> | <code>str</code> | The OCI region for the account. This field is only used for updates, not during initial creation. |
| <code><a href="#@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.userVaultOcid">user_vault_ocid</a></code> | <code>str</code> | The user secret OCID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

The New Relic compartment OCID in OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#compartment_ocid CloudOciLinkAccount#compartment_ocid}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The linked account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#name CloudOciLinkAccount#name}

---

##### `oci_client_id`<sup>Required</sup> <a name="oci_client_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientId"></a>

```python
oci_client_id: str
```

- *Type:* str

The client ID for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_client_id CloudOciLinkAccount#oci_client_id}

---

##### `oci_client_secret`<sup>Required</sup> <a name="oci_client_secret" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociClientSecret"></a>

```python
oci_client_secret: str
```

- *Type:* str

The client secret for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_client_secret CloudOciLinkAccount#oci_client_secret}

---

##### `oci_domain_url`<sup>Required</sup> <a name="oci_domain_url" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociDomainUrl"></a>

```python
oci_domain_url: str
```

- *Type:* str

The OCI domain URL for WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_domain_url CloudOciLinkAccount#oci_domain_url}

---

##### `oci_home_region`<sup>Required</sup> <a name="oci_home_region" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociHomeRegion"></a>

```python
oci_home_region: str
```

- *Type:* str

The home region of the tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_home_region CloudOciLinkAccount#oci_home_region}

---

##### `oci_svc_user_name`<sup>Required</sup> <a name="oci_svc_user_name" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociSvcUserName"></a>

```python
oci_svc_user_name: str
```

- *Type:* str

The service user name for OCI WIF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_svc_user_name CloudOciLinkAccount#oci_svc_user_name}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The OCI tenant identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#tenant_id CloudOciLinkAccount#tenant_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to link the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#account_id CloudOciLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#id CloudOciLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingest_vault_ocid`<sup>Optional</sup> <a name="ingest_vault_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ingestVaultOcid"></a>

```python
ingest_vault_ocid: str
```

- *Type:* str

The OCI ingest secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#ingest_vault_ocid CloudOciLinkAccount#ingest_vault_ocid}

---

##### `instrumentation_type`<sup>Optional</sup> <a name="instrumentation_type" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.instrumentationType"></a>

```python
instrumentation_type: str
```

- *Type:* str

Specifies the type of integration, such as metrics, logs, or a combination of logs and metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#instrumentation_type CloudOciLinkAccount#instrumentation_type}

---

##### `logging_stack_ocid`<sup>Optional</sup> <a name="logging_stack_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.loggingStackOcid"></a>

```python
logging_stack_ocid: str
```

- *Type:* str

The Logging stack identifier for the OCI account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#logging_stack_ocid CloudOciLinkAccount#logging_stack_ocid}

---

##### `metric_stack_ocid`<sup>Optional</sup> <a name="metric_stack_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.metricStackOcid"></a>

```python
metric_stack_ocid: str
```

- *Type:* str

The metric stack identifier for the OCI account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#metric_stack_ocid CloudOciLinkAccount#metric_stack_ocid}

---

##### `oci_region`<sup>Optional</sup> <a name="oci_region" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.ociRegion"></a>

```python
oci_region: str
```

- *Type:* str

The OCI region for the account. This field is only used for updates, not during initial creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#oci_region CloudOciLinkAccount#oci_region}

---

##### `user_vault_ocid`<sup>Optional</sup> <a name="user_vault_ocid" id="@cdktf/provider-newrelic.cloudOciLinkAccount.CloudOciLinkAccountConfig.property.userVaultOcid"></a>

```python
user_vault_ocid: str
```

- *Type:* str

The user secret OCID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.1/docs/resources/cloud_oci_link_account#user_vault_ocid CloudOciLinkAccount#user_vault_ocid}

---



