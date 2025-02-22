# `syntheticsMonitor` Submodule <a name="`syntheticsMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsMonitor <a name="SyntheticsMonitor" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor newrelic_synthetics_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitor;

SyntheticsMonitor.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .status(java.lang.String)
    .type(java.lang.String)
//  .accountId(java.lang.Number)
//  .browsers(java.util.List<java.lang.String>)
//  .bypassHeadRequest(java.lang.Boolean)
//  .bypassHeadRequest(IResolvable)
//  .customHeader(IResolvable)
//  .customHeader(java.util.List<SyntheticsMonitorCustomHeader>)
//  .deviceOrientation(java.lang.String)
//  .devices(java.util.List<java.lang.String>)
//  .deviceType(java.lang.String)
//  .enableScreenshotOnFailureAndScript(java.lang.Boolean)
//  .enableScreenshotOnFailureAndScript(IResolvable)
//  .id(java.lang.String)
//  .locationsPrivate(java.util.List<java.lang.String>)
//  .locationsPublic(java.util.List<java.lang.String>)
//  .period(java.lang.String)
//  .runtimeType(java.lang.String)
//  .runtimeTypeVersion(java.lang.String)
//  .scriptLanguage(java.lang.String)
//  .tag(IResolvable)
//  .tag(java.util.List<SyntheticsMonitorTag>)
//  .treatRedirectAsFailure(java.lang.Boolean)
//  .treatRedirectAsFailure(IResolvable)
//  .uri(java.lang.String)
//  .useUnsupportedLegacyRuntime(java.lang.Boolean)
//  .useUnsupportedLegacyRuntime(IResolvable)
//  .validationString(java.lang.String)
//  .verifySsl(java.lang.Boolean)
//  .verifySsl(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The monitor type. Valid values are SIMPLE AND BROWSER. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.browsers">browsers</a></code> | <code>java.util.List<java.lang.String></code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.bypassHeadRequest">bypassHeadRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Bypass HEAD request. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.customHeader">customHeader</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>></code> | custom_header block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.deviceOrientation">deviceOrientation</a></code> | <code>java.lang.String</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.devices">devices</a></code> | <code>java.util.List<java.lang.String></code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.deviceType">deviceType</a></code> | <code>java.lang.String</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | The specific version of the runtime type selected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scriptLanguage">scriptLanguage</a></code> | <code>java.lang.String</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.treatRedirectAsFailure">treatRedirectAsFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Fail the monitor check if redirected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.uri">uri</a></code> | <code>java.lang.String</code> | The URI for the monitor to hit. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.validationString">validationString</a></code> | <code>java.lang.String</code> | The string to validate against in the response. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.verifySsl">verifySsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Verify SSL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#status SyntheticsMonitor#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The monitor type. Valid values are SIMPLE AND BROWSER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#type SyntheticsMonitor#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#account_id SyntheticsMonitor#account_id}

---

##### `browsers`<sup>Optional</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.browsers"></a>

- *Type:* java.util.List<java.lang.String>

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#browsers SyntheticsMonitor#browsers}

---

##### `bypassHeadRequest`<sup>Optional</sup> <a name="bypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.bypassHeadRequest"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Bypass HEAD request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.customHeader"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>>

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#custom_header SyntheticsMonitor#custom_header}

---

##### `deviceOrientation`<sup>Optional</sup> <a name="deviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.deviceOrientation"></a>

- *Type:* java.lang.String

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#device_orientation SyntheticsMonitor#device_orientation}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.devices"></a>

- *Type:* java.util.List<java.lang.String>

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#devices SyntheticsMonitor#devices}

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.deviceType"></a>

- *Type:* java.lang.String

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#device_type SyntheticsMonitor#device_type}

---

##### `enableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.enableScreenshotOnFailureAndScript"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#enable_screenshot_on_failure_and_script SyntheticsMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationsPrivate`<sup>Optional</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.locationsPrivate"></a>

- *Type:* java.util.List<java.lang.String>

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#locations_private SyntheticsMonitor#locations_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.locationsPublic"></a>

