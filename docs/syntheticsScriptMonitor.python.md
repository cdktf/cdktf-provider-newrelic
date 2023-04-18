# `newrelic_synthetics_script_monitor`

Refer to the Terraform Registory for docs: [`newrelic_synthetics_script_monitor`](https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor).

# `syntheticsScriptMonitor` Submodule <a name="`syntheticsScriptMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsScriptMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsScriptMonitor <a name="SyntheticsScriptMonitor" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor"></a>

Represents a {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor newrelic_synthetics_script_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  period: str,
  status: str,
  type: str,
  account_id: typing.Union[int, float] = None,
  enable_screenshot_on_failure_and_script: typing.Union[bool, IResolvable] = None,
  id: str = None,
  location_private: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorLocationPrivate]] = None,
  locations_public: typing.List[str] = None,
  runtime_type: str = None,
  runtime_type_version: str = None,
  script: str = None,
  script_language: str = None,
  tag: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorTag]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.period">period</a></code> | <code>str</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.status">status</a></code> | <code>str</code> | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.type">type</a></code> | <code>str</code> | The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.enableScreenshotOnFailureAndScript">enable_screenshot_on_failure_and_script</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#id SyntheticsScriptMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.locationPrivate">location_private</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]</code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.runtimeType">runtime_type</a></code> | <code>str</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.runtimeTypeVersion">runtime_type_version</a></code> | <code>str</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.script">script</a></code> | <code>str</code> | The script that the monitor runs. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scriptLanguage">script_language</a></code> | <code>str</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]</code> | tag block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.name"></a>

- *Type:* str

The title of this monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#name SyntheticsScriptMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.period"></a>

- *Type:* str

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#period SyntheticsScriptMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.status"></a>

- *Type:* str

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#status SyntheticsScriptMonitor#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.type"></a>

- *Type:* str

The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#type SyntheticsScriptMonitor#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

ID of the newrelic account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#account_id SyntheticsScriptMonitor#account_id}

---

##### `enable_screenshot_on_failure_and_script`<sup>Optional</sup> <a name="enable_screenshot_on_failure_and_script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.enableScreenshotOnFailureAndScript"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#enable_screenshot_on_failure_and_script SyntheticsScriptMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#id SyntheticsScriptMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_private`<sup>Optional</sup> <a name="location_private" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.locationPrivate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]

location_private block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#location_private SyntheticsScriptMonitor#location_private}

---

##### `locations_public`<sup>Optional</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.locationsPublic"></a>

- *Type:* typing.List[str]

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#locations_public SyntheticsScriptMonitor#locations_public}

---

##### `runtime_type`<sup>Optional</sup> <a name="runtime_type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.runtimeType"></a>

- *Type:* str

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#runtime_type SyntheticsScriptMonitor#runtime_type}

---

##### `runtime_type_version`<sup>Optional</sup> <a name="runtime_type_version" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.runtimeTypeVersion"></a>

- *Type:* str

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#runtime_type_version SyntheticsScriptMonitor#runtime_type_version}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.script"></a>

- *Type:* str

The script that the monitor runs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#script SyntheticsScriptMonitor#script}

---

##### `script_language`<sup>Optional</sup> <a name="script_language" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.scriptLanguage"></a>

- *Type:* str

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#script_language SyntheticsScriptMonitor#script_language}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.Initializer.parameter.tag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#tag SyntheticsScriptMonitor#tag}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate">put_location_private</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetEnableScreenshotOnFailureAndScript">reset_enable_screenshot_on_failure_and_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationPrivate">reset_location_private</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationsPublic">reset_locations_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeType">reset_runtime_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeTypeVersion">reset_runtime_type_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScript">reset_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScriptLanguage">reset_script_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetTag">reset_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_location_private` <a name="put_location_private" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate"></a>

