# `workload` Submodule <a name="`workload` Submodule" id="@cdktf/provider-newrelic.workload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workload <a name="Workload" id="@cdktf/provider-newrelic.workload.Workload"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload newrelic_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.Workload.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.Workload(
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
  account_id: typing.Union[int, float] = None,
  description: str = None,
  entity_guids: typing.List[str] = None,
  entity_search_query: IResolvable | typing.List[WorkloadEntitySearchQuery] = None,
  id: str = None,
  scope_account_ids: typing.List[typing.Union[int, float]] = None,
  status_config_automatic: WorkloadStatusConfigAutomatic = None,
  status_config_static: WorkloadStatusConfigStatic = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.name">name</a></code> | <code>str</code> | The workload's name. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to create the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.description">description</a></code> | <code>str</code> | Relevant information about the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.entityGuids">entity_guids</a></code> | <code>typing.List[str]</code> | A list of entity GUIDs manually assigned to this workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.entitySearchQuery">entity_search_query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]</code> | entity_search_query block. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#id Workload#id}. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of account IDs that will be used to get entities from. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.statusConfigAutomatic">status_config_automatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | status_config_automatic block. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.statusConfigStatic">status_config_static</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | status_config_static block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.name"></a>

- *Type:* str

The workload's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#name Workload#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to create the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#account_id Workload#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.description"></a>

- *Type:* str

Relevant information about the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#description Workload#description}

---

##### `entity_guids`<sup>Optional</sup> <a name="entity_guids" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.entityGuids"></a>

- *Type:* typing.List[str]

A list of entity GUIDs manually assigned to this workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `entity_search_query`<sup>Optional</sup> <a name="entity_search_query" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.entitySearchQuery"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#entity_search_query Workload#entity_search_query}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#id Workload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope_account_ids`<sup>Optional</sup> <a name="scope_account_ids" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.scopeAccountIds"></a>

- *Type:* typing.List[typing.Union[int, float]]

A list of account IDs that will be used to get entities from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#scope_account_ids Workload#scope_account_ids}

---

##### `status_config_automatic`<sup>Optional</sup> <a name="status_config_automatic" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.statusConfigAutomatic"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

status_config_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status_config_automatic Workload#status_config_automatic}

---

##### `status_config_static`<sup>Optional</sup> <a name="status_config_static" id="@cdktf/provider-newrelic.workload.Workload.Initializer.parameter.statusConfigStatic"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

status_config_static block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status_config_static Workload#status_config_static}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery">put_entity_search_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic">put_status_config_automatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic">put_status_config_static</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetEntityGuids">reset_entity_guids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetEntitySearchQuery">reset_entity_search_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetScopeAccountIds">reset_scope_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetStatusConfigAutomatic">reset_status_config_automatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.resetStatusConfigStatic">reset_status_config_static</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.Workload.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.workload.Workload.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.workload.Workload.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.workload.Workload.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.workload.Workload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.workload.Workload.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.workload.Workload.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.workload.Workload.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.workload.Workload.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.workload.Workload.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.workload.Workload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.Workload.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.Workload.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.workload.Workload.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.workload.Workload.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.Workload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.workload.Workload.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.workload.Workload.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.workload.Workload.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.workload.Workload.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.workload.Workload.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entity_search_query` <a name="put_entity_search_query" id="@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery"></a>

