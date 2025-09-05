# `applicationSettings` Submodule <a name="`applicationSettings` Submodule" id="@cdktf/provider-newrelic.applicationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationSettings <a name="ApplicationSettings" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings newrelic_application_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_apdex_threshold: typing.Union[int, float] = None,
  enable_real_user_monitoring: typing.Union[bool, IResolvable] = None,
  enable_slow_sql: typing.Union[bool, IResolvable] = None,
  enable_thread_profiler: typing.Union[bool, IResolvable] = None,
  end_user_apdex_threshold: typing.Union[int, float] = None,
  error_collector: typing.Union[IResolvable, typing.List[ApplicationSettingsErrorCollector]] = None,
  guid: str = None,
  id: str = None,
  name: str = None,
  tracer_type: str = None,
  transaction_tracer: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracer]] = None,
  use_server_side_config: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.appApdexThreshold">app_apdex_threshold</a></code> | <code>typing.Union[int, float]</code> | The response time threshold value for Apdex score calculation. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableRealUserMonitoring">enable_real_user_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableSlowSql">enable_slow_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Samples and reports the slowest database queries in your traces. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableThreadProfiler">enable_thread_profiler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable the thread profiler. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.endUserApdexThreshold">end_user_apdex_threshold</a></code> | <code>typing.Union[int, float]</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.errorCollector">error_collector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]</code> | error_collector block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.guid">guid</a></code> | <code>str</code> | The GUID of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.tracerType">tracer_type</a></code> | <code>str</code> | The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.transactionTracer">transaction_tracer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]</code> | transaction_tracer block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.useServerSideConfig">use_server_side_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable server side monitoring. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_apdex_threshold`<sup>Optional</sup> <a name="app_apdex_threshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.appApdexThreshold"></a>

- *Type:* typing.Union[int, float]

The response time threshold value for Apdex score calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}

---

##### `enable_real_user_monitoring`<sup>Optional</sup> <a name="enable_real_user_monitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableRealUserMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}

---

##### `enable_slow_sql`<sup>Optional</sup> <a name="enable_slow_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableSlowSql"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Samples and reports the slowest database queries in your traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#enable_slow_sql ApplicationSettings#enable_slow_sql}

---

##### `enable_thread_profiler`<sup>Optional</sup> <a name="enable_thread_profiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.enableThreadProfiler"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable the thread profiler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#enable_thread_profiler ApplicationSettings#enable_thread_profiler}

---

##### `end_user_apdex_threshold`<sup>Optional</sup> <a name="end_user_apdex_threshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.endUserApdexThreshold"></a>

- *Type:* typing.Union[int, float]

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}

---

##### `error_collector`<sup>Optional</sup> <a name="error_collector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.errorCollector"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]

error_collector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#error_collector ApplicationSettings#error_collector}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.guid"></a>

- *Type:* str

The GUID of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#guid ApplicationSettings#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.name"></a>

- *Type:* str

The name of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#name ApplicationSettings#name}

---

##### `tracer_type`<sup>Optional</sup> <a name="tracer_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.tracerType"></a>

- *Type:* str

The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#tracer_type ApplicationSettings#tracer_type}

---

##### `transaction_tracer`<sup>Optional</sup> <a name="transaction_tracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.transactionTracer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]

transaction_tracer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#transaction_tracer ApplicationSettings#transaction_tracer}

---

##### `use_server_side_config`<sup>Optional</sup> <a name="use_server_side_config" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.Initializer.parameter.useServerSideConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable server side monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#use_server_side_config ApplicationSettings#use_server_side_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector">put_error_collector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer">put_transaction_tracer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetAppApdexThreshold">reset_app_apdex_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableRealUserMonitoring">reset_enable_real_user_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableSlowSql">reset_enable_slow_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableThreadProfiler">reset_enable_thread_profiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEndUserApdexThreshold">reset_end_user_apdex_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetErrorCollector">reset_error_collector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetGuid">reset_guid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTracerType">reset_tracer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTransactionTracer">reset_transaction_tracer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetUseServerSideConfig">reset_use_server_side_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_error_collector` <a name="put_error_collector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector"></a>