```python
def put_location_private(
  value: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorLocationPrivate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putLocationPrivate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag"></a>

```python
def put_tag(
  value: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.putTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_enable_screenshot_on_failure_and_script` <a name="reset_enable_screenshot_on_failure_and_script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```python
def reset_enable_screenshot_on_failure_and_script() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_private` <a name="reset_location_private" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationPrivate"></a>

```python
def reset_location_private() -> None
```

##### `reset_locations_public` <a name="reset_locations_public" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetLocationsPublic"></a>

```python
def reset_locations_public() -> None
```

##### `reset_runtime_type` <a name="reset_runtime_type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeType"></a>

```python
def reset_runtime_type() -> None
```

##### `reset_runtime_type_version` <a name="reset_runtime_type_version" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetRuntimeTypeVersion"></a>

```python
def reset_runtime_type_version() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScript"></a>

```python
def reset_script() -> None
```

##### `reset_script_language` <a name="reset_script_language" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetScriptLanguage"></a>

```python
def reset_script_language() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.resetTag"></a>

```python
def reset_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivate">location_private</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList">SyntheticsScriptMonitorLocationPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList">SyntheticsScriptMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScriptInput">enable_screenshot_on_failure_and_script_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivateInput">location_private_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublicInput">locations_public_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeInput">runtime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersionInput">runtime_type_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptInput">script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguageInput">script_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScript">enable_screenshot_on_failure_and_script</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeType">runtime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersion">runtime_type_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguage">script_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `location_private`<sup>Required</sup> <a name="location_private" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivate"></a>

```python
location_private: SyntheticsScriptMonitorLocationPrivateList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList">SyntheticsScriptMonitorLocationPrivateList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tag"></a>

```python
tag: SyntheticsScriptMonitorTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList">SyntheticsScriptMonitorTagList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_screenshot_on_failure_and_script_input`<sup>Optional</sup> <a name="enable_screenshot_on_failure_and_script_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```python
enable_screenshot_on_failure_and_script_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_private_input`<sup>Optional</sup> <a name="location_private_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationPrivateInput"></a>

```python
location_private_input: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorLocationPrivate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]

---

##### `locations_public_input`<sup>Optional</sup> <a name="locations_public_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublicInput"></a>

```python
locations_public_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `runtime_type_input`<sup>Optional</sup> <a name="runtime_type_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeInput"></a>

```python
runtime_type_input: str
```

- *Type:* str

---

##### `runtime_type_version_input`<sup>Optional</sup> <a name="runtime_type_version_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersionInput"></a>

```python
runtime_type_version_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptInput"></a>

```python
script_input: str
```

- *Type:* str

---

##### `script_language_input`<sup>Optional</sup> <a name="script_language_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguageInput"></a>

```python
script_language_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_screenshot_on_failure_and_script`<sup>Required</sup> <a name="enable_screenshot_on_failure_and_script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.enableScreenshotOnFailureAndScript"></a>

```python
enable_screenshot_on_failure_and_script: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locations_public`<sup>Required</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.locationsPublic"></a>

```python
locations_public: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `runtime_type`<sup>Required</sup> <a name="runtime_type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeType"></a>

```python
runtime_type: str
```

- *Type:* str

---

##### `runtime_type_version`<sup>Required</sup> <a name="runtime_type_version" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.runtimeTypeVersion"></a>

```python
runtime_type_version: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `script_language`<sup>Required</sup> <a name="script_language" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.scriptLanguage"></a>

```python
script_language: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsScriptMonitorConfig <a name="SyntheticsScriptMonitorConfig" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  period: str,
  status: str,
  type: str,
  account_id: typing.Union[int, float] = None,
  enable_screenshot_on_failure_and_script: typing.Union[bool, IResolvable] = None,
  id: str = None,
  location_private: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorLocationPrivate]] = None,
  locations_public: typing.List[str] = None,
  runtime_type: str = None,
  runtime_type_version: str = None,
  script: str = None,
  script_language: str = None,
  tag: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorTag]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.name">name</a></code> | <code>str</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.period">period</a></code> | <code>str</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.status">status</a></code> | <code>str</code> | The monitor status (i.e. ENABLED, MUTED, DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.type">type</a></code> | <code>str</code> | The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.enableScreenshotOnFailureAndScript">enable_screenshot_on_failure_and_script</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#id SyntheticsScriptMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationPrivate">location_private</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]</code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeType">runtime_type</a></code> | <code>str</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeTypeVersion">runtime_type_version</a></code> | <code>str</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.script">script</a></code> | <code>str</code> | The script that the monitor runs. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.scriptLanguage">script_language</a></code> | <code>str</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]</code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The title of this monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#name SyntheticsScriptMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.period"></a>

```python
period: str
```

- *Type:* str

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#period SyntheticsScriptMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The monitor status (i.e. ENABLED, MUTED, DISABLED).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#status SyntheticsScriptMonitor#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The monitor type. Valid values are SCRIPT_BROWSER, and SCRIPT_API.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#type SyntheticsScriptMonitor#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ID of the newrelic account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#account_id SyntheticsScriptMonitor#account_id}

