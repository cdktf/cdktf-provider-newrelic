# `syntheticsMonitor` Submodule <a name="`syntheticsMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsMonitor <a name="SyntheticsMonitor" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor newrelic_synthetics_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitor(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  status: str,
  type: str,
  account_id: typing.Union[int, float] = None,
  browsers: typing.List[str] = None,
  bypass_head_request: bool | IResolvable = None,
  custom_header: IResolvable | typing.List[SyntheticsMonitorCustomHeader] = None,
  device_orientation: str = None,
  devices: typing.List[str] = None,
  device_type: str = None,
  enable_screenshot_on_failure_and_script: bool | IResolvable = None,
  id: str = None,
  locations_private: typing.List[str] = None,
  locations_public: typing.List[str] = None,
  period: str = None,
  runtime_type: str = None,
  runtime_type_version: str = None,
  script_language: str = None,
  tag: IResolvable | typing.List[SyntheticsMonitorTag] = None,
  treat_redirect_as_failure: bool | IResolvable = None,
  uri: str = None,
  use_unsupported_legacy_runtime: bool | IResolvable = None,
  validation_string: str = None,
  verify_ssl: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.name">name</a></code> | <code>str</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.status">status</a></code> | <code>str</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.type">type</a></code> | <code>str</code> | The monitor type. Valid values are SIMPLE AND BROWSER. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.browsers">browsers</a></code> | <code>typing.List[str]</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.bypassHeadRequest">bypass_head_request</a></code> | <code>bool \| cdktf.IResolvable</code> | Bypass HEAD request. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.customHeader">custom_header</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.deviceOrientation">device_orientation</a></code> | <code>str</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.devices">devices</a></code> | <code>typing.List[str]</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.deviceType">device_type</a></code> | <code>str</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.enableScreenshotOnFailureAndScript">enable_screenshot_on_failure_and_script</a></code> | <code>bool \| cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.locationsPrivate">locations_private</a></code> | <code>typing.List[str]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.period">period</a></code> | <code>str</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.runtimeType">runtime_type</a></code> | <code>str</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.runtimeTypeVersion">runtime_type_version</a></code> | <code>str</code> | The specific version of the runtime type selected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scriptLanguage">script_language</a></code> | <code>str</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.tag">tag</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.treatRedirectAsFailure">treat_redirect_as_failure</a></code> | <code>bool \| cdktf.IResolvable</code> | Fail the monitor check if redirected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.uri">uri</a></code> | <code>str</code> | The URI for the monitor to hit. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.useUnsupportedLegacyRuntime">use_unsupported_legacy_runtime</a></code> | <code>bool \| cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.validationString">validation_string</a></code> | <code>str</code> | The string to validate against in the response. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.verifySsl">verify_ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | Verify SSL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.name"></a>

- *Type:* str

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.status"></a>

- *Type:* str

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#status SyntheticsMonitor#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.type"></a>

- *Type:* str

The monitor type. Valid values are SIMPLE AND BROWSER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#type SyntheticsMonitor#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#account_id SyntheticsMonitor#account_id}

---

##### `browsers`<sup>Optional</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.browsers"></a>

- *Type:* typing.List[str]

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#browsers SyntheticsMonitor#browsers}

---

##### `bypass_head_request`<sup>Optional</sup> <a name="bypass_head_request" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.bypassHeadRequest"></a>

- *Type:* bool | cdktf.IResolvable

Bypass HEAD request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}

---

##### `custom_header`<sup>Optional</sup> <a name="custom_header" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.customHeader"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#custom_header SyntheticsMonitor#custom_header}

---

##### `device_orientation`<sup>Optional</sup> <a name="device_orientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.deviceOrientation"></a>

- *Type:* str

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#device_orientation SyntheticsMonitor#device_orientation}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.devices"></a>

- *Type:* typing.List[str]

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#devices SyntheticsMonitor#devices}

---

##### `device_type`<sup>Optional</sup> <a name="device_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.deviceType"></a>