```python
def put_error_collector(
  value: typing.Union[IResolvable, typing.List[ApplicationSettingsErrorCollector]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putErrorCollector.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]

---

##### `put_transaction_tracer` <a name="put_transaction_tracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer"></a>

```python
def put_transaction_tracer(
  value: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.putTransactionTracer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]

---

##### `reset_app_apdex_threshold` <a name="reset_app_apdex_threshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetAppApdexThreshold"></a>

```python
def reset_app_apdex_threshold() -> None
```

##### `reset_enable_real_user_monitoring` <a name="reset_enable_real_user_monitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableRealUserMonitoring"></a>

```python
def reset_enable_real_user_monitoring() -> None
```

##### `reset_enable_slow_sql` <a name="reset_enable_slow_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableSlowSql"></a>

```python
def reset_enable_slow_sql() -> None
```

##### `reset_enable_thread_profiler` <a name="reset_enable_thread_profiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEnableThreadProfiler"></a>

```python
def reset_enable_thread_profiler() -> None
```

##### `reset_end_user_apdex_threshold` <a name="reset_end_user_apdex_threshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetEndUserApdexThreshold"></a>

```python
def reset_end_user_apdex_threshold() -> None
```

##### `reset_error_collector` <a name="reset_error_collector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetErrorCollector"></a>

```python
def reset_error_collector() -> None
```

##### `reset_guid` <a name="reset_guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetGuid"></a>

```python
def reset_guid() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tracer_type` <a name="reset_tracer_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTracerType"></a>

```python
def reset_tracer_type() -> None
```

##### `reset_transaction_tracer` <a name="reset_transaction_tracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetTransactionTracer"></a>

```python
def reset_transaction_tracer() -> None
```

##### `reset_use_server_side_config` <a name="reset_use_server_side_config" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.resetUseServerSideConfig"></a>

```python
def reset_use_server_side_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollector">error_collector</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList">ApplicationSettingsErrorCollectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.isImported">is_imported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracer">transaction_tracer</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList">ApplicationSettingsTransactionTracerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThresholdInput">app_apdex_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoringInput">enable_real_user_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSqlInput">enable_slow_sql_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfilerInput">enable_thread_profiler_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThresholdInput">end_user_apdex_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollectorInput">error_collector_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guidInput">guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerTypeInput">tracer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracerInput">transaction_tracer_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfigInput">use_server_side_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThreshold">app_apdex_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoring">enable_real_user_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSql">enable_slow_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfiler">enable_thread_profiler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThreshold">end_user_apdex_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerType">tracer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfig">use_server_side_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `error_collector`<sup>Required</sup> <a name="error_collector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollector"></a>

```python
error_collector: ApplicationSettingsErrorCollectorList
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList">ApplicationSettingsErrorCollectorList</a>

---

##### `is_imported`<sup>Required</sup> <a name="is_imported" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.isImported"></a>

```python
is_imported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `transaction_tracer`<sup>Required</sup> <a name="transaction_tracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracer"></a>

```python
transaction_tracer: ApplicationSettingsTransactionTracerList
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList">ApplicationSettingsTransactionTracerList</a>

---

##### `app_apdex_threshold_input`<sup>Optional</sup> <a name="app_apdex_threshold_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThresholdInput"></a>

```python
app_apdex_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_real_user_monitoring_input`<sup>Optional</sup> <a name="enable_real_user_monitoring_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoringInput"></a>

```python
enable_real_user_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_slow_sql_input`<sup>Optional</sup> <a name="enable_slow_sql_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSqlInput"></a>

```python
enable_slow_sql_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_thread_profiler_input`<sup>Optional</sup> <a name="enable_thread_profiler_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfilerInput"></a>