---

##### `enable_screenshot_on_failure_and_script`<sup>Optional</sup> <a name="enable_screenshot_on_failure_and_script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```python
enable_screenshot_on_failure_and_script: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#enable_screenshot_on_failure_and_script SyntheticsScriptMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#id SyntheticsScriptMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_private`<sup>Optional</sup> <a name="location_private" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationPrivate"></a>

```python
location_private: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorLocationPrivate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]

location_private block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#location_private SyntheticsScriptMonitor#location_private}

---

##### `locations_public`<sup>Optional</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.locationsPublic"></a>

```python
locations_public: typing.List[str]
```

- *Type:* typing.List[str]

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#locations_public SyntheticsScriptMonitor#locations_public}

---

##### `runtime_type`<sup>Optional</sup> <a name="runtime_type" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeType"></a>

```python
runtime_type: str
```

- *Type:* str

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#runtime_type SyntheticsScriptMonitor#runtime_type}

---

##### `runtime_type_version`<sup>Optional</sup> <a name="runtime_type_version" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.runtimeTypeVersion"></a>

```python
runtime_type_version: str
```

- *Type:* str

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#runtime_type_version SyntheticsScriptMonitor#runtime_type_version}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.script"></a>

```python
script: str
```

- *Type:* str

The script that the monitor runs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#script SyntheticsScriptMonitor#script}

---

##### `script_language`<sup>Optional</sup> <a name="script_language" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.scriptLanguage"></a>

```python
script_language: str
```

- *Type:* str

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#script_language SyntheticsScriptMonitor#script_language}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorConfig.property.tag"></a>

```python
tag: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#tag SyntheticsScriptMonitor#tag}

---

### SyntheticsScriptMonitorLocationPrivate <a name="SyntheticsScriptMonitorLocationPrivate" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate(
  guid: str,
  vse_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.guid">guid</a></code> | <code>str</code> | The unique identifier for the Synthetics private location in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.vsePassword">vse_password</a></code> | <code>str</code> | The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location). |

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.guid"></a>

```python
guid: str
```

- *Type:* str

The unique identifier for the Synthetics private location in New Relic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#guid SyntheticsScriptMonitor#guid}

---

##### `vse_password`<sup>Optional</sup> <a name="vse_password" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate.property.vsePassword"></a>

```python
vse_password: str
```

- *Type:* str

The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#vse_password SyntheticsScriptMonitor#vse_password}

---

### SyntheticsScriptMonitorTag <a name="SyntheticsScriptMonitorTag" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitorTag(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.key">key</a></code> | <code>str</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.values">values</a></code> | <code>typing.List[str]</code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.key"></a>

```python
key: str
```

- *Type:* str

Name of the tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#key SyntheticsScriptMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/newrelic/r/synthetics_script_monitor#values SyntheticsScriptMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsScriptMonitorLocationPrivateList <a name="SyntheticsScriptMonitorLocationPrivateList" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsScriptMonitorLocationPrivateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorLocationPrivate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>]]

---


### SyntheticsScriptMonitorLocationPrivateOutputReference <a name="SyntheticsScriptMonitorLocationPrivateOutputReference" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resetVsePassword">reset_vse_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vse_password` <a name="reset_vse_password" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.resetVsePassword"></a>

```python
def reset_vse_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guidInput">guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePasswordInput">vse_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePassword">vse_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guid_input`<sup>Optional</sup> <a name="guid_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guidInput"></a>

```python
guid_input: str
```

- *Type:* str

---

##### `vse_password_input`<sup>Optional</sup> <a name="vse_password_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePasswordInput"></a>

```python
vse_password_input: str
```

- *Type:* str

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `vse_password`<sup>Required</sup> <a name="vse_password" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.vsePassword"></a>

```python
vse_password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SyntheticsScriptMonitorLocationPrivate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorLocationPrivate">SyntheticsScriptMonitorLocationPrivate</a>, cdktf.IResolvable]

---


### SyntheticsScriptMonitorTagList <a name="SyntheticsScriptMonitorTagList" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitorTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsScriptMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SyntheticsScriptMonitorTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>]]

---


### SyntheticsScriptMonitorTagOutputReference <a name="SyntheticsScriptMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_script_monitor

syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SyntheticsScriptMonitorTag, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-newrelic.syntheticsScriptMonitor.SyntheticsScriptMonitorTag">SyntheticsScriptMonitorTag</a>, cdktf.IResolvable]

---