- *Type:* str

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#device_type SyntheticsMonitor#device_type}

---

##### `enable_screenshot_on_failure_and_script`<sup>Optional</sup> <a name="enable_screenshot_on_failure_and_script" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.enableScreenshotOnFailureAndScript"></a>

- *Type:* bool | cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#enable_screenshot_on_failure_and_script SyntheticsMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locations_private`<sup>Optional</sup> <a name="locations_private" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.locationsPrivate"></a>

- *Type:* typing.List[str]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#locations_private SyntheticsMonitor#locations_private}

---

##### `locations_public`<sup>Optional</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.locationsPublic"></a>

- *Type:* typing.List[str]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#locations_public SyntheticsMonitor#locations_public}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.period"></a>

- *Type:* str

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#period SyntheticsMonitor#period}

---

##### `runtime_type`<sup>Optional</sup> <a name="runtime_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.runtimeType"></a>

- *Type:* str

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#runtime_type SyntheticsMonitor#runtime_type}

---

##### `runtime_type_version`<sup>Optional</sup> <a name="runtime_type_version" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.runtimeTypeVersion"></a>

- *Type:* str

The specific version of the runtime type selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#runtime_type_version SyntheticsMonitor#runtime_type_version}

---

##### `script_language`<sup>Optional</sup> <a name="script_language" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scriptLanguage"></a>

- *Type:* str

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#script_language SyntheticsMonitor#script_language}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.tag"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#tag SyntheticsMonitor#tag}

---

##### `treat_redirect_as_failure`<sup>Optional</sup> <a name="treat_redirect_as_failure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.treatRedirectAsFailure"></a>

- *Type:* bool | cdktf.IResolvable

Fail the monitor check if redirected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.uri"></a>

- *Type:* str

The URI for the monitor to hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#uri SyntheticsMonitor#uri}

---

##### `use_unsupported_legacy_runtime`<sup>Optional</sup> <a name="use_unsupported_legacy_runtime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.useUnsupportedLegacyRuntime"></a>

- *Type:* bool | cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#use_unsupported_legacy_runtime SyntheticsMonitor#use_unsupported_legacy_runtime}

---

##### `validation_string`<sup>Optional</sup> <a name="validation_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.validationString"></a>

- *Type:* str

The string to validate against in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}

---

##### `verify_ssl`<sup>Optional</sup> <a name="verify_ssl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.verifySsl"></a>

- *Type:* bool | cdktf.IResolvable

