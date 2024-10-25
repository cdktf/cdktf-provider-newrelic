# `oneDashboardRaw` Submodule <a name="`oneDashboardRaw` Submodule" id="@cdktf/provider-newrelic.oneDashboardRaw"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OneDashboardRaw <a name="OneDashboardRaw" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw newrelic_one_dashboard_raw}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRaw(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  page: typing.Union[IResolvable, typing.List[OneDashboardRawPage]],
  account_id: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  permissions: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.name">name</a></code> | <code>str</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.page">page</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]</code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.description">description</a></code> | <code>str</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.permissions">permissions</a></code> | <code>str</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.name"></a>

- *Type:* str

The dashboard's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.page"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]

page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#page OneDashboardRaw#page}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#account_id OneDashboardRaw#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.description"></a>

- *Type:* str

The dashboard's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.Initializer.parameter.permissions"></a>

- *Type:* str

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#permissions OneDashboardRaw#permissions}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage">put_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetPermissions">reset_permissions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_page` <a name="put_page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage"></a>

```python
def put_page(
  value: typing.Union[IResolvable, typing.List[OneDashboardRawPage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.putPage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.resetPermissions"></a>

```python
def reset_permissions() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OneDashboardRaw resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRaw.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRaw.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRaw.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRaw.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OneDashboardRaw resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OneDashboardRaw to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OneDashboardRaw that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OneDashboardRaw to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.page">page</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList">OneDashboardRawPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permalink">permalink</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.pageInput">page_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissionsInput">permissions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissions">permissions</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.page"></a>

```python
page: OneDashboardRawPageList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList">OneDashboardRawPageList</a>

---

##### `permalink`<sup>Required</sup> <a name="permalink" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permalink"></a>

```python
permalink: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `page_input`<sup>Optional</sup> <a name="page_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.pageInput"></a>

```python
page_input: typing.Union[IResolvable, typing.List[OneDashboardRawPage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissionsInput"></a>

```python
permissions_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRaw.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OneDashboardRawConfig <a name="OneDashboardRawConfig" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRawConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  page: typing.Union[IResolvable, typing.List[OneDashboardRawPage]],
  account_id: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  permissions: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.name">name</a></code> | <code>str</code> | The dashboard's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.page">page</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]</code> | page block. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to create the dashboard. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.description">description</a></code> | <code>str</code> | The dashboard's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.permissions">permissions</a></code> | <code>str</code> | Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The dashboard's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.page"></a>

```python
page: typing.Union[IResolvable, typing.List[OneDashboardRawPage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]

page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#page OneDashboardRaw#page}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#account_id OneDashboardRaw#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The dashboard's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#id OneDashboardRaw#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawConfig.property.permissions"></a>

```python
permissions: str
```

- *Type:* str

Determines who can see or edit the dashboard. Valid values are private, public_read_only, public_read_write. Defaults to public_read_only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#permissions OneDashboardRaw#permissions}

---

### OneDashboardRawPage <a name="OneDashboardRawPage" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRawPage(
  name: str,
  description: str = None,
  widget: typing.Union[IResolvable, typing.List[OneDashboardRawPageWidget]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.name">name</a></code> | <code>str</code> | The dashboard page's name. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.description">description</a></code> | <code>str</code> | The dashboard page's description. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.widget">widget</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]]</code> | widget block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.name"></a>

```python
name: str
```

- *Type:* str

The dashboard page's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#name OneDashboardRaw#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.description"></a>

```python
description: str
```

- *Type:* str

The dashboard page's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#description OneDashboardRaw#description}

---

##### `widget`<sup>Optional</sup> <a name="widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage.property.widget"></a>

```python
widget: typing.Union[IResolvable, typing.List[OneDashboardRawPageWidget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]]

widget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#widget OneDashboardRaw#widget}

---

### OneDashboardRawPageWidget <a name="OneDashboardRawPageWidget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRawPageWidget(
  column: typing.Union[int, float],
  configuration: str,
  row: typing.Union[int, float],
  title: str,
  visualization_id: str,
  height: typing.Union[int, float] = None,
  linked_entity_guids: typing.List[str] = None,
  width: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.column">column</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#column OneDashboardRaw#column}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.configuration">configuration</a></code> | <code>str</code> | The configuration of the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.row">row</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#row OneDashboardRaw#row}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.title">title</a></code> | <code>str</code> | A title for the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.visualizationId">visualization_id</a></code> | <code>str</code> | The visualization ID of the widget. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.height">height</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#height OneDashboardRaw#height}. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.linkedEntityGuids">linked_entity_guids</a></code> | <code>typing.List[str]</code> | (Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.width">width</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#width OneDashboardRaw#width}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.column"></a>

