# `syntheticsStepMonitor` Submodule <a name="`syntheticsStepMonitor` Submodule" id="@cdktf/provider-newrelic.syntheticsStepMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsStepMonitor <a name="SyntheticsStepMonitor" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor newrelic_synthetics_step_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitor;

SyntheticsStepMonitor.Builder.create(Construct scope, java.lang.String id)
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
    .steps(IResolvable|java.util.List<SyntheticsStepMonitorSteps>)
//  .accountId(java.lang.Number)
//  .browsers(java.util.List<java.lang.String>)
//  .devices(java.util.List<java.lang.String>)
//  .enableScreenshotOnFailureAndScript(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .locationPrivate(IResolvable|java.util.List<SyntheticsStepMonitorLocationPrivate>)
//  .locationsPublic(java.util.List<java.lang.String>)
//  .runtimeType(java.lang.String)
//  .runtimeTypeVersion(java.lang.String)
//  .tag(IResolvable|java.util.List<SyntheticsStepMonitorTag>)
//  .useUnsupportedLegacyRuntime(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>></code> | steps block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.browsers">browsers</a></code> | <code>java.util.List<java.lang.String></code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.devices">devices</a></code> | <code>java.util.List<java.lang.String></code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.locationPrivate">locationPrivate</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>></code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#name SyntheticsStepMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.period"></a>

- *Type:* java.lang.String

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#period SyntheticsStepMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#status SyntheticsStepMonitor#status}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.steps"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>>

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#steps SyntheticsStepMonitor#steps}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#account_id SyntheticsStepMonitor#account_id}

---

##### `browsers`<sup>Optional</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.browsers"></a>

- *Type:* java.util.List<java.lang.String>

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#browsers SyntheticsStepMonitor#browsers}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.devices"></a>

- *Type:* java.util.List<java.lang.String>

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#devices SyntheticsStepMonitor#devices}

---

##### `enableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.enableScreenshotOnFailureAndScript"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#enable_screenshot_on_failure_and_script SyntheticsStepMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationPrivate`<sup>Optional</sup> <a name="locationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.locationPrivate"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>>

location_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#location_private SyntheticsStepMonitor#location_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.locationsPublic"></a>

- *Type:* java.util.List<java.lang.String>

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#locations_public SyntheticsStepMonitor#locations_public}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.runtimeType"></a>

- *Type:* java.lang.String

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#runtime_type SyntheticsStepMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.runtimeTypeVersion"></a>

- *Type:* java.lang.String

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#runtime_type_version SyntheticsStepMonitor#runtime_type_version}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.tag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#tag SyntheticsStepMonitor#tag}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.Initializer.parameter.useUnsupportedLegacyRuntime"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#use_unsupported_legacy_runtime SyntheticsStepMonitor#use_unsupported_legacy_runtime}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate">putLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetBrowsers">resetBrowsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetEnableScreenshotOnFailureAndScript">resetEnableScreenshotOnFailureAndScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationPrivate">resetLocationPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationsPublic">resetLocationsPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeType">resetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeTypeVersion">resetRuntimeTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetUseUnsupportedLegacyRuntime">resetUseUnsupportedLegacyRuntime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocationPrivate` <a name="putLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate"></a>

