# `monitorDowntime` Submodule <a name="`monitorDowntime` Submodule" id="@cdktf/provider-newrelic.monitorDowntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDowntime <a name="MonitorDowntime" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime newrelic_monitor_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntime(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  end_time: str,
  mode: str,
  name: str,
  start_time: str,
  time_zone: str,
  account_id: typing.Union[int, float] = None,
  end_repeat: MonitorDowntimeEndRepeat = None,
  frequency: MonitorDowntimeFrequency = None,
  id: str = None,
  maintenance_days: typing.List[str] = None,
  monitor_guids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.endTime">end_time</a></code> | <code>str</code> | A datetime stamp signifying the end of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.mode">mode</a></code> | <code>str</code> | An identifier of the type of Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.name">name</a></code> | <code>str</code> | A name to identify the Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | A datetime stamp signifying the start of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The timezone that applies to the Monitor Downtime schedule. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the New Relic account in which the Monitor Downtime shall be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.endRepeat">end_repeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | end_repeat block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.frequency">frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | frequency block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#id MonitorDowntime#id}. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.maintenanceDays">maintenance_days</a></code> | <code>typing.List[str]</code> | A list of maintenance days to be included with the created weekly Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.monitorGuids">monitor_guids</a></code> | <code>typing.List[str]</code> | A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.endTime"></a>

- *Type:* str

A datetime stamp signifying the end of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#end_time MonitorDowntime#end_time}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.mode"></a>

- *Type:* str

An identifier of the type of Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#mode MonitorDowntime#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.name"></a>

- *Type:* str

A name to identify the Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#name MonitorDowntime#name}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.startTime"></a>

- *Type:* str

A datetime stamp signifying the start of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#start_time MonitorDowntime#start_time}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.timeZone"></a>

- *Type:* str

The timezone that applies to the Monitor Downtime schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#time_zone MonitorDowntime#time_zone}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The ID of the New Relic account in which the Monitor Downtime shall be created.

Defaults to the `account_id` in the provider{} configuration if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#account_id MonitorDowntime#account_id}

---

##### `end_repeat`<sup>Optional</sup> <a name="end_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.endRepeat"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

end_repeat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#end_repeat MonitorDowntime#end_repeat}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.frequency"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#frequency MonitorDowntime#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#id MonitorDowntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_days`<sup>Optional</sup> <a name="maintenance_days" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.maintenanceDays"></a>

- *Type:* typing.List[str]

A list of maintenance days to be included with the created weekly Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#maintenance_days MonitorDowntime#maintenance_days}

---

##### `monitor_guids`<sup>Optional</sup> <a name="monitor_guids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.Initializer.parameter.monitorGuids"></a>

- *Type:* typing.List[str]

A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#monitor_guids MonitorDowntime#monitor_guids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat">put_end_repeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency">put_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat">reset_end_repeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays">reset_maintenance_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids">reset_monitor_guids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_end_repeat` <a name="put_end_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat"></a>

```python
def put_end_repeat(
  on_date: str = None,
  on_repeat: typing.Union[int, float] = None
) -> None
```

###### `on_date`<sup>Optional</sup> <a name="on_date" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat.parameter.onDate"></a>

- *Type:* str

A date, on which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#on_date MonitorDowntime#on_date}

---

###### `on_repeat`<sup>Optional</sup> <a name="on_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putEndRepeat.parameter.onRepeat"></a>

- *Type:* typing.Union[int, float]

Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#on_repeat MonitorDowntime#on_repeat}

---

##### `put_frequency` <a name="put_frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency"></a>

```python
def put_frequency(
  days_of_month: typing.List[typing.Union[int, float]] = None,
  days_of_week: MonitorDowntimeFrequencyDaysOfWeek = None
) -> None
```

###### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency.parameter.daysOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

A numerical list of days of a month on which the Monitor Downtime is scheduled to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#days_of_month MonitorDowntime#days_of_month}

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.putFrequency.parameter.daysOfWeek"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#days_of_week MonitorDowntime#days_of_week}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_end_repeat` <a name="reset_end_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetEndRepeat"></a>

```python
def reset_end_repeat() -> None
```

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_days` <a name="reset_maintenance_days" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMaintenanceDays"></a>

```python
def reset_maintenance_days() -> None
```

##### `reset_monitor_guids` <a name="reset_monitor_guids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.resetMonitorGuids"></a>

```python
def reset_monitor_guids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntime.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorDowntime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorDowntime to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorDowntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDowntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat">end_repeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency">frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput">end_repeat_input</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput">frequency_input</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput">maintenance_days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput">monitor_guids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays">maintenance_days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids">monitor_guids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `end_repeat`<sup>Required</sup> <a name="end_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeat"></a>

```python
end_repeat: MonitorDowntimeEndRepeatOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference">MonitorDowntimeEndRepeatOutputReference</a>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequency"></a>

```python
frequency: MonitorDowntimeFrequencyOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference">MonitorDowntimeFrequencyOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_repeat_input`<sup>Optional</sup> <a name="end_repeat_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endRepeatInput"></a>