```python
column: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#column OneDashboardRaw#column}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

The configuration of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#configuration OneDashboardRaw#configuration}

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.row"></a>

```python
row: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#row OneDashboardRaw#row}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.title"></a>

```python
title: str
```

- *Type:* str

A title for the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#title OneDashboardRaw#title}

---

##### `visualization_id`<sup>Required</sup> <a name="visualization_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.visualizationId"></a>

```python
visualization_id: str
```

- *Type:* str

The visualization ID of the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#visualization_id OneDashboardRaw#visualization_id}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#height OneDashboardRaw#height}.

---

##### `linked_entity_guids`<sup>Optional</sup> <a name="linked_entity_guids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.linkedEntityGuids"></a>

```python
linked_entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

(Optional) Related entity GUIDs. Currently only supports Dashboard entity GUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#linked_entity_guids OneDashboardRaw#linked_entity_guids}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.51.0/docs/resources/one_dashboard_raw#width OneDashboardRaw#width}.

---

## Classes <a name="Classes" id="Classes"></a>

### OneDashboardRawPageList <a name="OneDashboardRawPageList" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRawPageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OneDashboardRawPageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OneDashboardRawPage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]]

---


### OneDashboardRawPageOutputReference <a name="OneDashboardRawPageOutputReference" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRawPageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget">put_widget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetWidget">reset_widget</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_widget` <a name="put_widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget"></a>

```python
def put_widget(
  value: typing.Union[IResolvable, typing.List[OneDashboardRawPageWidget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.putWidget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_widget` <a name="reset_widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.resetWidget"></a>

```python
def reset_widget() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widget">widget</a></code> | <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList">OneDashboardRawPageWidgetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widgetInput">widget_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `widget`<sup>Required</sup> <a name="widget" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widget"></a>

```python
widget: OneDashboardRawPageWidgetList
```

- *Type:* <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList">OneDashboardRawPageWidgetList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `widget_input`<sup>Optional</sup> <a name="widget_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.widgetInput"></a>

```python
widget_input: typing.Union[IResolvable, typing.List[OneDashboardRawPageWidget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OneDashboardRawPage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPage">OneDashboardRawPage</a>]

---


### OneDashboardRawPageWidgetList <a name="OneDashboardRawPageWidgetList" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRawPageWidgetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OneDashboardRawPageWidgetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OneDashboardRawPageWidget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]]

---


### OneDashboardRawPageWidgetOutputReference <a name="OneDashboardRawPageWidgetOutputReference" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import one_dashboard_raw

oneDashboardRaw.OneDashboardRawPageWidgetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetHeight">reset_height</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetLinkedEntityGuids">reset_linked_entity_guids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetWidth">reset_width</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_height` <a name="reset_height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetHeight"></a>

```python
def reset_height() -> None
```

##### `reset_linked_entity_guids` <a name="reset_linked_entity_guids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetLinkedEntityGuids"></a>

```python
def reset_linked_entity_guids() -> None
```

##### `reset_width` <a name="reset_width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.resetWidth"></a>

```python
def reset_width() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.columnInput">column_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.heightInput">height_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuidsInput">linked_entity_guids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.rowInput">row_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationIdInput">visualization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.widthInput">width_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.column">column</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.height">height</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuids">linked_entity_guids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.row">row</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationId">visualization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.columnInput"></a>

```python
column_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `height_input`<sup>Optional</sup> <a name="height_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.heightInput"></a>

```python
height_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linked_entity_guids_input`<sup>Optional</sup> <a name="linked_entity_guids_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuidsInput"></a>

```python
linked_entity_guids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `row_input`<sup>Optional</sup> <a name="row_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.rowInput"></a>

```python
row_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `visualization_id_input`<sup>Optional</sup> <a name="visualization_id_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationIdInput"></a>

```python
visualization_id_input: str
```

- *Type:* str

---

##### `width_input`<sup>Optional</sup> <a name="width_input" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.widthInput"></a>

```python
width_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.column"></a>

```python
column: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.height"></a>

```python
height: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linked_entity_guids`<sup>Required</sup> <a name="linked_entity_guids" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.linkedEntityGuids"></a>

```python
linked_entity_guids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `row`<sup>Required</sup> <a name="row" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.row"></a>

```python
row: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `visualization_id`<sup>Required</sup> <a name="visualization_id" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.visualizationId"></a>

```python
visualization_id: str
```

- *Type:* str

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidgetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OneDashboardRawPageWidget]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.oneDashboardRaw.OneDashboardRawPageWidget">OneDashboardRawPageWidget</a>]

---