```python
enable_thread_profiler_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `end_user_apdex_threshold_input`<sup>Optional</sup> <a name="end_user_apdex_threshold_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThresholdInput"></a>

```python
end_user_apdex_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_collector_input`<sup>Optional</sup> <a name="error_collector_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.errorCollectorInput"></a>

```python
error_collector_input: typing.Union[IResolvable, typing.List[ApplicationSettingsErrorCollector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]

---

##### `guid_input`<sup>Optional</sup> <a name="guid_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guidInput"></a>

```python
guid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tracer_type_input`<sup>Optional</sup> <a name="tracer_type_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerTypeInput"></a>

```python
tracer_type_input: str
```

- *Type:* str

---

##### `transaction_tracer_input`<sup>Optional</sup> <a name="transaction_tracer_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.transactionTracerInput"></a>

```python
transaction_tracer_input: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]

---

##### `use_server_side_config_input`<sup>Optional</sup> <a name="use_server_side_config_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfigInput"></a>

```python
use_server_side_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_apdex_threshold`<sup>Required</sup> <a name="app_apdex_threshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.appApdexThreshold"></a>

```python
app_apdex_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_real_user_monitoring`<sup>Required</sup> <a name="enable_real_user_monitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableRealUserMonitoring"></a>

```python
enable_real_user_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_slow_sql`<sup>Required</sup> <a name="enable_slow_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableSlowSql"></a>

```python
enable_slow_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_thread_profiler`<sup>Required</sup> <a name="enable_thread_profiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.enableThreadProfiler"></a>

```python
enable_thread_profiler: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `end_user_apdex_threshold`<sup>Required</sup> <a name="end_user_apdex_threshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.endUserApdexThreshold"></a>

```python
end_user_apdex_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tracer_type`<sup>Required</sup> <a name="tracer_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tracerType"></a>

```python
tracer_type: str
```

- *Type:* str

---

##### `use_server_side_config`<sup>Required</sup> <a name="use_server_side_config" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.useServerSideConfig"></a>

```python
use_server_side_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationSettingsConfig <a name="ApplicationSettingsConfig" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_apdex_threshold: typing.Union[int, float] = None,
  enable_real_user_monitoring: typing.Union[bool, IResolvable] = None,
  enable_slow_sql: typing.Union[bool, IResolvable] = None,
  enable_thread_profiler: typing.Union[bool, IResolvable] = None,
  end_user_apdex_threshold: typing.Union[int, float] = None,
  error_collector: typing.Union[IResolvable, typing.List[ApplicationSettingsErrorCollector]] = None,
  guid: str = None,
  id: str = None,
  name: str = None,
  tracer_type: str = None,
  transaction_tracer: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracer]] = None,
  use_server_side_config: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.appApdexThreshold">app_apdex_threshold</a></code> | <code>typing.Union[int, float]</code> | The response time threshold value for Apdex score calculation. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableRealUserMonitoring">enable_real_user_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableSlowSql">enable_slow_sql</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Samples and reports the slowest database queries in your traces. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableThreadProfiler">enable_thread_profiler</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable the thread profiler. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.endUserApdexThreshold">end_user_apdex_threshold</a></code> | <code>typing.Union[int, float]</code> | Dummy field to support backward compatibility of previous version.should be removed with next major version. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.errorCollector">error_collector</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]</code> | error_collector block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.guid">guid</a></code> | <code>str</code> | The GUID of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.name">name</a></code> | <code>str</code> | The name of the application in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.tracerType">tracer_type</a></code> | <code>str</code> | The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.transactionTracer">transaction_tracer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]</code> | transaction_tracer block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.useServerSideConfig">use_server_side_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable server side monitoring. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_apdex_threshold`<sup>Optional</sup> <a name="app_apdex_threshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.appApdexThreshold"></a>

```python
app_apdex_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The response time threshold value for Apdex score calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#app_apdex_threshold ApplicationSettings#app_apdex_threshold}

---

##### `enable_real_user_monitoring`<sup>Optional</sup> <a name="enable_real_user_monitoring" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableRealUserMonitoring"></a>

```python
enable_real_user_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#enable_real_user_monitoring ApplicationSettings#enable_real_user_monitoring}

---

##### `enable_slow_sql`<sup>Optional</sup> <a name="enable_slow_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableSlowSql"></a>

```python
enable_slow_sql: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Samples and reports the slowest database queries in your traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#enable_slow_sql ApplicationSettings#enable_slow_sql}

---

##### `enable_thread_profiler`<sup>Optional</sup> <a name="enable_thread_profiler" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.enableThreadProfiler"></a>

```python
enable_thread_profiler: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable the thread profiler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#enable_thread_profiler ApplicationSettings#enable_thread_profiler}

---

##### `end_user_apdex_threshold`<sup>Optional</sup> <a name="end_user_apdex_threshold" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.endUserApdexThreshold"></a>

```python
end_user_apdex_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Dummy field to support backward compatibility of previous version.should be removed with next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#end_user_apdex_threshold ApplicationSettings#end_user_apdex_threshold}

---

##### `error_collector`<sup>Optional</sup> <a name="error_collector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.errorCollector"></a>

```python
error_collector: typing.Union[IResolvable, typing.List[ApplicationSettingsErrorCollector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]

error_collector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#error_collector ApplicationSettings#error_collector}

---

##### `guid`<sup>Optional</sup> <a name="guid" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.guid"></a>

```python
guid: str
```

- *Type:* str

The GUID of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#guid ApplicationSettings#guid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the application in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#name ApplicationSettings#name}

---

##### `tracer_type`<sup>Optional</sup> <a name="tracer_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.tracerType"></a>

```python
tracer_type: str
```

- *Type:* str

The type of tracer to use, either 'CROSS_APPLICATION_TRACER', 'DISTRIBUTED_TRACING', 'NONE', or 'OPT_OUT'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#tracer_type ApplicationSettings#tracer_type}

---

##### `transaction_tracer`<sup>Optional</sup> <a name="transaction_tracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.transactionTracer"></a>

```python
transaction_tracer: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]

transaction_tracer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#transaction_tracer ApplicationSettings#transaction_tracer}

---

##### `use_server_side_config`<sup>Optional</sup> <a name="use_server_side_config" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsConfig.property.useServerSideConfig"></a>

```python
use_server_side_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable server side monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#use_server_side_config ApplicationSettings#use_server_side_config}

---

### ApplicationSettingsErrorCollector <a name="ApplicationSettingsErrorCollector" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsErrorCollector(
  expected_error_classes: typing.List[str] = None,
  expected_error_codes: typing.List[str] = None,
  ignored_error_classes: typing.List[str] = None,
  ignored_error_codes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorClasses">expected_error_classes</a></code> | <code>typing.List[str]</code> | A list of error classes that are expected and should not trigger alerts. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorCodes">expected_error_codes</a></code> | <code>typing.List[str]</code> | A list of error codes that are expected and should not trigger alerts. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorClasses">ignored_error_classes</a></code> | <code>typing.List[str]</code> | A list of error classes that should be ignored. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorCodes">ignored_error_codes</a></code> | <code>typing.List[str]</code> | A list of error codes that should be ignored. |

---

##### `expected_error_classes`<sup>Optional</sup> <a name="expected_error_classes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorClasses"></a>

```python
expected_error_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of error classes that are expected and should not trigger alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#expected_error_classes ApplicationSettings#expected_error_classes}

---

##### `expected_error_codes`<sup>Optional</sup> <a name="expected_error_codes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.expectedErrorCodes"></a>

```python
expected_error_codes: typing.List[str]
```

- *Type:* typing.List[str]

A list of error codes that are expected and should not trigger alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#expected_error_codes ApplicationSettings#expected_error_codes}

---

##### `ignored_error_classes`<sup>Optional</sup> <a name="ignored_error_classes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorClasses"></a>

```python
ignored_error_classes: typing.List[str]
```

- *Type:* typing.List[str]

A list of error classes that should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#ignored_error_classes ApplicationSettings#ignored_error_classes}

---

##### `ignored_error_codes`<sup>Optional</sup> <a name="ignored_error_codes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector.property.ignoredErrorCodes"></a>

```python
ignored_error_codes: typing.List[str]
```

- *Type:* typing.List[str]

A list of error codes that should be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#ignored_error_codes ApplicationSettings#ignored_error_codes}

---

### ApplicationSettingsTransactionTracer <a name="ApplicationSettingsTransactionTracer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsTransactionTracer(
  explain_query_plans: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracerExplainQueryPlans]] = None,
  sql: ApplicationSettingsTransactionTracerSql = None,
  stack_trace_threshold_value: typing.Union[int, float] = None,
  transaction_threshold_type: str = None,
  transaction_threshold_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.explainQueryPlans">explain_query_plans</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]]</code> | explain_query_plans block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.stackTraceThresholdValue">stack_trace_threshold_value</a></code> | <code>typing.Union[int, float]</code> | The response time threshold value for capturing stack traces of SQL queries. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdType">transaction_threshold_type</a></code> | <code>str</code> | The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdValue">transaction_threshold_value</a></code> | <code>typing.Union[int, float]</code> | The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'. |

---

##### `explain_query_plans`<sup>Optional</sup> <a name="explain_query_plans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.explainQueryPlans"></a>

```python
explain_query_plans: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracerExplainQueryPlans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]]