```python
end_repeat_input: MonitorDowntimeEndRepeat
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.frequencyInput"></a>

```python
frequency_input: MonitorDowntimeFrequency
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_days_input`<sup>Optional</sup> <a name="maintenance_days_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDaysInput"></a>

```python
maintenance_days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `monitor_guids_input`<sup>Optional</sup> <a name="monitor_guids_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuidsInput"></a>

```python
monitor_guids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_days`<sup>Required</sup> <a name="maintenance_days" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.maintenanceDays"></a>

```python
maintenance_days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `monitor_guids`<sup>Required</sup> <a name="monitor_guids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.monitorGuids"></a>

```python
monitor_guids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDowntimeConfig <a name="MonitorDowntimeConfig" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntimeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  end_time: str,
  mode: str,
  name: str,
  start_time: str,
  time_zone: str,
  account_id: typing.Union[int, float] = None,
  end_repeat: MonitorDowntimeEndRepeat = None,
  frequency: MonitorDowntimeFrequency = None,
  id: str = None,
  maintenance_days: typing.List[str] = None,
  monitor_guids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime">end_time</a></code> | <code>str</code> | A datetime stamp signifying the end of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode">mode</a></code> | <code>str</code> | An identifier of the type of Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name">name</a></code> | <code>str</code> | A name to identify the Monitor Downtime to be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime">start_time</a></code> | <code>str</code> | A datetime stamp signifying the start of the Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The timezone that applies to the Monitor Downtime schedule. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the New Relic account in which the Monitor Downtime shall be created. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat">end_repeat</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | end_repeat block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency">frequency</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | frequency block. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#id MonitorDowntime#id}. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays">maintenance_days</a></code> | <code>typing.List[str]</code> | A list of maintenance days to be included with the created weekly Monitor Downtime. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids">monitor_guids</a></code> | <code>typing.List[str]</code> | A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

A datetime stamp signifying the end of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#end_time MonitorDowntime#end_time}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

An identifier of the type of Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#mode MonitorDowntime#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A name to identify the Monitor Downtime to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#name MonitorDowntime#name}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

A datetime stamp signifying the start of the Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#start_time MonitorDowntime#start_time}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The timezone that applies to the Monitor Downtime schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#time_zone MonitorDowntime#time_zone}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the New Relic account in which the Monitor Downtime shall be created.

Defaults to the `account_id` in the provider{} configuration if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#account_id MonitorDowntime#account_id}

---

##### `end_repeat`<sup>Optional</sup> <a name="end_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.endRepeat"></a>

```python
end_repeat: MonitorDowntimeEndRepeat
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

end_repeat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#end_repeat MonitorDowntime#end_repeat}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.frequency"></a>

```python
frequency: MonitorDowntimeFrequency
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#frequency MonitorDowntime#frequency}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#id MonitorDowntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_days`<sup>Optional</sup> <a name="maintenance_days" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.maintenanceDays"></a>

```python
maintenance_days: typing.List[str]
```

- *Type:* typing.List[str]

A list of maintenance days to be included with the created weekly Monitor Downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#maintenance_days MonitorDowntime#maintenance_days}

---

##### `monitor_guids`<sup>Optional</sup> <a name="monitor_guids" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeConfig.property.monitorGuids"></a>

```python
monitor_guids: typing.List[str]
```

- *Type:* typing.List[str]

A list of GUIDs of monitors, to which the created Monitor Downtime shall be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#monitor_guids MonitorDowntime#monitor_guids}

---

### MonitorDowntimeEndRepeat <a name="MonitorDowntimeEndRepeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntimeEndRepeat(
  on_date: str = None,
  on_repeat: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate">on_date</a></code> | <code>str</code> | A date, on which the Monitor Downtime's repeat cycle is expected to end. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat">on_repeat</a></code> | <code>typing.Union[int, float]</code> | Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end. |

---

##### `on_date`<sup>Optional</sup> <a name="on_date" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onDate"></a>

```python
on_date: str
```

- *Type:* str

A date, on which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#on_date MonitorDowntime#on_date}

---

##### `on_repeat`<sup>Optional</sup> <a name="on_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat.property.onRepeat"></a>

```python
on_repeat: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of repetitions after which the Monitor Downtime's repeat cycle is expected to end.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#on_repeat MonitorDowntime#on_repeat}

---

### MonitorDowntimeFrequency <a name="MonitorDowntimeFrequency" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntimeFrequency(
  days_of_month: typing.List[typing.Union[int, float]] = None,
  days_of_week: MonitorDowntimeFrequencyDaysOfWeek = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A numerical list of days of a month on which the Monitor Downtime is scheduled to run. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek">days_of_week</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | days_of_week block. |

---

##### `days_of_month`<sup>Optional</sup> <a name="days_of_month" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A numerical list of days of a month on which the Monitor Downtime is scheduled to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#days_of_month MonitorDowntime#days_of_month}

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency.property.daysOfWeek"></a>

```python
days_of_week: MonitorDowntimeFrequencyDaysOfWeek
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#days_of_week MonitorDowntime#days_of_week}

---