Verify SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader">put_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBrowsers">reset_browsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBypassHeadRequest">reset_bypass_head_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetCustomHeader">reset_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceOrientation">reset_device_orientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDevices">reset_devices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceType">reset_device_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetEnableScreenshotOnFailureAndScript">reset_enable_screenshot_on_failure_and_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPrivate">reset_locations_private</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPublic">reset_locations_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeType">reset_runtime_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeTypeVersion">reset_runtime_type_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetScriptLanguage">reset_script_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTreatRedirectAsFailure">reset_treat_redirect_as_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUri">reset_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUseUnsupportedLegacyRuntime">reset_use_unsupported_legacy_runtime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetValidationString">reset_validation_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetVerifySsl">reset_verify_ssl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_header` <a name="put_custom_header" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader"></a>

```python
def put_custom_header(
  value: IResolvable | typing.List[SyntheticsMonitorCustomHeader]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag"></a>

```python
def put_tag(
  value: IResolvable | typing.List[SyntheticsMonitorTag]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_browsers` <a name="reset_browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBrowsers"></a>

```python
def reset_browsers() -> None
```

##### `reset_bypass_head_request` <a name="reset_bypass_head_request" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBypassHeadRequest"></a>

```python
def reset_bypass_head_request() -> None
```

##### `reset_custom_header` <a name="reset_custom_header" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetCustomHeader"></a>

```python
def reset_custom_header() -> None
```

##### `reset_device_orientation` <a name="reset_device_orientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceOrientation"></a>

```python
def reset_device_orientation() -> None
```

##### `reset_devices` <a name="reset_devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDevices"></a>

```python
def reset_devices() -> None
```

##### `reset_device_type` <a name="reset_device_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceType"></a>

```python
def reset_device_type() -> None
```

##### `reset_enable_screenshot_on_failure_and_script` <a name="reset_enable_screenshot_on_failure_and_script" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```python
def reset_enable_screenshot_on_failure_and_script() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_locations_private` <a name="reset_locations_private" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPrivate"></a>

```python
def reset_locations_private() -> None
```

##### `reset_locations_public` <a name="reset_locations_public" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPublic"></a>

```python
def reset_locations_public() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_runtime_type` <a name="reset_runtime_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeType"></a>

```python
def reset_runtime_type() -> None
```

##### `reset_runtime_type_version` <a name="reset_runtime_type_version" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeTypeVersion"></a>

```python
def reset_runtime_type_version() -> None
```

##### `reset_script_language` <a name="reset_script_language" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetScriptLanguage"></a>

```python
def reset_script_language() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_treat_redirect_as_failure` <a name="reset_treat_redirect_as_failure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTreatRedirectAsFailure"></a>

```python
def reset_treat_redirect_as_failure() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUri"></a>

```python
def reset_uri() -> None
```

##### `reset_use_unsupported_legacy_runtime` <a name="reset_use_unsupported_legacy_runtime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUseUnsupportedLegacyRuntime"></a>

```python
def reset_use_unsupported_legacy_runtime() -> None
```

##### `reset_validation_string` <a name="reset_validation_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetValidationString"></a>

```python
def reset_validation_string() -> None
```

##### `reset_verify_ssl` <a name="reset_verify_ssl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetVerifySsl"></a>

```python
def reset_verify_ssl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitor.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SyntheticsMonitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeader">custom_header</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList">SyntheticsMonitorCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.monitorId">monitor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInMinutes">period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList">SyntheticsMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsersInput">browsers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequestInput">bypass_head_request_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeaderInput">custom_header_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientationInput">device_orientation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devicesInput">devices_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceTypeInput">device_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScriptInput">enable_screenshot_on_failure_and_script_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivateInput">locations_private_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublicInput">locations_public_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeInput">runtime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersionInput">runtime_type_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguageInput">script_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tagInput">tag_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailureInput">treat_redirect_as_failure_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntimeInput">use_unsupported_legacy_runtime_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationStringInput">validation_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySslInput">verify_ssl_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsers">browsers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequest">bypass_head_request</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientation">device_orientation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devices">devices</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceType">device_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScript">enable_screenshot_on_failure_and_script</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivate">locations_private</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeType">runtime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersion">runtime_type_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguage">script_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailure">treat_redirect_as_failure</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntime">use_unsupported_legacy_runtime</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationString">validation_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySsl">verify_ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `custom_header`<sup>Required</sup> <a name="custom_header" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeader"></a>

```python
custom_header: SyntheticsMonitorCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList">SyntheticsMonitorCustomHeaderList</a>

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.monitorId"></a>

```python
monitor_id: str
```

- *Type:* str

---

##### `period_in_minutes`<sup>Required</sup> <a name="period_in_minutes" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInMinutes"></a>

```python
period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tag"></a>

```python
tag: SyntheticsMonitorTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList">SyntheticsMonitorTagList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `browsers_input`<sup>Optional</sup> <a name="browsers_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsersInput"></a>

```python
browsers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bypass_head_request_input`<sup>Optional</sup> <a name="bypass_head_request_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequestInput"></a>

```python
bypass_head_request_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `custom_header_input`<sup>Optional</sup> <a name="custom_header_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeaderInput"></a>

```python
custom_header_input: IResolvable | typing.List[SyntheticsMonitorCustomHeader]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]

---