```java
public void putLocationPrivate(IResolvable|java.util.List<SyntheticsStepMonitorLocationPrivate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putLocationPrivate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>>

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps"></a>

```java
public void putSteps(IResolvable|java.util.List<SyntheticsStepMonitorSteps> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putSteps.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag"></a>

```java
public void putTag(IResolvable|java.util.List<SyntheticsStepMonitorTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.putTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetBrowsers` <a name="resetBrowsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetBrowsers"></a>

```java
public void resetBrowsers()
```

##### `resetDevices` <a name="resetDevices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetDevices"></a>

```java
public void resetDevices()
```

##### `resetEnableScreenshotOnFailureAndScript` <a name="resetEnableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetEnableScreenshotOnFailureAndScript"></a>

```java
public void resetEnableScreenshotOnFailureAndScript()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetId"></a>

```java
public void resetId()
```

##### `resetLocationPrivate` <a name="resetLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationPrivate"></a>

```java
public void resetLocationPrivate()
```

##### `resetLocationsPublic` <a name="resetLocationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetLocationsPublic"></a>

```java
public void resetLocationsPublic()
```

##### `resetRuntimeType` <a name="resetRuntimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeType"></a>

```java
public void resetRuntimeType()
```

##### `resetRuntimeTypeVersion` <a name="resetRuntimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetRuntimeTypeVersion"></a>

```java
public void resetRuntimeTypeVersion()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetTag"></a>

```java
public void resetTag()
```

##### `resetUseUnsupportedLegacyRuntime` <a name="resetUseUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.resetUseUnsupportedLegacyRuntime"></a>

```java
public void resetUseUnsupportedLegacyRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsStepMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitor;

SyntheticsStepMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitor;

SyntheticsStepMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitor;

SyntheticsStepMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitor;

SyntheticsStepMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SyntheticsStepMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SyntheticsStepMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SyntheticsStepMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SyntheticsStepMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsStepMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivate">locationPrivate</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList">SyntheticsStepMonitorLocationPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInMinutes">periodInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList">SyntheticsStepMonitorStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList">SyntheticsStepMonitorTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsersInput">browsersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devicesInput">devicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScriptInput">enableScreenshotOnFailureAndScriptInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivateInput">locationPrivateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublicInput">locationsPublicInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeInput">runtimeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersionInput">runtimeTypeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.stepsInput">stepsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tagInput">tagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntimeInput">useUnsupportedLegacyRuntimeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsers">browsers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devices">devices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `locationPrivate`<sup>Required</sup> <a name="locationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivate"></a>

```java
public SyntheticsStepMonitorLocationPrivateList getLocationPrivate();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList">SyntheticsStepMonitorLocationPrivateList</a>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `periodInMinutes`<sup>Required</sup> <a name="periodInMinutes" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInMinutes"></a>

```java
public java.lang.Number getPeriodInMinutes();
```

- *Type:* java.lang.Number

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.steps"></a>

```java
public SyntheticsStepMonitorStepsList getSteps();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList">SyntheticsStepMonitorStepsList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tag"></a>

```java
public SyntheticsStepMonitorTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList">SyntheticsStepMonitorTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `browsersInput`<sup>Optional</sup> <a name="browsersInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsersInput"></a>

```java
public java.util.List<java.lang.String> getBrowsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devicesInput"></a>

```java
public java.util.List<java.lang.String> getDevicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableScreenshotOnFailureAndScriptInput`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScriptInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScriptInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableScreenshotOnFailureAndScriptInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationPrivateInput`<sup>Optional</sup> <a name="locationPrivateInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationPrivateInput"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorLocationPrivate> getLocationPrivateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>>

---

##### `locationsPublicInput`<sup>Optional</sup> <a name="locationsPublicInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublicInput"></a>

```java
public java.util.List<java.lang.String> getLocationsPublicInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `runtimeTypeInput`<sup>Optional</sup> <a name="runtimeTypeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeInput"></a>

```java
public java.lang.String getRuntimeTypeInput();
```

- *Type:* java.lang.String

---

##### `runtimeTypeVersionInput`<sup>Optional</sup> <a name="runtimeTypeVersionInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersionInput"></a>

```java
public java.lang.String getRuntimeTypeVersionInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.stepsInput"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorSteps> getStepsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tagInput"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorTag> getTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>>

---

##### `useUnsupportedLegacyRuntimeInput`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntimeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntimeInput"></a>

```java
public java.lang.Boolean|IResolvable getUseUnsupportedLegacyRuntimeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `browsers`<sup>Required</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.browsers"></a>

```java
public java.util.List<java.lang.String> getBrowsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.devices"></a>

```java
public java.util.List<java.lang.String> getDevices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableScreenshotOnFailureAndScript`<sup>Required</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.enableScreenshotOnFailureAndScript"></a>

```java
public java.lang.Boolean|IResolvable getEnableScreenshotOnFailureAndScript();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationsPublic`<sup>Required</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.locationsPublic"></a>

```java
public java.util.List<java.lang.String> getLocationsPublic();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `runtimeType`<sup>Required</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeType"></a>

```java
public java.lang.String getRuntimeType();
```

- *Type:* java.lang.String

---

##### `runtimeTypeVersion`<sup>Required</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.runtimeTypeVersion"></a>

```java
public java.lang.String getRuntimeTypeVersion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `useUnsupportedLegacyRuntime`<sup>Required</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.useUnsupportedLegacyRuntime"></a>

```java
public java.lang.Boolean|IResolvable getUseUnsupportedLegacyRuntime();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsStepMonitorConfig <a name="SyntheticsStepMonitorConfig" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorConfig;

SyntheticsStepMonitorConfig.builder()
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
    .steps(IResolvable|java.util.List<SyntheticsStepMonitorSteps>)
//  .accountId(java.lang.Number)
//  .browsers(java.util.List<java.lang.String>)
//  .devices(java.util.List<java.lang.String>)
//  .enableScreenshotOnFailureAndScript(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .locationPrivate(IResolvable|java.util.List<SyntheticsStepMonitorLocationPrivate>)
//  .locationsPublic(java.util.List<java.lang.String>)
//  .runtimeType(java.lang.String)
//  .runtimeTypeVersion(java.lang.String)
//  .tag(IResolvable|java.util.List<SyntheticsStepMonitorTag>)
//  .useUnsupportedLegacyRuntime(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.name">name</a></code> | <code>java.lang.String</code> | The title of this monitor. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.period">period</a></code> | <code>java.lang.String</code> | The interval at which this monitor should run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.status">status</a></code> | <code>java.lang.String</code> | The monitor status (ENABLED or DISABLED). |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.steps">steps</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>></code> | steps block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.browsers">browsers</a></code> | <code>java.util.List<java.lang.String></code> | The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.devices">devices</a></code> | <code>java.util.List<java.lang.String></code> | The multiple devices list on which synthetic monitors will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.enableScreenshotOnFailureAndScript">enableScreenshotOnFailureAndScript</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Capture a screenshot during job execution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationPrivate">locationPrivate</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>></code> | location_private block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationsPublic">locationsPublic</a></code> | <code>java.util.List<java.lang.String></code> | The public location(s) that the monitor will run jobs from. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeType">runtimeType</a></code> | <code>java.lang.String</code> | The runtime type that the monitor will run. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeTypeVersion">runtimeTypeVersion</a></code> | <code>java.lang.String</code> | The specific semver version of the runtime type. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.useUnsupportedLegacyRuntime">useUnsupportedLegacyRuntime</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The title of this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#name SyntheticsStepMonitor#name}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

The interval at which this monitor should run.

Valid values are EVERY_MINUTE, EVERY_5_MINUTES, EVERY_10_MINUTES, EVERY_15_MINUTES, EVERY_30_MINUTES, EVERY_HOUR, EVERY_6_HOURS, EVERY_12_HOURS, or EVERY_DAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#period SyntheticsStepMonitor#period}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The monitor status (ENABLED or DISABLED).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#status SyntheticsStepMonitor#status}

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.steps"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorSteps> getSteps();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>>

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#steps SyntheticsStepMonitor#steps}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#account_id SyntheticsStepMonitor#account_id}

---

##### `browsers`<sup>Optional</sup> <a name="browsers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.browsers"></a>

```java
public java.util.List<java.lang.String> getBrowsers();
```

- *Type:* java.util.List<java.lang.String>

The multiple browsers list on which synthetic monitors will run. Valid values are array of CHROME,and FIREFOX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#browsers SyntheticsStepMonitor#browsers}

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.devices"></a>

```java
public java.util.List<java.lang.String> getDevices();
```

- *Type:* java.util.List<java.lang.String>

The multiple devices list on which synthetic monitors will run.

Valid values are array of DESKTOP, MOBILE_LANDSCAPE, MOBILE_PORTRAIT, TABLET_LANDSCAPE and TABLET_PORTRAIT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#devices SyntheticsStepMonitor#devices}

---

##### `enableScreenshotOnFailureAndScript`<sup>Optional</sup> <a name="enableScreenshotOnFailureAndScript" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.enableScreenshotOnFailureAndScript"></a>

```java
public java.lang.Boolean|IResolvable getEnableScreenshotOnFailureAndScript();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Capture a screenshot during job execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#enable_screenshot_on_failure_and_script SyntheticsStepMonitor#enable_screenshot_on_failure_and_script}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#id SyntheticsStepMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationPrivate`<sup>Optional</sup> <a name="locationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationPrivate"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorLocationPrivate> getLocationPrivate();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>>

location_private block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#location_private SyntheticsStepMonitor#location_private}

---

##### `locationsPublic`<sup>Optional</sup> <a name="locationsPublic" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.locationsPublic"></a>

```java
public java.util.List<java.lang.String> getLocationsPublic();
```

- *Type:* java.util.List<java.lang.String>

The public location(s) that the monitor will run jobs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#locations_public SyntheticsStepMonitor#locations_public}

---

##### `runtimeType`<sup>Optional</sup> <a name="runtimeType" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeType"></a>

```java
public java.lang.String getRuntimeType();
```

- *Type:* java.lang.String

The runtime type that the monitor will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#runtime_type SyntheticsStepMonitor#runtime_type}

---

##### `runtimeTypeVersion`<sup>Optional</sup> <a name="runtimeTypeVersion" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.runtimeTypeVersion"></a>

```java
public java.lang.String getRuntimeTypeVersion();
```

- *Type:* java.lang.String

The specific semver version of the runtime type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#runtime_type_version SyntheticsStepMonitor#runtime_type_version}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.tag"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorTag> getTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#tag SyntheticsStepMonitor#tag}

---

##### `useUnsupportedLegacyRuntime`<sup>Optional</sup> <a name="useUnsupportedLegacyRuntime" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorConfig.property.useUnsupportedLegacyRuntime"></a>

```java
public java.lang.Boolean|IResolvable getUseUnsupportedLegacyRuntime();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

A boolean attribute to be set true by the customer, if they would like to use the unsupported legacy runtime of Synthetic Monitors by means of an exemption given until the October 22, 2024 Legacy Runtime EOL.

Setting this attribute to true would allow skipping validation performed by the the New Relic Terraform Provider starting v3.43.0 to disallow using the legacy runtime with new monitors. This would, hence, allow creation of monitors in the legacy runtime until the October 22, 2024 Legacy Runtime EOL, if exempt by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#use_unsupported_legacy_runtime SyntheticsStepMonitor#use_unsupported_legacy_runtime}

---

### SyntheticsStepMonitorLocationPrivate <a name="SyntheticsStepMonitorLocationPrivate" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorLocationPrivate;

SyntheticsStepMonitorLocationPrivate.builder()
    .guid(java.lang.String)
//  .vsePassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.guid">guid</a></code> | <code>java.lang.String</code> | The unique identifier for the Synthetics private location in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.vsePassword">vsePassword</a></code> | <code>java.lang.String</code> | The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location). |

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

The unique identifier for the Synthetics private location in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#guid SyntheticsStepMonitor#guid}

---

##### `vsePassword`<sup>Optional</sup> <a name="vsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate.property.vsePassword"></a>

```java
public java.lang.String getVsePassword();
```

- *Type:* java.lang.String

The location's Verified Script Execution password (Only necessary if Verified Script Execution is enabled for the location).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#vse_password SyntheticsStepMonitor#vse_password}

---

### SyntheticsStepMonitorSteps <a name="SyntheticsStepMonitorSteps" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorSteps;

SyntheticsStepMonitorSteps.builder()
    .ordinal(java.lang.Number)
    .type(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.ordinal">ordinal</a></code> | <code>java.lang.Number</code> | The position of the step within the script ranging from 0-100. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.type">type</a></code> | <code>java.lang.String</code> | The type of step to be added to the script. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The metadata values related to the check the step performs. |

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.ordinal"></a>

```java
public java.lang.Number getOrdinal();
```

- *Type:* java.lang.Number

The position of the step within the script ranging from 0-100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#ordinal SyntheticsStepMonitor#ordinal}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of step to be added to the script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#type SyntheticsStepMonitor#type}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The metadata values related to the check the step performs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}

---

### SyntheticsStepMonitorTag <a name="SyntheticsStepMonitorTag" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorTag;

SyntheticsStepMonitorTag.builder()
    .key(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.key">key</a></code> | <code>java.lang.String</code> | Name of the tag key. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Values associated with the tag key. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#key SyntheticsStepMonitor#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Values associated with the tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.6/docs/resources/synthetics_step_monitor#values SyntheticsStepMonitor#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsStepMonitorLocationPrivateList <a name="SyntheticsStepMonitorLocationPrivateList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorLocationPrivateList;

new SyntheticsStepMonitorLocationPrivateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get"></a>

```java
public SyntheticsStepMonitorLocationPrivateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorLocationPrivate> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>>

---


### SyntheticsStepMonitorLocationPrivateOutputReference <a name="SyntheticsStepMonitorLocationPrivateOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorLocationPrivateOutputReference;

new SyntheticsStepMonitorLocationPrivateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resetVsePassword">resetVsePassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVsePassword` <a name="resetVsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.resetVsePassword"></a>

```java
public void resetVsePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guidInput">guidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePasswordInput">vsePasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guid">guid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePassword">vsePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guidInput`<sup>Optional</sup> <a name="guidInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guidInput"></a>

```java
public java.lang.String getGuidInput();
```

- *Type:* java.lang.String

---

##### `vsePasswordInput`<sup>Optional</sup> <a name="vsePasswordInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePasswordInput"></a>

```java
public java.lang.String getVsePasswordInput();
```

- *Type:* java.lang.String

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.guid"></a>

```java
public java.lang.String getGuid();
```

- *Type:* java.lang.String

---

##### `vsePassword`<sup>Required</sup> <a name="vsePassword" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.vsePassword"></a>

```java
public java.lang.String getVsePassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivateOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsStepMonitorLocationPrivate getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorLocationPrivate">SyntheticsStepMonitorLocationPrivate</a>

---


### SyntheticsStepMonitorStepsList <a name="SyntheticsStepMonitorStepsList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorStepsList;

new SyntheticsStepMonitorStepsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get"></a>

```java
public SyntheticsStepMonitorStepsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorSteps> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>>

---


### SyntheticsStepMonitorStepsOutputReference <a name="SyntheticsStepMonitorStepsOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorStepsOutputReference;

new SyntheticsStepMonitorStepsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinalInput">ordinalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinal">ordinal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ordinalInput`<sup>Optional</sup> <a name="ordinalInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinalInput"></a>

```java
public java.lang.Number getOrdinalInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ordinal`<sup>Required</sup> <a name="ordinal" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.ordinal"></a>

```java
public java.lang.Number getOrdinal();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorStepsOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsStepMonitorSteps getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorSteps">SyntheticsStepMonitorSteps</a>

---


### SyntheticsStepMonitorTagList <a name="SyntheticsStepMonitorTagList" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorTagList;

new SyntheticsStepMonitorTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get"></a>

```java
public SyntheticsStepMonitorTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsStepMonitorTag> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>>

---


### SyntheticsStepMonitorTagOutputReference <a name="SyntheticsStepMonitorTagOutputReference" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.synthetics_step_monitor.SyntheticsStepMonitorTagOutputReference;

new SyntheticsStepMonitorTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTagOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsStepMonitorTag getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-newrelic.syntheticsStepMonitor.SyntheticsStepMonitorTag">SyntheticsStepMonitorTag</a>

---