- *Type:* java.util.List<java.lang.String>

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#locations_public SyntheticsMonitor#locations_public}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.period"></a>

- *Type:* java.lang.String

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#period SyntheticsMonitor#period}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.runtimeType"></a>

- *Type:* java.lang.String

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#runtime_type SyntheticsMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.runtimeTypeVersion"></a>

- *Type:* java.lang.String

The specific version of the runtime type selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#runtime_type_version SyntheticsMonitor#runtime_type_version}

---

##### `scriptLanguage`<sup>Optional</sup> <a name="scriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.scriptLanguage"></a>

- *Type:* java.lang.String

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#script_language SyntheticsMonitor#script_language}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.tag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#tag SyntheticsMonitor#tag}

---

##### `treatRedirectAsFailure`<sup>Optional</sup> <a name="treatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.treatRedirectAsFailure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Fail the monitor check if redirected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.uri"></a>

- *Type:* java.lang.String

The URI for the monitor to hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#uri SyntheticsMonitor#uri}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.useUnsupportedLegacyRuntime"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#use_unsupported_legacy_runtime SyntheticsMonitor#use_unsupported_legacy_runtime}

---

##### `validationString`<sup>Optional</sup> <a name="validationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.validationString"></a>

- *Type:* java.lang.String

The string to validate against in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}

---

##### `verifySsl`<sup>Optional</sup> <a name="verifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.Initializer.parameter.verifySsl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Verify SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader">putCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBrowsers">resetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBypassHeadRequest">resetBypassHeadRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetCustomHeader">resetCustomHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceOrientation">resetDeviceOrientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetEnableScreenshotOnFailureAndScript">resetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPrivate">resetLocationsPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPublic">resetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeType">resetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeTypeVersion">resetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetScriptLanguage">resetScriptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTreatRedirectAsFailure">resetTreatRedirectAsFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUri">resetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUseUnsupportedLegacyRuntime">resetUseUnsupportedLegacyRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetValidationString">resetValidationString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetVerifySsl">resetVerifySsl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomHeader` <a name="putCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader"></a>