##### `device_orientation_input`<sup>Optional</sup> <a name="device_orientation_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientationInput"></a>

```python
device_orientation_input: str
```

- *Type:* str

---

##### `devices_input`<sup>Optional</sup> <a name="devices_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devicesInput"></a>

```python
devices_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_type_input`<sup>Optional</sup> <a name="device_type_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceTypeInput"></a>

```python
device_type_input: str
```

- *Type:* str

---

##### `enable_screenshot_on_failure_and_script_input`<sup>Optional</sup> <a name="enable_screenshot_on_failure_and_script_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```python
enable_screenshot_on_failure_and_script_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `locations_private_input`<sup>Optional</sup> <a name="locations_private_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivateInput"></a>

```python
locations_private_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations_public_input`<sup>Optional</sup> <a name="locations_public_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublicInput"></a>

```python
locations_public_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `runtime_type_input`<sup>Optional</sup> <a name="runtime_type_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeInput"></a>

```python
runtime_type_input: str
```

- *Type:* str

---

##### `runtime_type_version_input`<sup>Optional</sup> <a name="runtime_type_version_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersionInput"></a>

```python
runtime_type_version_input: str
```

- *Type:* str

---

##### `script_language_input`<sup>Optional</sup> <a name="script_language_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguageInput"></a>

```python
script_language_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tagInput"></a>

```python
tag_input: IResolvable | typing.List[SyntheticsMonitorTag]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]

---

##### `treat_redirect_as_failure_input`<sup>Optional</sup> <a name="treat_redirect_as_failure_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailureInput"></a>

```python
treat_redirect_as_failure_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `use_unsupported_legacy_runtime_input`<sup>Optional</sup> <a name="use_unsupported_legacy_runtime_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```python
use_unsupported_legacy_runtime_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `validation_string_input`<sup>Optional</sup> <a name="validation_string_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationStringInput"></a>

```python
validation_string_input: str
```

- *Type:* str

---

##### `verify_ssl_input`<sup>Optional</sup> <a name="verify_ssl_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySslInput"></a>

```python
verify_ssl_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `browsers`<sup>Required</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsers"></a>

```python
browsers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bypass_head_request`<sup>Required</sup> <a name="bypass_head_request" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequest"></a>

```python
bypass_head_request: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `device_orientation`<sup>Required</sup> <a name="device_orientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientation"></a>

```python
device_orientation: str
```

- *Type:* str

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devices"></a>

```python
devices: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_type`<sup>Required</sup> <a name="device_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

---

##### `enable_screenshot_on_failure_and_script`<sup>Required</sup> <a name="enable_screenshot_on_failure_and_script" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScript"></a>

```python
enable_screenshot_on_failure_and_script: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locations_private`<sup>Required</sup> <a name="locations_private" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivate"></a>

```python
locations_private: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `locations_public`<sup>Required</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublic"></a>

```python
locations_public: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `runtime_type`<sup>Required</sup> <a name="runtime_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeType"></a>

```python
runtime_type: str
```

- *Type:* str

---

##### `runtime_type_version`<sup>Required</sup> <a name="runtime_type_version" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersion"></a>

```python
runtime_type_version: str
```

- *Type:* str

---

##### `script_language`<sup>Required</sup> <a name="script_language" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguage"></a>

```python
script_language: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `treat_redirect_as_failure`<sup>Required</sup> <a name="treat_redirect_as_failure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailure"></a>

```python
treat_redirect_as_failure: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `use_unsupported_legacy_runtime`<sup>Required</sup> <a name="use_unsupported_legacy_runtime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntime"></a>

