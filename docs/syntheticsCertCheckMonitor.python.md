# `newrelic_synthetics_cert_check_monitor`

Refer to the Terraform Registory for docs: [`newrelic_synthetics_cert_check_monitor`](https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor).

# `syntheticsCertCheckMonitor` Submodule <a name="`syntheticsCertCheckMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCertCheckMonitor <a name="SyntheticsCertCheckMonitor" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor newrelic_synthetics_cert_check_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_cert_check_monitor

syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_expiration: typing.Union[int, float],
  domain: str,
  name: str,
  period: str,
  status: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  locations_private: typing.List[str] = None,
  locations_public: typing.List[str] = None,
  tag: typing.Union[IResolvable, typing.List[SyntheticsCertCheckMonitorTag]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.certificateExpiration">certificate_expiration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | name of the cert check monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.period">period</a></code> | <code>str</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.status">status</a></code> | <code>str</code> | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.locationsPrivate">locations_private</a></code> | <code>typing.List[str]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]</code> | tag block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_expiration`<sup>Required</sup> <a name="certificate_expiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.certificateExpiration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.name"></a>

- *Type:* str

name of the cert check monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#name SyntheticsCertCheckMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.period"></a>

- *Type:* str

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#period SyntheticsCertCheckMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.status"></a>

- *Type:* str

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#status SyntheticsCertCheckMonitor#status}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

ID of the newrelic account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#account_id SyntheticsCertCheckMonitor#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locations_private`<sup>Optional</sup> <a name="locations_private" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.locationsPrivate"></a>

- *Type:* typing.List[str]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#locations_private SyntheticsCertCheckMonitor#locations_private}

---

##### `locations_public`<sup>Optional</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.locationsPublic"></a>

- *Type:* typing.List[str]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#locations_public SyntheticsCertCheckMonitor#locations_public}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.Initializer.parameter.tag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#tag SyntheticsCertCheckMonitor#tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPrivate">reset_locations_private</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPublic">reset_locations_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetTag">reset_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag"></a>

```python
def put_tag(
  value: typing.Union[IResolvable, typing.List[SyntheticsCertCheckMonitorTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.putTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_locations_private` <a name="reset_locations_private" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPrivate"></a>

```python
def reset_locations_private() -> None
```

##### `reset_locations_public` <a name="reset_locations_public" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetLocationsPublic"></a>

```python
def reset_locations_public() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.resetTag"></a>

```python
def reset_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_cert_check_monitor

syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_cert_check_monitor

syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_cert_check_monitor

syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList">SyntheticsCertCheckMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpirationInput">certificate_expiration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivateInput">locations_private_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublicInput">locations_public_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpiration">certificate_expiration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivate">locations_private</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tag"></a>

```python
tag: SyntheticsCertCheckMonitorTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList">SyntheticsCertCheckMonitorTagList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_expiration_input`<sup>Optional</sup> <a name="certificate_expiration_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpirationInput"></a>

```python
certificate_expiration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `locations_private_input`<sup>Optional</sup> <a name="locations_private_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivateInput"></a>

```python
locations_private_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations_public_input`<sup>Optional</sup> <a name="locations_public_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublicInput"></a>

```python
locations_public_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, typing.List[SyntheticsCertCheckMonitorTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_expiration`<sup>Required</sup> <a name="certificate_expiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.certificateExpiration"></a>

```python
certificate_expiration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locations_private`<sup>Required</sup> <a name="locations_private" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPrivate"></a>

```python
locations_private: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations_public`<sup>Required</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.locationsPublic"></a>

```python
locations_public: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCertCheckMonitorConfig <a name="SyntheticsCertCheckMonitorConfig" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_cert_check_monitor

syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_expiration: typing.Union[int, float],
  domain: str,
  name: str,
  period: str,
  status: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  locations_private: typing.List[str] = None,
  locations_public: typing.List[str] = None,
  tag: typing.Union[IResolvable, typing.List[SyntheticsCertCheckMonitorTag]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.certificateExpiration">certificate_expiration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.name">name</a></code> | <code>str</code> | name of the cert check monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.period">period</a></code> | <code>str</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.status">status</a></code> | <code>str</code> | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPrivate">locations_private</a></code> | <code>typing.List[str]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]</code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_expiration`<sup>Required</sup> <a name="certificate_expiration" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.certificateExpiration"></a>

```python
certificate_expiration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#certificate_expiration SyntheticsCertCheckMonitor#certificate_expiration}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#domain SyntheticsCertCheckMonitor#domain}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

name of the cert check monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#name SyntheticsCertCheckMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.period"></a>

```python
period: str
```

- *Type:* str

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#period SyntheticsCertCheckMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#status SyntheticsCertCheckMonitor#status}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ID of the newrelic account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#account_id SyntheticsCertCheckMonitor#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#id SyntheticsCertCheckMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locations_private`<sup>Optional</sup> <a name="locations_private" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPrivate"></a>

```python
locations_private: typing.List[str]
```

- *Type:* typing.List[str]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#locations_private SyntheticsCertCheckMonitor#locations_private}

---

##### `locations_public`<sup>Optional</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.locationsPublic"></a>

```python
locations_public: typing.List[str]
```

- *Type:* typing.List[str]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#locations_public SyntheticsCertCheckMonitor#locations_public}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorConfig.property.tag"></a>

```python
tag: typing.Union[IResolvable, typing.List[SyntheticsCertCheckMonitorTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#tag SyntheticsCertCheckMonitor#tag}

---

### SyntheticsCertCheckMonitorTag <a name="SyntheticsCertCheckMonitorTag" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_cert_check_monitor

syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.key">key</a></code> | <code>str</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.values">values</a></code> | <code>typing.List[str]</code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.key"></a>

```python
key: str
```

- *Type:* str

Name of the tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#key SyntheticsCertCheckMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_cert_check_monitor#values SyntheticsCertCheckMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCertCheckMonitorTagList <a name="SyntheticsCertCheckMonitorTagList" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_cert_check_monitor

syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsCertCheckMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SyntheticsCertCheckMonitorTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>]]

---


### SyntheticsCertCheckMonitorTagOutputReference <a name="SyntheticsCertCheckMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_cert_check_monitor

syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SyntheticsCertCheckMonitorTag, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-newrelic.syntheticsCertCheckMonitor.SyntheticsCertCheckMonitorTag">SyntheticsCertCheckMonitorTag</a>, cdktf.IResolvable]

---