explain_query_plans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#explain_query_plans ApplicationSettings#explain_query_plans}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.sql"></a>

```python
sql: ApplicationSettingsTransactionTracerSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#sql ApplicationSettings#sql}

---

##### `stack_trace_threshold_value`<sup>Optional</sup> <a name="stack_trace_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.stackTraceThresholdValue"></a>

```python
stack_trace_threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The response time threshold value for capturing stack traces of SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#stack_trace_threshold_value ApplicationSettings#stack_trace_threshold_value}

---

##### `transaction_threshold_type`<sup>Optional</sup> <a name="transaction_threshold_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdType"></a>

```python
transaction_threshold_type: str
```

- *Type:* str

The type of threshold for transaction tracing, either 'APDEX_F' or 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#transaction_threshold_type ApplicationSettings#transaction_threshold_type}

---

##### `transaction_threshold_value`<sup>Optional</sup> <a name="transaction_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer.property.transactionThresholdValue"></a>

```python
transaction_threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold value for transaction tracing when 'transaction_threshold_type' is 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#transaction_threshold_value ApplicationSettings#transaction_threshold_value}

---

### ApplicationSettingsTransactionTracerExplainQueryPlans <a name="ApplicationSettingsTransactionTracerExplainQueryPlans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans(
  query_plan_threshold_type: str = None,
  query_plan_threshold_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdType">query_plan_threshold_type</a></code> | <code>str</code> | The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdValue">query_plan_threshold_value</a></code> | <code>typing.Union[int, float]</code> | The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'. |

---

##### `query_plan_threshold_type`<sup>Optional</sup> <a name="query_plan_threshold_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdType"></a>

```python
query_plan_threshold_type: str
```

- *Type:* str

The type of threshold for explain plans, either 'APDEX_F' or 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#query_plan_threshold_type ApplicationSettings#query_plan_threshold_type}

---

##### `query_plan_threshold_value`<sup>Optional</sup> <a name="query_plan_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans.property.queryPlanThresholdValue"></a>

```python
query_plan_threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold value for explain plans when 'query_plan_threshold_type' is 'VALUE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#query_plan_threshold_value ApplicationSettings#query_plan_threshold_value}