```python
use_unsupported_legacy_runtime: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `validation_string`<sup>Required</sup> <a name="validation_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationString"></a>

```python
validation_string: str
```

- *Type:* str

---

##### `verify_ssl`<sup>Required</sup> <a name="verify_ssl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySsl"></a>

```python
verify_ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsMonitorConfig <a name="SyntheticsMonitorConfig" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  status: str,
  type: str,
  account_id: typing.Union[int, float] = None,
  browsers: typing.List[str] = None,
  bypass_head_request: bool | IResolvable = None,
  custom_header: IResolvable | typing.List[SyntheticsMonitorCustomHeader] = None,
  device_orientation: str = None,
  devices: typing.List[str] = None,
  device_type: str = None,
  enable_screenshot_on_failure_and_script: bool | IResolvable = None,
  id: str = None,
  locations_private: typing.List[str] = None,
  locations_public: typing.List[str] = None,
  period: str = None,
  runtime_type: str = None,
  runtime_type_version: str = None,
  script_language: str = None,
  tag: IResolvable | typing.List[SyntheticsMonitorTag] = None,
  treat_redirect_as_failure: bool | IResolvable = None,
  uri: str = None,
  use_unsupported_legacy_runtime: bool | IResolvable = None,
  validation_string: str = None,
  verify_ssl: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.name">name</a></code> | <code>str</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.status">status</a></code> | <code>str</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.type">type</a></code> | <code>str</code> | The monitor type. Valid values are SIMPLE AND BROWSER. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.browsers">browsers</a></code> | <code>typing.List[str]</code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.bypassHeadRequest">bypass_head_request</a></code> | <code>bool \| cdktf.IResolvable</code> | Bypass HEAD request. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.customHeader">custom_header</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceOrientation">device_orientation</a></code> | <code>str</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.devices">devices</a></code> | <code>typing.List[str]</code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceType">device_type</a></code> | <code>str</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.enableScreenshotOnFailureAndScript">enable_screenshot_on_failure_and_script</a></code> | <code>bool \| cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPrivate">locations_private</a></code> | <code>typing.List[str]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPublic">locations_public</a></code> | <code>typing.List[str]</code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.period">period</a></code> | <code>str</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeType">runtime_type</a></code> | <code>str</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeTypeVersion">runtime_type_version</a></code> | <code>str</code> | The specific version of the runtime type selected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.scriptLanguage">script_language</a></code> | <code>str</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.treatRedirectAsFailure">treat_redirect_as_failure</a></code> | <code>bool \| cdktf.IResolvable</code> | Fail the monitor check if redirected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.uri">uri</a></code> | <code>str</code> | The URI for the monitor to hit. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.useUnsupportedLegacyRuntime">use_unsupported_legacy_runtime</a></code> | <code>bool \| cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.validationString">validation_string</a></code> | <code>str</code> | The string to validate against in the response. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.verifySsl">verify_ssl</a></code> | <code>bool \| cdktf.IResolvable</code> | Verify SSL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#status SyntheticsMonitor#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The monitor type. Valid values are SIMPLE AND BROWSER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#type SyntheticsMonitor#type}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#account_id SyntheticsMonitor#account_id}

---

##### `browsers`<sup>Optional</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.browsers"></a>

```python
browsers: typing.List[str]
```

- *Type:* typing.List[str]

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#browsers SyntheticsMonitor#browsers}

---

##### `bypass_head_request`<sup>Optional</sup> <a name="bypass_head_request" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.bypassHeadRequest"></a>

```python
bypass_head_request: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Bypass HEAD request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}

---

##### `custom_header`<sup>Optional</sup> <a name="custom_header" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.customHeader"></a>

```python
custom_header: IResolvable | typing.List[SyntheticsMonitorCustomHeader]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#custom_header SyntheticsMonitor#custom_header}

---

##### `device_orientation`<sup>Optional</sup> <a name="device_orientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceOrientation"></a>

```python
device_orientation: str
```

- *Type:* str

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#device_orientation SyntheticsMonitor#device_orientation}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.devices"></a>

```python
devices: typing.List[str]
```

- *Type:* typing.List[str]

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#devices SyntheticsMonitor#devices}

---

##### `device_type`<sup>Optional</sup> <a name="device_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#device_type SyntheticsMonitor#device_type}