```python
def put_entity_search_query(
  value: IResolvable | typing.List[WorkloadEntitySearchQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.Workload.putEntitySearchQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]

---

##### `put_status_config_automatic` <a name="put_status_config_automatic" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic"></a>

```python
def put_status_config_automatic(
  enabled: bool | IResolvable,
  remaining_entities_rule: WorkloadStatusConfigAutomaticRemainingEntitiesRule = None,
  rule: IResolvable | typing.List[WorkloadStatusConfigAutomaticRule] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether the automatic status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#enabled Workload#enabled}

---

###### `remaining_entities_rule`<sup>Optional</sup> <a name="remaining_entities_rule" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic.parameter.remainingEntitiesRule"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

remaining_entities_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#remaining_entities_rule Workload#remaining_entities_rule}

---

###### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigAutomatic.parameter.rule"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#rule Workload#rule}

---

##### `put_status_config_static` <a name="put_status_config_static" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic"></a>

```python
def put_status_config_static(
  enabled: bool | IResolvable,
  status: str,
  description: str = None,
  summary: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether the static status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#enabled Workload#enabled}

---

###### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic.parameter.status"></a>

- *Type:* str

The status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status Workload#status}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic.parameter.description"></a>

- *Type:* str

A description that provides additional details about the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#description Workload#description}

---

###### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-newrelic.workload.Workload.putStatusConfigStatic.parameter.summary"></a>

- *Type:* str

A short description of the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#summary Workload#summary}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.workload.Workload.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.workload.Workload.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_entity_guids` <a name="reset_entity_guids" id="@cdktf/provider-newrelic.workload.Workload.resetEntityGuids"></a>

```python
def reset_entity_guids() -> None
```

##### `reset_entity_search_query` <a name="reset_entity_search_query" id="@cdktf/provider-newrelic.workload.Workload.resetEntitySearchQuery"></a>

```python
def reset_entity_search_query() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.workload.Workload.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_scope_account_ids` <a name="reset_scope_account_ids" id="@cdktf/provider-newrelic.workload.Workload.resetScopeAccountIds"></a>

```python
def reset_scope_account_ids() -> None
```

##### `reset_status_config_automatic` <a name="reset_status_config_automatic" id="@cdktf/provider-newrelic.workload.Workload.resetStatusConfigAutomatic"></a>

```python
def reset_status_config_automatic() -> None
```

##### `reset_status_config_static` <a name="reset_status_config_static" id="@cdktf/provider-newrelic.workload.Workload.resetStatusConfigStatic"></a>

```python
def reset_status_config_static() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.workload.Workload.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.Workload.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.workload.Workload.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.Workload.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.workload.Workload.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.Workload.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workload.Workload.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.Workload.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Workload to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Workload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Workload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.compositeEntitySearchQuery">composite_entity_search_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entitySearchQuery">entity_search_query</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList">WorkloadEntitySearchQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.permalink">permalink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomatic">status_config_automatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference">WorkloadStatusConfigAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigStatic">status_config_static</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference">WorkloadStatusConfigStaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.workloadId">workload_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entityGuidsInput">entity_guids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entitySearchQueryInput">entity_search_query_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIdsInput">scope_account_ids_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomaticInput">status_config_automatic_input</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.statusConfigStaticInput">status_config_static_input</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.entityGuids">entity_guids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.workload.Workload.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.workload.Workload.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.Workload.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.workload.Workload.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.workload.Workload.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.workload.Workload.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.workload.Workload.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workload.Workload.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workload.Workload.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.workload.Workload.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.workload.Workload.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workload.Workload.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.Workload.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workload.Workload.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `composite_entity_search_query`<sup>Required</sup> <a name="composite_entity_search_query" id="@cdktf/provider-newrelic.workload.Workload.property.compositeEntitySearchQuery"></a>

```python
composite_entity_search_query: str
```

- *Type:* str

---

##### `entity_search_query`<sup>Required</sup> <a name="entity_search_query" id="@cdktf/provider-newrelic.workload.Workload.property.entitySearchQuery"></a>

```python
entity_search_query: WorkloadEntitySearchQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList">WorkloadEntitySearchQueryList</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.workload.Workload.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `permalink`<sup>Required</sup> <a name="permalink" id="@cdktf/provider-newrelic.workload.Workload.property.permalink"></a>

```python
permalink: str
```

- *Type:* str

---

##### `status_config_automatic`<sup>Required</sup> <a name="status_config_automatic" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomatic"></a>

```python
status_config_automatic: WorkloadStatusConfigAutomaticOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference">WorkloadStatusConfigAutomaticOutputReference</a>

---

##### `status_config_static`<sup>Required</sup> <a name="status_config_static" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigStatic"></a>

```python
status_config_static: WorkloadStatusConfigStaticOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference">WorkloadStatusConfigStaticOutputReference</a>

---

##### `workload_id`<sup>Required</sup> <a name="workload_id" id="@cdktf/provider-newrelic.workload.Workload.property.workloadId"></a>

```python
workload_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.workload.Workload.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.workload.Workload.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entity_guids_input`<sup>Optional</sup> <a name="entity_guids_input" id="@cdktf/provider-newrelic.workload.Workload.property.entityGuidsInput"></a>

```python
entity_guids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entity_search_query_input`<sup>Optional</sup> <a name="entity_search_query_input" id="@cdktf/provider-newrelic.workload.Workload.property.entitySearchQueryInput"></a>

```python
entity_search_query_input: IResolvable | typing.List[WorkloadEntitySearchQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.workload.Workload.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.workload.Workload.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_account_ids_input`<sup>Optional</sup> <a name="scope_account_ids_input" id="@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIdsInput"></a>

```python
scope_account_ids_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `status_config_automatic_input`<sup>Optional</sup> <a name="status_config_automatic_input" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigAutomaticInput"></a>

```python
status_config_automatic_input: WorkloadStatusConfigAutomatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---

##### `status_config_static_input`<sup>Optional</sup> <a name="status_config_static_input" id="@cdktf/provider-newrelic.workload.Workload.property.statusConfigStaticInput"></a>

```python
status_config_static_input: WorkloadStatusConfigStatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.workload.Workload.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.workload.Workload.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entity_guids`<sup>Required</sup> <a name="entity_guids" id="@cdktf/provider-newrelic.workload.Workload.property.entityGuids"></a>

```python
entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workload.Workload.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workload.Workload.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope_account_ids`<sup>Required</sup> <a name="scope_account_ids" id="@cdktf/provider-newrelic.workload.Workload.property.scopeAccountIds"></a>

```python
scope_account_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.Workload.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.workload.Workload.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkloadConfig <a name="WorkloadConfig" id="@cdktf/provider-newrelic.workload.WorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  account_id: typing.Union[int, float] = None,
  description: str = None,
  entity_guids: typing.List[str] = None,
  entity_search_query: IResolvable | typing.List[WorkloadEntitySearchQuery] = None,
  id: str = None,
  scope_account_ids: typing.List[typing.Union[int, float]] = None,
  status_config_automatic: WorkloadStatusConfigAutomatic = None,
  status_config_static: WorkloadStatusConfigStatic = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.name">name</a></code> | <code>str</code> | The workload's name. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to create the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.description">description</a></code> | <code>str</code> | Relevant information about the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.entityGuids">entity_guids</a></code> | <code>typing.List[str]</code> | A list of entity GUIDs manually assigned to this workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.entitySearchQuery">entity_search_query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]</code> | entity_search_query block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#id Workload#id}. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.scopeAccountIds">scope_account_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | A list of account IDs that will be used to get entities from. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigAutomatic">status_config_automatic</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | status_config_automatic block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigStatic">status_config_static</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | status_config_static block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The workload's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#name Workload#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to create the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#account_id Workload#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Relevant information about the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#description Workload#description}

---

##### `entity_guids`<sup>Optional</sup> <a name="entity_guids" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.entityGuids"></a>

```python
entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

A list of entity GUIDs manually assigned to this workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `entity_search_query`<sup>Optional</sup> <a name="entity_search_query" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.entitySearchQuery"></a>

```python
entity_search_query: IResolvable | typing.List[WorkloadEntitySearchQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]

entity_search_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#entity_search_query Workload#entity_search_query}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#id Workload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope_account_ids`<sup>Optional</sup> <a name="scope_account_ids" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.scopeAccountIds"></a>

```python
scope_account_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

A list of account IDs that will be used to get entities from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#scope_account_ids Workload#scope_account_ids}

---

##### `status_config_automatic`<sup>Optional</sup> <a name="status_config_automatic" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigAutomatic"></a>

```python
status_config_automatic: WorkloadStatusConfigAutomatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

status_config_automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status_config_automatic Workload#status_config_automatic}

---

##### `status_config_static`<sup>Optional</sup> <a name="status_config_static" id="@cdktf/provider-newrelic.workload.WorkloadConfig.property.statusConfigStatic"></a>

```python
status_config_static: WorkloadStatusConfigStatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

status_config_static block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status_config_static Workload#status_config_static}

---

### WorkloadEntitySearchQuery <a name="WorkloadEntitySearchQuery" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadEntitySearchQuery(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.property.query">query</a></code> | <code>str</code> | A valid entity search query; empty, and null values are considered invalid. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery.property.query"></a>

```python
query: str
```

- *Type:* str

A valid entity search query; empty, and null values are considered invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#query Workload#query}

---

### WorkloadStatusConfigAutomatic <a name="WorkloadStatusConfigAutomatic" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomatic(
  enabled: bool | IResolvable,
  remaining_entities_rule: WorkloadStatusConfigAutomaticRemainingEntitiesRule = None,
  rule: IResolvable | typing.List[WorkloadStatusConfigAutomaticRule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the automatic status configuration is enabled or not. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.remainingEntitiesRule">remaining_entities_rule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | remaining_entities_rule block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.rule">rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>]</code> | rule block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the automatic status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#enabled Workload#enabled}

---

##### `remaining_entities_rule`<sup>Optional</sup> <a name="remaining_entities_rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.remainingEntitiesRule"></a>

```python
remaining_entities_rule: WorkloadStatusConfigAutomaticRemainingEntitiesRule
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

remaining_entities_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#remaining_entities_rule Workload#remaining_entities_rule}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic.property.rule"></a>

```python
rule: IResolvable | typing.List[WorkloadStatusConfigAutomaticRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#rule Workload#rule}

---

### WorkloadStatusConfigAutomaticRemainingEntitiesRule <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule(
  remaining_entities_rule_rollup: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.property.remainingEntitiesRuleRollup">remaining_entities_rule_rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | remaining_entities_rule_rollup block. |

---

##### `remaining_entities_rule_rollup`<sup>Required</sup> <a name="remaining_entities_rule_rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule.property.remainingEntitiesRuleRollup"></a>

```python
remaining_entities_rule_rollup: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

remaining_entities_rule_rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#remaining_entities_rule_rollup Workload#remaining_entities_rule_rollup}

---

### WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup(
  group_by: str,
  strategy: str,
  threshold_type: str = None,
  threshold_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.groupBy">group_by</a></code> | <code>str</code> | The grouping to be applied to the remaining entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.strategy">strategy</a></code> | <code>str</code> | The rollup strategy that is applied to a group of entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdType">threshold_type</a></code> | <code>str</code> | Type of threshold defined for the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdValue">threshold_value</a></code> | <code>typing.Union[int, float]</code> | Threshold value defined for the rule. |

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

The grouping to be applied to the remaining entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#group_by Workload#group_by}

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#strategy Workload#strategy}

---

##### `threshold_type`<sup>Optional</sup> <a name="threshold_type" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_type Workload#threshold_type}

---

##### `threshold_value`<sup>Optional</sup> <a name="threshold_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup.property.thresholdValue"></a>

```python
threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_value Workload#threshold_value}

---

### WorkloadStatusConfigAutomaticRule <a name="WorkloadStatusConfigAutomaticRule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRule(
  rollup: WorkloadStatusConfigAutomaticRuleRollup,
  entity_guids: typing.List[str] = None,
  nrql_query: IResolvable | typing.List[WorkloadStatusConfigAutomaticRuleNrqlQuery] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.rollup">rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | rollup block. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.entityGuids">entity_guids</a></code> | <code>typing.List[str]</code> | A list of entity GUIDs composing the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.nrqlQuery">nrql_query</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>]</code> | nrql_query block. |

---

##### `rollup`<sup>Required</sup> <a name="rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.rollup"></a>

```python
rollup: WorkloadStatusConfigAutomaticRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#rollup Workload#rollup}

---

##### `entity_guids`<sup>Optional</sup> <a name="entity_guids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.entityGuids"></a>

```python
entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

A list of entity GUIDs composing the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#entity_guids Workload#entity_guids}

---

##### `nrql_query`<sup>Optional</sup> <a name="nrql_query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule.property.nrqlQuery"></a>

```python
nrql_query: IResolvable | typing.List[WorkloadStatusConfigAutomaticRuleNrqlQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>]

nrql_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#nrql_query Workload#nrql_query}

---

### WorkloadStatusConfigAutomaticRuleNrqlQuery <a name="WorkloadStatusConfigAutomaticRuleNrqlQuery" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRuleNrqlQuery(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.property.query">query</a></code> | <code>str</code> | The entity search query that is used to perform the search of a group of entities. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery.property.query"></a>

```python
query: str
```

- *Type:* str

The entity search query that is used to perform the search of a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#query Workload#query}

---

### WorkloadStatusConfigAutomaticRuleRollup <a name="WorkloadStatusConfigAutomaticRuleRollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRuleRollup(
  strategy: str,
  threshold_type: str = None,
  threshold_value: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.strategy">strategy</a></code> | <code>str</code> | The rollup strategy that is applied to a group of entities. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdType">threshold_type</a></code> | <code>str</code> | Type of threshold defined for the rule. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdValue">threshold_value</a></code> | <code>typing.Union[int, float]</code> | Threshold value defined for the rule. |

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#strategy Workload#strategy}

---

##### `threshold_type`<sup>Optional</sup> <a name="threshold_type" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_type Workload#threshold_type}

---

##### `threshold_value`<sup>Optional</sup> <a name="threshold_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup.property.thresholdValue"></a>

```python
threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_value Workload#threshold_value}

---

### WorkloadStatusConfigStatic <a name="WorkloadStatusConfigStatic" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigStatic(
  enabled: bool | IResolvable,
  status: str,
  description: str = None,
  summary: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the static status configuration is enabled or not. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.status">status</a></code> | <code>str</code> | The status of the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.description">description</a></code> | <code>str</code> | A description that provides additional details about the status of the workload. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.summary">summary</a></code> | <code>str</code> | A short description of the status of the workload. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the static status configuration is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#enabled Workload#enabled}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#status Workload#status}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.description"></a>

```python
description: str
```

- *Type:* str

A description that provides additional details about the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#description Workload#description}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic.property.summary"></a>

```python
summary: str
```

- *Type:* str

A short description of the status of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#summary Workload#summary}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkloadEntitySearchQueryList <a name="WorkloadEntitySearchQueryList" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadEntitySearchQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkloadEntitySearchQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkloadEntitySearchQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>]

---


### WorkloadEntitySearchQueryOutputReference <a name="WorkloadEntitySearchQueryOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadEntitySearchQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadEntitySearchQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkloadEntitySearchQuery
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadEntitySearchQuery">WorkloadEntitySearchQuery</a>

---


### WorkloadStatusConfigAutomaticOutputReference <a name="WorkloadStatusConfigAutomaticOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule">put_remaining_entities_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRemainingEntitiesRule">reset_remaining_entities_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_remaining_entities_rule` <a name="put_remaining_entities_rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule"></a>

```python
def put_remaining_entities_rule(
  remaining_entities_rule_rollup: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup
) -> None
```

###### `remaining_entities_rule_rollup`<sup>Required</sup> <a name="remaining_entities_rule_rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRemainingEntitiesRule.parameter.remainingEntitiesRuleRollup"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

remaining_entities_rule_rollup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#remaining_entities_rule_rollup Workload#remaining_entities_rule_rollup}

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule"></a>

```python
def put_rule(
  value: IResolvable | typing.List[WorkloadStatusConfigAutomaticRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>]

---

##### `reset_remaining_entities_rule` <a name="reset_remaining_entities_rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRemainingEntitiesRule"></a>

```python
def reset_remaining_entities_rule() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRule">remaining_entities_rule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList">WorkloadStatusConfigAutomaticRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRuleInput">remaining_entities_rule_input</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.ruleInput">rule_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `remaining_entities_rule`<sup>Required</sup> <a name="remaining_entities_rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRule"></a>

```python
remaining_entities_rule: WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.rule"></a>

```python
rule: WorkloadStatusConfigAutomaticRuleList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList">WorkloadStatusConfigAutomaticRuleList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `remaining_entities_rule_input`<sup>Optional</sup> <a name="remaining_entities_rule_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.remainingEntitiesRuleInput"></a>

```python
remaining_entities_rule_input: WorkloadStatusConfigAutomaticRemainingEntitiesRule
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.ruleInput"></a>

```python
rule_input: IResolvable | typing.List[WorkloadStatusConfigAutomaticRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticOutputReference.property.internalValue"></a>

```python
internal_value: WorkloadStatusConfigAutomatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomatic">WorkloadStatusConfigAutomatic</a>

---


### WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup">put_remaining_entities_rule_rollup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_remaining_entities_rule_rollup` <a name="put_remaining_entities_rule_rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup"></a>

```python
def put_remaining_entities_rule_rollup(
  group_by: str,
  strategy: str,
  threshold_type: str = None,
  threshold_value: typing.Union[int, float] = None
) -> None
```

###### `group_by`<sup>Required</sup> <a name="group_by" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup.parameter.groupBy"></a>

- *Type:* str

The grouping to be applied to the remaining entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#group_by Workload#group_by}

---

###### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup.parameter.strategy"></a>

- *Type:* str

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#strategy Workload#strategy}

---

###### `threshold_type`<sup>Optional</sup> <a name="threshold_type" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup.parameter.thresholdType"></a>

- *Type:* str

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_type Workload#threshold_type}

---

###### `threshold_value`<sup>Optional</sup> <a name="threshold_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.putRemainingEntitiesRuleRollup.parameter.thresholdValue"></a>

- *Type:* typing.Union[int, float]

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_value Workload#threshold_value}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollup">remaining_entities_rule_rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollupInput">remaining_entities_rule_rollup_input</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `remaining_entities_rule_rollup`<sup>Required</sup> <a name="remaining_entities_rule_rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollup"></a>

```python
remaining_entities_rule_rollup: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference</a>

---

##### `remaining_entities_rule_rollup_input`<sup>Optional</sup> <a name="remaining_entities_rule_rollup_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.remainingEntitiesRuleRollupInput"></a>

```python
remaining_entities_rule_rollup_input: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleOutputReference.property.internalValue"></a>

```python
internal_value: WorkloadStatusConfigAutomaticRemainingEntitiesRule
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRule">WorkloadStatusConfigAutomaticRemainingEntitiesRule</a>

---


### WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference <a name="WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdType">reset_threshold_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdValue">reset_threshold_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_threshold_type` <a name="reset_threshold_type" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdType"></a>

```python
def reset_threshold_type() -> None
```

##### `reset_threshold_value` <a name="reset_threshold_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.resetThresholdValue"></a>

```python
def reset_threshold_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupByInput">group_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdTypeInput">threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValueInput">threshold_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupBy">group_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdType">threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValue">threshold_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupByInput"></a>

```python
group_by_input: str
```

- *Type:* str

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `threshold_type_input`<sup>Optional</sup> <a name="threshold_type_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdTypeInput"></a>

```python
threshold_type_input: str
```

- *Type:* str

---

##### `threshold_value_input`<sup>Optional</sup> <a name="threshold_value_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValueInput"></a>

```python
threshold_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `threshold_type`<sup>Required</sup> <a name="threshold_type" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

---

##### `threshold_value`<sup>Required</sup> <a name="threshold_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.thresholdValue"></a>

```python
threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollupOutputReference.property.internalValue"></a>

```python
internal_value: WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup">WorkloadStatusConfigAutomaticRemainingEntitiesRuleRemainingEntitiesRuleRollup</a>

---


### WorkloadStatusConfigAutomaticRuleList <a name="WorkloadStatusConfigAutomaticRuleList" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkloadStatusConfigAutomaticRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkloadStatusConfigAutomaticRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>]

---


### WorkloadStatusConfigAutomaticRuleNrqlQueryList <a name="WorkloadStatusConfigAutomaticRuleNrqlQueryList" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[WorkloadStatusConfigAutomaticRuleNrqlQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>]

---


### WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference <a name="WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkloadStatusConfigAutomaticRuleNrqlQuery
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>

---


### WorkloadStatusConfigAutomaticRuleOutputReference <a name="WorkloadStatusConfigAutomaticRuleOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery">put_nrql_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup">put_rollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetEntityGuids">reset_entity_guids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetNrqlQuery">reset_nrql_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nrql_query` <a name="put_nrql_query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery"></a>

```python
def put_nrql_query(
  value: IResolvable | typing.List[WorkloadStatusConfigAutomaticRuleNrqlQuery]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putNrqlQuery.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>]

---

##### `put_rollup` <a name="put_rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup"></a>

```python
def put_rollup(
  strategy: str,
  threshold_type: str = None,
  threshold_value: typing.Union[int, float] = None
) -> None
```

###### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup.parameter.strategy"></a>

- *Type:* str

The rollup strategy that is applied to a group of entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#strategy Workload#strategy}

---

###### `threshold_type`<sup>Optional</sup> <a name="threshold_type" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup.parameter.thresholdType"></a>

- *Type:* str

Type of threshold defined for the rule.

This is an optional field that only applies when strategy is WORST_STATUS_WINS. Use a threshold to roll up the worst status only after a certain amount of entities are not operational.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_type Workload#threshold_type}

---

###### `threshold_value`<sup>Optional</sup> <a name="threshold_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.putRollup.parameter.thresholdValue"></a>

- *Type:* typing.Union[int, float]

Threshold value defined for the rule.

This optional field is used in combination with thresholdType. If the threshold type is null, the threshold value will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.73.0/docs/resources/workload#threshold_value Workload#threshold_value}

---

##### `reset_entity_guids` <a name="reset_entity_guids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetEntityGuids"></a>

```python
def reset_entity_guids() -> None
```

##### `reset_nrql_query` <a name="reset_nrql_query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.resetNrqlQuery"></a>

```python
def reset_nrql_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQuery">nrql_query</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList">WorkloadStatusConfigAutomaticRuleNrqlQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollup">rollup</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference">WorkloadStatusConfigAutomaticRuleRollupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuidsInput">entity_guids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQueryInput">nrql_query_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollupInput">rollup_input</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuids">entity_guids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nrql_query`<sup>Required</sup> <a name="nrql_query" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQuery"></a>

```python
nrql_query: WorkloadStatusConfigAutomaticRuleNrqlQueryList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQueryList">WorkloadStatusConfigAutomaticRuleNrqlQueryList</a>

---

##### `rollup`<sup>Required</sup> <a name="rollup" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollup"></a>

```python
rollup: WorkloadStatusConfigAutomaticRuleRollupOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference">WorkloadStatusConfigAutomaticRuleRollupOutputReference</a>

---

##### `entity_guids_input`<sup>Optional</sup> <a name="entity_guids_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuidsInput"></a>

```python
entity_guids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nrql_query_input`<sup>Optional</sup> <a name="nrql_query_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.nrqlQueryInput"></a>

```python
nrql_query_input: IResolvable | typing.List[WorkloadStatusConfigAutomaticRuleNrqlQuery]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleNrqlQuery">WorkloadStatusConfigAutomaticRuleNrqlQuery</a>]

---

##### `rollup_input`<sup>Optional</sup> <a name="rollup_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.rollupInput"></a>

```python
rollup_input: WorkloadStatusConfigAutomaticRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---

##### `entity_guids`<sup>Required</sup> <a name="entity_guids" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.entityGuids"></a>

```python
entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkloadStatusConfigAutomaticRule
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRule">WorkloadStatusConfigAutomaticRule</a>

---


### WorkloadStatusConfigAutomaticRuleRollupOutputReference <a name="WorkloadStatusConfigAutomaticRuleRollupOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdType">reset_threshold_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdValue">reset_threshold_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_threshold_type` <a name="reset_threshold_type" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdType"></a>

```python
def reset_threshold_type() -> None
```

##### `reset_threshold_value` <a name="reset_threshold_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.resetThresholdValue"></a>

```python
def reset_threshold_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategyInput">strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdTypeInput">threshold_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValueInput">threshold_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategy">strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdType">threshold_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValue">threshold_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `strategy_input`<sup>Optional</sup> <a name="strategy_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategyInput"></a>

```python
strategy_input: str
```

- *Type:* str

---

##### `threshold_type_input`<sup>Optional</sup> <a name="threshold_type_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdTypeInput"></a>

```python
threshold_type_input: str
```

- *Type:* str

---

##### `threshold_value_input`<sup>Optional</sup> <a name="threshold_value_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValueInput"></a>

```python
threshold_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.strategy"></a>

```python
strategy: str
```

- *Type:* str

---

##### `threshold_type`<sup>Required</sup> <a name="threshold_type" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdType"></a>

```python
threshold_type: str
```

- *Type:* str

---

##### `threshold_value`<sup>Required</sup> <a name="threshold_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.thresholdValue"></a>

```python
threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollupOutputReference.property.internalValue"></a>

```python
internal_value: WorkloadStatusConfigAutomaticRuleRollup
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigAutomaticRuleRollup">WorkloadStatusConfigAutomaticRuleRollup</a>

---


### WorkloadStatusConfigStaticOutputReference <a name="WorkloadStatusConfigStaticOutputReference" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workload

workload.WorkloadStatusConfigStaticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetSummary">reset_summary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workload.WorkloadStatusConfigStaticOutputReference.property.internalValue"></a>

```python
internal_value: WorkloadStatusConfigStatic
```

- *Type:* <a href="#@cdktf/provider-newrelic.workload.WorkloadStatusConfigStatic">WorkloadStatusConfigStatic</a>

---