---

### ApplicationSettingsTransactionTracerSql <a name="ApplicationSettingsTransactionTracerSql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsTransactionTracerSql(
  record_sql: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.property.recordSql">record_sql</a></code> | <code>str</code> | The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'. |

---

##### `record_sql`<sup>Required</sup> <a name="record_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql.property.recordSql"></a>

```python
record_sql: str
```

- *Type:* str

The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#record_sql ApplicationSettings#record_sql}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationSettingsErrorCollectorList <a name="ApplicationSettingsErrorCollectorList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsErrorCollectorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationSettingsErrorCollectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationSettingsErrorCollector]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]]

---


### ApplicationSettingsErrorCollectorOutputReference <a name="ApplicationSettingsErrorCollectorOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsErrorCollectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorClasses">reset_expected_error_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorCodes">reset_expected_error_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorClasses">reset_ignored_error_classes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorCodes">reset_ignored_error_codes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expected_error_classes` <a name="reset_expected_error_classes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorClasses"></a>

```python
def reset_expected_error_classes() -> None
```

##### `reset_expected_error_codes` <a name="reset_expected_error_codes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetExpectedErrorCodes"></a>

```python
def reset_expected_error_codes() -> None
```

##### `reset_ignored_error_classes` <a name="reset_ignored_error_classes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorClasses"></a>