### MonitorDowntimeFrequencyDaysOfWeek <a name="MonitorDowntimeFrequencyDaysOfWeek" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek(
  ordinal_day_of_month: str,
  week_day: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth">ordinal_day_of_month</a></code> | <code>str</code> | An occurrence of the day selected within the month. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay">week_day</a></code> | <code>str</code> | The day of the week on which the Monitor Downtime would run. |

---

##### `ordinal_day_of_month`<sup>Required</sup> <a name="ordinal_day_of_month" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.ordinalDayOfMonth"></a>

```python
ordinal_day_of_month: str
```

- *Type:* str

An occurrence of the day selected within the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#ordinal_day_of_month MonitorDowntime#ordinal_day_of_month}

---

##### `week_day`<sup>Required</sup> <a name="week_day" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek.property.weekDay"></a>

```python
week_day: str
```

- *Type:* str

The day of the week on which the Monitor Downtime would run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#week_day MonitorDowntime#week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDowntimeEndRepeatOutputReference <a name="MonitorDowntimeEndRepeatOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntimeEndRepeatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate">reset_on_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat">reset_on_repeat</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_on_date` <a name="reset_on_date" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnDate"></a>

```python
def reset_on_date() -> None
```

##### `reset_on_repeat` <a name="reset_on_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.resetOnRepeat"></a>

```python
def reset_on_repeat() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput">on_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput">on_repeat_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate">on_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat">on_repeat</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_date_input`<sup>Optional</sup> <a name="on_date_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDateInput"></a>

```python
on_date_input: str
```

- *Type:* str

---

##### `on_repeat_input`<sup>Optional</sup> <a name="on_repeat_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeatInput"></a>

```python
on_repeat_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `on_date`<sup>Required</sup> <a name="on_date" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onDate"></a>

```python
on_date: str
```

- *Type:* str

---

##### `on_repeat`<sup>Required</sup> <a name="on_repeat" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.onRepeat"></a>

```python
on_repeat: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeatOutputReference.property.internalValue"></a>

```python
internal_value: MonitorDowntimeEndRepeat
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeEndRepeat">MonitorDowntimeEndRepeat</a>

---


### MonitorDowntimeFrequencyDaysOfWeekOutputReference <a name="MonitorDowntimeFrequencyDaysOfWeekOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput">ordinal_day_of_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput">week_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth">ordinal_day_of_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay">week_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ordinal_day_of_month_input`<sup>Optional</sup> <a name="ordinal_day_of_month_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonthInput"></a>

```python
ordinal_day_of_month_input: str
```

- *Type:* str

---

##### `week_day_input`<sup>Optional</sup> <a name="week_day_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDayInput"></a>

```python
week_day_input: str
```

- *Type:* str

---

##### `ordinal_day_of_month`<sup>Required</sup> <a name="ordinal_day_of_month" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.ordinalDayOfMonth"></a>

```python
ordinal_day_of_month: str
```

- *Type:* str

---

##### `week_day`<sup>Required</sup> <a name="week_day" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.weekDay"></a>

```python
week_day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: MonitorDowntimeFrequencyDaysOfWeek
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---


### MonitorDowntimeFrequencyOutputReference <a name="MonitorDowntimeFrequencyOutputReference" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import monitor_downtime

monitorDowntime.MonitorDowntimeFrequencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek">put_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth">reset_days_of_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_days_of_week` <a name="put_days_of_week" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek"></a>

```python
def put_days_of_week(
  ordinal_day_of_month: str,
  week_day: str
) -> None
```

###### `ordinal_day_of_month`<sup>Required</sup> <a name="ordinal_day_of_month" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek.parameter.ordinalDayOfMonth"></a>

- *Type:* str

An occurrence of the day selected within the month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#ordinal_day_of_month MonitorDowntime#ordinal_day_of_month}

---

###### `week_day`<sup>Required</sup> <a name="week_day" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.putDaysOfWeek.parameter.weekDay"></a>

- *Type:* str

The day of the week on which the Monitor Downtime would run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.70.4/docs/resources/monitor_downtime#week_day MonitorDowntime#week_day}

---

##### `reset_days_of_month` <a name="reset_days_of_month" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfMonth"></a>

```python
def reset_days_of_month() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput">days_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth">days_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeek"></a>

```python
days_of_week: MonitorDowntimeFrequencyDaysOfWeekOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeekOutputReference">MonitorDowntimeFrequencyDaysOfWeekOutputReference</a>

---

##### `days_of_month_input`<sup>Optional</sup> <a name="days_of_month_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonthInput"></a>

```python
days_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: MonitorDowntimeFrequencyDaysOfWeek
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyDaysOfWeek">MonitorDowntimeFrequencyDaysOfWeek</a>

---

##### `days_of_month`<sup>Required</sup> <a name="days_of_month" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.daysOfMonth"></a>

```python
days_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequencyOutputReference.property.internalValue"></a>

```python
internal_value: MonitorDowntimeFrequency
```

- *Type:* <a href="#@cdktf/provider-newrelic.monitorDowntime.MonitorDowntimeFrequency">MonitorDowntimeFrequency</a>

---