```java
public void putCustomHeader(IResolvable OR java.util.List<SyntheticsMonitorCustomHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putCustomHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag"></a>

```java
public void putTag(IResolvable OR java.util.List<SyntheticsMonitorTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.putTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetBrowsers` <a name="resetBrowsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBrowsers"></a>

```java
public void resetBrowsers()
```

##### `resetBypassHeadRequest` <a name="resetBypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetBypassHeadRequest"></a>

```java
public void resetBypassHeadRequest()
```

##### `resetCustomHeader` <a name="resetCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetCustomHeader"></a>

```java
public void resetCustomHeader()
```

##### `resetDeviceOrientation` <a name="resetDeviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceOrientation"></a>

```java
public void resetDeviceOrientation()
```

##### `resetDevices` <a name="resetDevices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDevices"></a>

```java
public void resetDevices()
```

##### `resetDeviceType` <a name="resetDeviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetDeviceType"></a>

```java
public void resetDeviceType()
```

##### `resetEnableScreenshotOnFailureAndScript` <a name="resetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```java
public void resetEnableScreenshotOnFailureAndScript()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetId"></a>

```java
public void resetId()
```

##### `resetLocationsPrivate` <a name="resetLocationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPrivate"></a>

```java
public void resetLocationsPrivate()
```

##### `resetLocationsPublic` <a name="resetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetLocationsPublic"></a>

```java
public void resetLocationsPublic()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetRuntimeType` <a name="resetRuntimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeType"></a>

```java
public void resetRuntimeType()
```

##### `resetRuntimeTypeVersion` <a name="resetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetRuntimeTypeVersion"></a>

```java
public void resetRuntimeTypeVersion()
```

##### `resetScriptLanguage` <a name="resetScriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetScriptLanguage"></a>

```java
public void resetScriptLanguage()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTag"></a>

```java
public void resetTag()
```

##### `resetTreatRedirectAsFailure` <a name="resetTreatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetTreatRedirectAsFailure"></a>

```java
public void resetTreatRedirectAsFailure()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUri"></a>

```java
public void resetUri()
```

##### `resetUseUnsupportedLegacyRuntime` <a name="resetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetUseUnsupportedLegacyRuntime"></a>

```java
public void resetUseUnsupportedLegacyRuntime()
```

##### `resetValidationString` <a name="resetValidationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetValidationString"></a>

```java
public void resetValidationString()
```

##### `resetVerifySsl` <a name="resetVerifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.resetVerifySsl"></a>

```java
public void resetVerifySsl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitor;

SyntheticsMonitor.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitor;

SyntheticsMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitor;

SyntheticsMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitor;

SyntheticsMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SyntheticsMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SyntheticsMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeader">customHeader</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList">SyntheticsMonitorCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInMinutes">periodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList">SyntheticsMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsersInput">browsersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequestInput">bypassHeadRequestInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeaderInput">customHeaderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientationInput">deviceOrientationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devicesInput">devicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceTypeInput">deviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScriptInput">enableScreenshotOnFailureAndScriptInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivateInput">locationsPrivateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublicInput">locationsPublicInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeInput">runtimeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersionInput">runtimeTypeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguageInput">scriptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tagInput">tagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailureInput">treatRedirectAsFailureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntimeInput">useUnsupportedLegacyRuntimeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationStringInput">validationStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySslInput">verifySslInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsers">browsers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequest">bypassHeadRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientation">deviceOrientation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devices">devices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceType">deviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguage">scriptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailure">treatRedirectAsFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationString">validationString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySsl">verifySsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customHeader`<sup>Required</sup> <a name="customHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeader"></a>

```java
public SyntheticsMonitorCustomHeaderList getCustomHeader();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList">SyntheticsMonitorCustomHeaderList</a>

---

##### `periodInMinutes`<sup>Required</sup> <a name="periodInMinutes" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInMinutes"></a>

```java
public java.lang.Number getPeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tag"></a>

```java
public SyntheticsMonitorTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList">SyntheticsMonitorTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `browsersInput`<sup>Optional</sup> <a name="browsersInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsersInput"></a>

```java
public java.util.List<java.lang.String> getBrowsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bypassHeadRequestInput`<sup>Optional</sup> <a name="bypassHeadRequestInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequestInput"></a>

```java
public java.lang.Object getBypassHeadRequestInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customHeaderInput`<sup>Optional</sup> <a name="customHeaderInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.customHeaderInput"></a>

```java
public java.lang.Object getCustomHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>>

---

##### `deviceOrientationInput`<sup>Optional</sup> <a name="deviceOrientationInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientationInput"></a>

```java
public java.lang.String getDeviceOrientationInput();
```

- *Type:* java.lang.String

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devicesInput"></a>

```java
public java.util.List<java.lang.String> getDevicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceTypeInput"></a>

```java
public java.lang.String getDeviceTypeInput();
```

- *Type:* java.lang.String

---

##### `enableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```java
public java.lang.Object getEnableScreenshotOnFailureAndScriptInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationsPrivateInput`<sup>Optional</sup> <a name="locationsPrivateInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivateInput"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationsPublicInput`<sup>Optional</sup> <a name="locationsPublicInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublicInput"></a>

```java
public java.util.List<java.lang.String> getLocationsPublicInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `runtimeTypeInput`<sup>Optional</sup> <a name="runtimeTypeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeInput"></a>

```java
public java.lang.String getRuntimeTypeInput();
```

- *Type:* java.lang.String

---

##### `runtimeTypeVersionInput`<sup>Optional</sup> <a name="runtimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersionInput"></a>

```java
public java.lang.String getRuntimeTypeVersionInput();
```

- *Type:* java.lang.String

---

##### `scriptLanguageInput`<sup>Optional</sup> <a name="scriptLanguageInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguageInput"></a>

```java
public java.lang.String getScriptLanguageInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tagInput"></a>

```java
public java.lang.Object getTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>>

---

##### `treatRedirectAsFailureInput`<sup>Optional</sup> <a name="treatRedirectAsFailureInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailureInput"></a>

```java
public java.lang.Object getTreatRedirectAsFailureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `useUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```java
public java.lang.Object getUseUnsupportedLegacyRuntimeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validationStringInput`<sup>Optional</sup> <a name="validationStringInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationStringInput"></a>

```java
public java.lang.String getValidationStringInput();
```

- *Type:* java.lang.String

---

##### `verifySslInput`<sup>Optional</sup> <a name="verifySslInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySslInput"></a>

```java
public java.lang.Object getVerifySslInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `browsers`<sup>Required</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.browsers"></a>

```java
public java.util.List<java.lang.String> getBrowsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bypassHeadRequest`<sup>Required</sup> <a name="bypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.bypassHeadRequest"></a>

```java
public java.lang.Object getBypassHeadRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceOrientation`<sup>Required</sup> <a name="deviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceOrientation"></a>

```java
public java.lang.String getDeviceOrientation();
```

- *Type:* java.lang.String

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.devices"></a>

```java
public java.util.List<java.lang.String> getDevices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.deviceType"></a>

```java
public java.lang.String getDeviceType();
```

- *Type:* java.lang.String

---

##### `enableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.enableScreenshotOnFailureAndScript"></a>

```java
public java.lang.Object getEnableScreenshotOnFailureAndScript();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationsPrivate`<sup>Required</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPrivate"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationsPublic`<sup>Required</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.locationsPublic"></a>

```java
public java.util.List<java.lang.String> getLocationsPublic();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `runtimeType`<sup>Required</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeType"></a>

```java
public java.lang.String getRuntimeType();
```

- *Type:* java.lang.String

---

##### `runtimeTypeVersion`<sup>Required</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.runtimeTypeVersion"></a>

```java
public java.lang.String getRuntimeTypeVersion();
```

- *Type:* java.lang.String

---

##### `scriptLanguage`<sup>Required</sup> <a name="scriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.scriptLanguage"></a>

```java
public java.lang.String getScriptLanguage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `treatRedirectAsFailure`<sup>Required</sup> <a name="treatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.treatRedirectAsFailure"></a>

```java
public java.lang.Object getTreatRedirectAsFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `useUnsupportedLegacyRuntime`<sup>Required</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.useUnsupportedLegacyRuntime"></a>

```java
public java.lang.Object getUseUnsupportedLegacyRuntime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `validationString`<sup>Required</sup> <a name="validationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.validationString"></a>

```java
public java.lang.String getValidationString();
```

- *Type:* java.lang.String

---

##### `verifySsl`<sup>Required</sup> <a name="verifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.verifySsl"></a>

```java
public java.lang.Object getVerifySsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsMonitorConfig <a name="SyntheticsMonitorConfig" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitorConfig;

SyntheticsMonitorConfig.builder()
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
    .name(java.lang.String)
    .status(java.lang.String)
    .type(java.lang.String)
//  .accountId(java.lang.Number)
//  .browsers(java.util.List<java.lang.String>)
//  .bypassHeadRequest(java.lang.Boolean)
//  .bypassHeadRequest(IResolvable)
//  .customHeader(IResolvable)
//  .customHeader(java.util.List<SyntheticsMonitorCustomHeader>)
//  .deviceOrientation(java.lang.String)
//  .devices(java.util.List<java.lang.String>)
//  .deviceType(java.lang.String)
//  .enableScreenshotOnFailureAndScript(java.lang.Boolean)
//  .enableScreenshotOnFailureAndScript(IResolvable)
//  .id(java.lang.String)
//  .locationsPrivate(java.util.List<java.lang.String>)
//  .locationsPublic(java.util.List<java.lang.String>)
//  .period(java.lang.String)
//  .runtimeType(java.lang.String)
//  .runtimeTypeVersion(java.lang.String)
//  .scriptLanguage(java.lang.String)
//  .tag(IResolvable)
//  .tag(java.util.List<SyntheticsMonitorTag>)
//  .treatRedirectAsFailure(java.lang.Boolean)
//  .treatRedirectAsFailure(IResolvable)
//  .uri(java.lang.String)
//  .useUnsupportedLegacyRuntime(java.lang.Boolean)
//  .useUnsupportedLegacyRuntime(IResolvable)
//  .validationString(java.lang.String)
//  .verifySsl(java.lang.Boolean)
//  .verifySsl(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.name">name</a></code> | <code>java.lang.String</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.status">status</a></code> | <code>java.lang.String</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.type">type</a></code> | <code>java.lang.String</code> | The monitor type. Valid values are SIMPLE AND BROWSER. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.browsers">browsers</a></code> | <code>java.util.List<java.lang.String></code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.bypassHeadRequest">bypassHeadRequest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Bypass HEAD request. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.customHeader">customHeader</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>></code> | custom_header block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceOrientation">deviceOrientation</a></code> | <code>java.lang.String</code> | The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.devices">devices</a></code> | <code>java.util.List<java.lang.String></code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceType">deviceType</a></code> | <code>java.lang.String</code> | The device type that a user can select. Valid values are MOBILE, TABLET, or NONE. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPrivate">locationsPrivate</a></code> | <code>java.util.List<java.lang.String></code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | The locations in which this monitor should be run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.period">period</a></code> | <code>java.lang.String</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | The specific version of the runtime type selected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.scriptLanguage">scriptLanguage</a></code> | <code>java.lang.String</code> | The programing language that should execute the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.treatRedirectAsFailure">treatRedirectAsFailure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Fail the monitor check if redirected. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI for the monitor to hit. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.validationString">validationString</a></code> | <code>java.lang.String</code> | The string to validate against in the response. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.verifySsl">verifySsl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Verify SSL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#status SyntheticsMonitor#status}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The monitor type. Valid values are SIMPLE AND BROWSER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#type SyntheticsMonitor#type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#account_id SyntheticsMonitor#account_id}

---

##### `browsers`<sup>Optional</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.browsers"></a>

```java
public java.util.List<java.lang.String> getBrowsers();
```

- *Type:* java.util.List<java.lang.String>

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#browsers SyntheticsMonitor#browsers}

---

##### `bypassHeadRequest`<sup>Optional</sup> <a name="bypassHeadRequest" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.bypassHeadRequest"></a>

```java
public java.lang.Object getBypassHeadRequest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Bypass HEAD request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#bypass_head_request SyntheticsMonitor#bypass_head_request}

---

##### `customHeader`<sup>Optional</sup> <a name="customHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.customHeader"></a>

```java
public java.lang.Object getCustomHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>>

custom_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#custom_header SyntheticsMonitor#custom_header}

---

##### `deviceOrientation`<sup>Optional</sup> <a name="deviceOrientation" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceOrientation"></a>

```java
public java.lang.String getDeviceOrientation();
```

- *Type:* java.lang.String

The device orientation the user would like to represent. Valid values are LANDSCAPE, PORTRAIT, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#device_orientation SyntheticsMonitor#device_orientation}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.devices"></a>

```java
public java.util.List<java.lang.String> getDevices();
```

- *Type:* java.util.List<java.lang.String>

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#devices SyntheticsMonitor#devices}

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.deviceType"></a>

```java
public java.lang.String getDeviceType();
```

- *Type:* java.lang.String

The device type that a user can select. Valid values are MOBILE, TABLET, or NONE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#device_type SyntheticsMonitor#device_type}

---

##### `enableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```java
public java.lang.Object getEnableScreenshotOnFailureAndScript();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#enable_screenshot_on_failure_and_script SyntheticsMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#id SyntheticsMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationsPrivate`<sup>Optional</sup> <a name="locationsPrivate" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPrivate"></a>

```java
public java.util.List<java.lang.String> getLocationsPrivate();
```

- *Type:* java.util.List<java.lang.String>

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#locations_private SyntheticsMonitor#locations_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.locationsPublic"></a>

```java
public java.util.List<java.lang.String> getLocationsPublic();
```

- *Type:* java.util.List<java.lang.String>

The locations in which this monitor should be run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#locations_public SyntheticsMonitor#locations_public}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#period SyntheticsMonitor#period}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeType"></a>

```java
public java.lang.String getRuntimeType();
```

- *Type:* java.lang.String

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#runtime_type SyntheticsMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.runtimeTypeVersion"></a>

```java
public java.lang.String getRuntimeTypeVersion();
```

- *Type:* java.lang.String

The specific version of the runtime type selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#runtime_type_version SyntheticsMonitor#runtime_type_version}

---

##### `scriptLanguage`<sup>Optional</sup> <a name="scriptLanguage" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.scriptLanguage"></a>

```java
public java.lang.String getScriptLanguage();
```

- *Type:* java.lang.String

The programing language that should execute the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#script_language SyntheticsMonitor#script_language}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.tag"></a>

```java
public java.lang.Object getTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#tag SyntheticsMonitor#tag}

---

##### `treatRedirectAsFailure`<sup>Optional</sup> <a name="treatRedirectAsFailure" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.treatRedirectAsFailure"></a>

```java
public java.lang.Object getTreatRedirectAsFailure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Fail the monitor check if redirected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#treat_redirect_as_failure SyntheticsMonitor#treat_redirect_as_failure}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI for the monitor to hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#uri SyntheticsMonitor#uri}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```java
public java.lang.Object getUseUnsupportedLegacyRuntime();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#use_unsupported_legacy_runtime SyntheticsMonitor#use_unsupported_legacy_runtime}

---

##### `validationString`<sup>Optional</sup> <a name="validationString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.validationString"></a>

```java
public java.lang.String getValidationString();
```

- *Type:* java.lang.String

The string to validate against in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#validation_string SyntheticsMonitor#validation_string}

---

##### `verifySsl`<sup>Optional</sup> <a name="verifySsl" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorConfig.property.verifySsl"></a>

```java
public java.lang.Object getVerifySsl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Verify SSL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#verify_ssl SyntheticsMonitor#verify_ssl}

---

### SyntheticsMonitorCustomHeader <a name="SyntheticsMonitorCustomHeader" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitorCustomHeader;

SyntheticsMonitorCustomHeader.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.name">name</a></code> | <code>java.lang.String</code> | Header name. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.value">value</a></code> | <code>java.lang.String</code> | Header value. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#name SyntheticsMonitor#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#value SyntheticsMonitor#value}

---

### SyntheticsMonitorTag <a name="SyntheticsMonitorTag" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitorTag;

SyntheticsMonitorTag.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.key">key</a></code> | <code>java.lang.String</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#key SyntheticsMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.57.0/docs/resources/synthetics_monitor#values SyntheticsMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsMonitorCustomHeaderList <a name="SyntheticsMonitorCustomHeaderList" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitorCustomHeaderList;

new SyntheticsMonitorCustomHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get"></a>

```java
public SyntheticsMonitorCustomHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>>

---


### SyntheticsMonitorCustomHeaderOutputReference <a name="SyntheticsMonitorCustomHeaderOutputReference" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitorCustomHeaderOutputReference;

new SyntheticsMonitorCustomHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorCustomHeader">SyntheticsMonitorCustomHeader</a>

---


### SyntheticsMonitorTagList <a name="SyntheticsMonitorTagList" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitorTagList;

new SyntheticsMonitorTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get"></a>

```java
public SyntheticsMonitorTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>>

---


### SyntheticsMonitorTagOutputReference <a name="SyntheticsMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_monitor.SyntheticsMonitorTagOutputReference;

new SyntheticsMonitorTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-newrelic.syntheticsMonitor.SyntheticsMonitorTag">SyntheticsMonitorTag</a>

---