```python
def reset_ignored_error_classes() -> None
```

##### `reset_ignored_error_codes` <a name="reset_ignored_error_codes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.resetIgnoredErrorCodes"></a>

```python
def reset_ignored_error_codes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClassesInput">expected_error_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodesInput">expected_error_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClassesInput">ignored_error_classes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodesInput">ignored_error_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClasses">expected_error_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodes">expected_error_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClasses">ignored_error_classes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodes">ignored_error_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expected_error_classes_input`<sup>Optional</sup> <a name="expected_error_classes_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClassesInput"></a>

```python
expected_error_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expected_error_codes_input`<sup>Optional</sup> <a name="expected_error_codes_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodesInput"></a>

```python
expected_error_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignored_error_classes_input`<sup>Optional</sup> <a name="ignored_error_classes_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClassesInput"></a>

```python
ignored_error_classes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignored_error_codes_input`<sup>Optional</sup> <a name="ignored_error_codes_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodesInput"></a>

```python
ignored_error_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expected_error_classes`<sup>Required</sup> <a name="expected_error_classes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorClasses"></a>

```python
expected_error_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expected_error_codes`<sup>Required</sup> <a name="expected_error_codes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.expectedErrorCodes"></a>

```python
expected_error_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignored_error_classes`<sup>Required</sup> <a name="ignored_error_classes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorClasses"></a>

```python
ignored_error_classes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ignored_error_codes`<sup>Required</sup> <a name="ignored_error_codes" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.ignoredErrorCodes"></a>

```python
ignored_error_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollectorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationSettingsErrorCollector]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsErrorCollector">ApplicationSettingsErrorCollector</a>]

---


### ApplicationSettingsTransactionTracerExplainQueryPlansList <a name="ApplicationSettingsTransactionTracerExplainQueryPlansList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracerExplainQueryPlans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]]

---


### ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference <a name="ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdType">reset_query_plan_threshold_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdValue">reset_query_plan_threshold_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_plan_threshold_type` <a name="reset_query_plan_threshold_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdType"></a>

```python
def reset_query_plan_threshold_type() -> None
```

##### `reset_query_plan_threshold_value` <a name="reset_query_plan_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.resetQueryPlanThresholdValue"></a>

```python
def reset_query_plan_threshold_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdTypeInput">query_plan_threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValueInput">query_plan_threshold_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdType">query_plan_threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValue">query_plan_threshold_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_plan_threshold_type_input`<sup>Optional</sup> <a name="query_plan_threshold_type_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdTypeInput"></a>

```python
query_plan_threshold_type_input: str
```

- *Type:* str

---

##### `query_plan_threshold_value_input`<sup>Optional</sup> <a name="query_plan_threshold_value_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValueInput"></a>

```python
query_plan_threshold_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_plan_threshold_type`<sup>Required</sup> <a name="query_plan_threshold_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdType"></a>

```python
query_plan_threshold_type: str
```

- *Type:* str

---

##### `query_plan_threshold_value`<sup>Required</sup> <a name="query_plan_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.queryPlanThresholdValue"></a>

```python
query_plan_threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationSettingsTransactionTracerExplainQueryPlans]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]

---


### ApplicationSettingsTransactionTracerList <a name="ApplicationSettingsTransactionTracerList" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsTransactionTracerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationSettingsTransactionTracerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]]

---


### ApplicationSettingsTransactionTracerOutputReference <a name="ApplicationSettingsTransactionTracerOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsTransactionTracerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans">put_explain_query_plans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql">put_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetExplainQueryPlans">reset_explain_query_plans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetStackTraceThresholdValue">reset_stack_trace_threshold_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdType">reset_transaction_threshold_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdValue">reset_transaction_threshold_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_explain_query_plans` <a name="put_explain_query_plans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans"></a>