---

##### `enable_screenshot_on_failure_and_script`<sup>Optional</sup> <a name="enable_screenshot_on_failure_and_script" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```python
enable_screenshot_on_failure_and_script: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#enable_screenshot_on_failure_and_script SyntheticsMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locations_private`<sup>Optional</sup> <a name="locations_private" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPrivate"></a>

```python
locations_private: typing.List[str]
```

- *Type:* typing.List[str]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#locations_private SyntheticsMonitor#locations_private}

---

##### `locations_public`<sup>Optional</sup> <a name="locations_public" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPublic"></a>

```python
locations_public: typing.List[str]
```

- *Type:* typing.List[str]

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#locations_public SyntheticsMonitor#locations_public}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.period"></a>

```python
period: str
```

- *Type:* str

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#period SyntheticsMonitor#period}

---

##### `runtime_type`<sup>Optional</sup> <a name="runtime_type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeType"></a>

```python
runtime_type: str
```

- *Type:* str

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#runtime_type SyntheticsMonitor#runtime_type}

---

##### `runtime_type_version`<sup>Optional</sup> <a name="runtime_type_version" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeTypeVersion"></a>

```python
runtime_type_version: str
```

- *Type:* str

The specific version of the runtime type selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#runtime_type_version SyntheticsMonitor#runtime_type_version}

---

##### `script_language`<sup>Optional</sup> <a name="script_language" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.scriptLanguage"></a>

```python
script_language: str
```

- *Type:* str

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#script_language SyntheticsMonitor#script_language}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.tag"></a>

```python
tag: IResolvable | typing.List[SyntheticsMonitorTag]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#tag SyntheticsMonitor#tag}

---

##### `treat_redirect_as_failure`<sup>Optional</sup> <a name="treat_redirect_as_failure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.treatRedirectAsFailure"></a>

```python
treat_redirect_as_failure: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Fail the monitor check if redirected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

The URI for the monitor to hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#uri SyntheticsMonitor#uri}

---

##### `use_unsupported_legacy_runtime`<sup>Optional</sup> <a name="use_unsupported_legacy_runtime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```python
use_unsupported_legacy_runtime: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#use_unsupported_legacy_runtime SyntheticsMonitor#use_unsupported_legacy_runtime}

---

##### `validation_string`<sup>Optional</sup> <a name="validation_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.validationString"></a>

```python
validation_string: str
```

- *Type:* str

The string to validate against in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}

---

##### `verify_ssl`<sup>Optional</sup> <a name="verify_ssl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.verifySsl"></a>

```python
verify_ssl: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Verify SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}

---

### SyntheticsMonitorCustomHeader <a name="SyntheticsMonitorCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitorCustomHeader(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.name">name</a></code> | <code>str</code> | Header name. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.value">value</a></code> | <code>str</code> | Header value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#value SyntheticsMonitor#value}

---

### SyntheticsMonitorTag <a name="SyntheticsMonitorTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitorTag(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.key">key</a></code> | <code>str</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.values">values</a></code> | <code>typing.List[str]</code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.key"></a>

```python
key: str
```

- *Type:* str

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#key SyntheticsMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.75.4/docs/resources/synthetics_monitor#values SyntheticsMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsMonitorCustomHeaderList <a name="SyntheticsMonitorCustomHeaderList" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitorCustomHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsMonitorCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsMonitorCustomHeader]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>]

---


### SyntheticsMonitorCustomHeaderOutputReference <a name="SyntheticsMonitorCustomHeaderOutputReference" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsMonitorCustomHeader
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>

---


### SyntheticsMonitorTagList <a name="SyntheticsMonitorTagList" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitorTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsMonitorTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SyntheticsMonitorTag]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>]

---


### SyntheticsMonitorTagOutputReference <a name="SyntheticsMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import synthetics_monitor

syntheticsMonitor.SyntheticsMonitorTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SyntheticsMonitorTag
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>

---