```python
def put_explain_query_plans(
  value: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracerExplainQueryPlans]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putExplainQueryPlans.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]]

---

##### `put_sql` <a name="put_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql"></a>

```python
def put_sql(
  record_sql: str
) -> None
```

###### `record_sql`<sup>Required</sup> <a name="record_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.putSql.parameter.recordSql"></a>

- *Type:* str

The level of SQL recording, either 'OBFUSCATED', 'OFF', or 'RAW'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.68.0/docs/resources/application_settings#record_sql ApplicationSettings#record_sql}

---

##### `reset_explain_query_plans` <a name="reset_explain_query_plans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetExplainQueryPlans"></a>

```python
def reset_explain_query_plans() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_stack_trace_threshold_value` <a name="reset_stack_trace_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetStackTraceThresholdValue"></a>

```python
def reset_stack_trace_threshold_value() -> None
```

##### `reset_transaction_threshold_type` <a name="reset_transaction_threshold_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdType"></a>

```python
def reset_transaction_threshold_type() -> None
```

##### `reset_transaction_threshold_value` <a name="reset_transaction_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.resetTransactionThresholdValue"></a>

```python
def reset_transaction_threshold_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlans">explain_query_plans</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList">ApplicationSettingsTransactionTracerExplainQueryPlansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference">ApplicationSettingsTransactionTracerSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlansInput">explain_query_plans_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sqlInput">sql_input</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValueInput">stack_trace_threshold_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdTypeInput">transaction_threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValueInput">transaction_threshold_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValue">stack_trace_threshold_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdType">transaction_threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValue">transaction_threshold_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `explain_query_plans`<sup>Required</sup> <a name="explain_query_plans" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlans"></a>

```python
explain_query_plans: ApplicationSettingsTransactionTracerExplainQueryPlansList
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlansList">ApplicationSettingsTransactionTracerExplainQueryPlansList</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sql"></a>

```python
sql: ApplicationSettingsTransactionTracerSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference">ApplicationSettingsTransactionTracerSqlOutputReference</a>

---

##### `explain_query_plans_input`<sup>Optional</sup> <a name="explain_query_plans_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.explainQueryPlansInput"></a>

```python
explain_query_plans_input: typing.Union[IResolvable, typing.List[ApplicationSettingsTransactionTracerExplainQueryPlans]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerExplainQueryPlans">ApplicationSettingsTransactionTracerExplainQueryPlans</a>]]

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.sqlInput"></a>

```python
sql_input: ApplicationSettingsTransactionTracerSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---

##### `stack_trace_threshold_value_input`<sup>Optional</sup> <a name="stack_trace_threshold_value_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValueInput"></a>

```python
stack_trace_threshold_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transaction_threshold_type_input`<sup>Optional</sup> <a name="transaction_threshold_type_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdTypeInput"></a>

```python
transaction_threshold_type_input: str
```

- *Type:* str

---

##### `transaction_threshold_value_input`<sup>Optional</sup> <a name="transaction_threshold_value_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValueInput"></a>

```python
transaction_threshold_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stack_trace_threshold_value`<sup>Required</sup> <a name="stack_trace_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.stackTraceThresholdValue"></a>

```python
stack_trace_threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transaction_threshold_type`<sup>Required</sup> <a name="transaction_threshold_type" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdType"></a>

```python
transaction_threshold_type: str
```

- *Type:* str

---

##### `transaction_threshold_value`<sup>Required</sup> <a name="transaction_threshold_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.transactionThresholdValue"></a>

```python
transaction_threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationSettingsTransactionTracer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracer">ApplicationSettingsTransactionTracer</a>]

---


### ApplicationSettingsTransactionTracerSqlOutputReference <a name="ApplicationSettingsTransactionTracerSqlOutputReference" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import application_settings

applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSqlInput">record_sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSql">record_sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `record_sql_input`<sup>Optional</sup> <a name="record_sql_input" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSqlInput"></a>

```python
record_sql_input: str
```

- *Type:* str

---

##### `record_sql`<sup>Required</sup> <a name="record_sql" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.recordSql"></a>

```python
record_sql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSqlOutputReference.property.internalValue"></a>

```python
internal_value: ApplicationSettingsTransactionTracerSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.applicationSettings.ApplicationSettingsTransactionTracerSql">ApplicationSettingsTransactionTracerSql</a>

---



