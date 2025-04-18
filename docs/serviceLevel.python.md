# `serviceLevel` Submodule <a name="`serviceLevel` Submodule" id="@cdktf/provider-newrelic.serviceLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceLevel <a name="ServiceLevel" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level newrelic_service_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  events: ServiceLevelEvents,
  guid: str,
  name: str,
  objective: ServiceLevelObjective,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.events">events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.guid">guid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#guid ServiceLevel#guid}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#name ServiceLevel#name}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.objective">objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | objective block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#id ServiceLevel#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.events"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#events ServiceLevel#events}

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.guid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#guid ServiceLevel#guid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#name ServiceLevel#name}.

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.objective"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

objective block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#objective ServiceLevel#objective}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#description ServiceLevel#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#id ServiceLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents">put_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective">put_objective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_events` <a name="put_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents"></a>

```python
def put_events(
  account_id: typing.Union[int, float],
  valid_events: ServiceLevelEventsValidEvents,
  bad_events: ServiceLevelEventsBadEvents = None,
  good_events: ServiceLevelEventsGoodEvents = None
) -> None
```

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#account_id ServiceLevel#account_id}.

---

###### `valid_events`<sup>Required</sup> <a name="valid_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents.parameter.validEvents"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

valid_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#valid_events ServiceLevel#valid_events}

---

###### `bad_events`<sup>Optional</sup> <a name="bad_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents.parameter.badEvents"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

bad_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#bad_events ServiceLevel#bad_events}

---

###### `good_events`<sup>Optional</sup> <a name="good_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putEvents.parameter.goodEvents"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

good_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#good_events ServiceLevel#good_events}

---

##### `put_objective` <a name="put_objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective"></a>

```python
def put_objective(
  target: typing.Union[int, float],
  time_window: ServiceLevelObjectiveTimeWindow,
  description: str = None,
  name: str = None
) -> None
```

###### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective.parameter.target"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#target ServiceLevel#target}.

---

###### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective.parameter.timeWindow"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#time_window ServiceLevel#time_window}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#description ServiceLevel#description}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.putObjective.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#name ServiceLevel#name}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceLevel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceLevel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events">events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective">objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid">sli_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId">sli_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput">events_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput">guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput">objective_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.events"></a>

```python
events: ServiceLevelEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference">ServiceLevelEventsOutputReference</a>

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objective"></a>

```python
objective: ServiceLevelObjectiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference">ServiceLevelObjectiveOutputReference</a>

---

##### `sli_guid`<sup>Required</sup> <a name="sli_guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliGuid"></a>

```python
sli_guid: str
```

- *Type:* str

---

##### `sli_id`<sup>Required</sup> <a name="sli_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.sliId"></a>

```python
sli_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.eventsInput"></a>

```python
events_input: ServiceLevelEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---

##### `guid_input`<sup>Optional</sup> <a name="guid_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guidInput"></a>

```python
guid_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `objective_input`<sup>Optional</sup> <a name="objective_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.objectiveInput"></a>

```python
objective_input: ServiceLevelObjective
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceLevelConfig <a name="ServiceLevelConfig" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  events: ServiceLevelEvents,
  guid: str,
  name: str,
  objective: ServiceLevelObjective,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events">events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid">guid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#guid ServiceLevel#guid}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#name ServiceLevel#name}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective">objective</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | objective block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#id ServiceLevel#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.events"></a>

```python
events: ServiceLevelEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#events ServiceLevel#events}

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.guid"></a>

```python
guid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#guid ServiceLevel#guid}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#name ServiceLevel#name}.

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.objective"></a>

```python
objective: ServiceLevelObjective
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

objective block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#objective ServiceLevel#objective}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#description ServiceLevel#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#id ServiceLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServiceLevelEvents <a name="ServiceLevelEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEvents(
  account_id: typing.Union[int, float],
  valid_events: ServiceLevelEventsValidEvents,
  bad_events: ServiceLevelEventsBadEvents = None,
  good_events: ServiceLevelEventsGoodEvents = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#account_id ServiceLevel#account_id}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents">valid_events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | valid_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents">bad_events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | bad_events block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents">good_events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | good_events block. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#account_id ServiceLevel#account_id}.

---

##### `valid_events`<sup>Required</sup> <a name="valid_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.validEvents"></a>

```python
valid_events: ServiceLevelEventsValidEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

valid_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#valid_events ServiceLevel#valid_events}

---

##### `bad_events`<sup>Optional</sup> <a name="bad_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.badEvents"></a>

```python
bad_events: ServiceLevelEventsBadEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

bad_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#bad_events ServiceLevel#bad_events}

---

##### `good_events`<sup>Optional</sup> <a name="good_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents.property.goodEvents"></a>

```python
good_events: ServiceLevelEventsGoodEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

good_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#good_events ServiceLevel#good_events}

---

### ServiceLevelEventsBadEvents <a name="ServiceLevelEventsBadEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsBadEvents(
  from: str,
  select: ServiceLevelEventsBadEventsSelect = None,
  where: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where">where</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.select"></a>

```python
select: ServiceLevelEventsBadEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents.property.where"></a>

```python
where: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsBadEventsSelect <a name="ServiceLevelEventsBadEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsBadEventsSelect(
  function: str,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function">function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.function"></a>

```python
function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsGoodEvents <a name="ServiceLevelEventsGoodEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsGoodEvents(
  from: str,
  select: ServiceLevelEventsGoodEventsSelect = None,
  where: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where">where</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.select"></a>

```python
select: ServiceLevelEventsGoodEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents.property.where"></a>

```python
where: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsGoodEventsSelect <a name="ServiceLevelEventsGoodEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsGoodEventsSelect(
  function: str,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function">function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.function"></a>

```python
function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelEventsValidEvents <a name="ServiceLevelEventsValidEvents" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsValidEvents(
  from: str,
  select: ServiceLevelEventsValidEventsSelect = None,
  where: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | select block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where">where</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}.

---

##### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.select"></a>

```python
select: ServiceLevelEventsValidEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#select ServiceLevel#select}

---

##### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents.property.where"></a>

```python
where: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}.

---

### ServiceLevelEventsValidEventsSelect <a name="ServiceLevelEventsValidEventsSelect" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsValidEventsSelect(
  function: str,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function">function</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute">attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The event threshold to use in the SELECT clause. |

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.function"></a>

```python
function: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#threshold ServiceLevel#threshold}

---

### ServiceLevelObjective <a name="ServiceLevelObjective" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelObjective(
  target: typing.Union[int, float],
  time_window: ServiceLevelObjectiveTimeWindow,
  description: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target">target</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#target ServiceLevel#target}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow">time_window</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | time_window block. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#description ServiceLevel#description}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#name ServiceLevel#name}. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#target ServiceLevel#target}.

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.timeWindow"></a>

```python
time_window: ServiceLevelObjectiveTimeWindow
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#time_window ServiceLevel#time_window}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#description ServiceLevel#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#name ServiceLevel#name}.

---

### ServiceLevelObjectiveTimeWindow <a name="ServiceLevelObjectiveTimeWindow" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelObjectiveTimeWindow(
  rolling: ServiceLevelObjectiveTimeWindowRolling
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | rolling block. |

---

##### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow.property.rolling"></a>

```python
rolling: ServiceLevelObjectiveTimeWindowRolling
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#rolling ServiceLevel#rolling}

---

### ServiceLevelObjectiveTimeWindowRolling <a name="ServiceLevelObjectiveTimeWindowRolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelObjectiveTimeWindowRolling(
  count: typing.Union[int, float],
  unit: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#count ServiceLevel#count}. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#unit ServiceLevel#unit}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#count ServiceLevel#count}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#unit ServiceLevel#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceLevelEventsBadEventsOutputReference <a name="ServiceLevelEventsBadEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsBadEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect">put_select</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect">reset_select</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere">reset_where</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_select` <a name="put_select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect"></a>

```python
def put_select(
  function: str,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
) -> None
```

###### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect.parameter.function"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}.

---

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect.parameter.attribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.putSelect.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#threshold ServiceLevel#threshold}

---

##### `reset_select` <a name="reset_select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetSelect"></a>

```python
def reset_select() -> None
```

##### `reset_where` <a name="reset_where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.resetWhere"></a>

```python
def reset_where() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput">select_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput">where_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where">where</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.select"></a>

```python
select: ServiceLevelEventsBadEventsSelectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference">ServiceLevelEventsBadEventsSelectOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `select_input`<sup>Optional</sup> <a name="select_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.selectInput"></a>

```python
select_input: ServiceLevelEventsBadEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---

##### `where_input`<sup>Optional</sup> <a name="where_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.whereInput"></a>

```python
where_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.where"></a>

```python
where: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelEventsBadEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---


### ServiceLevelEventsBadEventsSelectOutputReference <a name="ServiceLevelEventsBadEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput">function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function">function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.functionInput"></a>

```python
function_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.function"></a>

```python
function: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelectOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelEventsBadEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

---


### ServiceLevelEventsGoodEventsOutputReference <a name="ServiceLevelEventsGoodEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsGoodEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect">put_select</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect">reset_select</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere">reset_where</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_select` <a name="put_select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect"></a>

```python
def put_select(
  function: str,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
) -> None
```

###### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect.parameter.function"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}.

---

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect.parameter.attribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.putSelect.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#threshold ServiceLevel#threshold}

---

##### `reset_select` <a name="reset_select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetSelect"></a>

```python
def reset_select() -> None
```

##### `reset_where` <a name="reset_where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.resetWhere"></a>

```python
def reset_where() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput">select_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput">where_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where">where</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.select"></a>

```python
select: ServiceLevelEventsGoodEventsSelectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference">ServiceLevelEventsGoodEventsSelectOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `select_input`<sup>Optional</sup> <a name="select_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.selectInput"></a>

```python
select_input: ServiceLevelEventsGoodEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---

##### `where_input`<sup>Optional</sup> <a name="where_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.whereInput"></a>

```python
where_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.where"></a>

```python
where: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelEventsGoodEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---


### ServiceLevelEventsGoodEventsSelectOutputReference <a name="ServiceLevelEventsGoodEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput">function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function">function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.functionInput"></a>

```python
function_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.function"></a>

```python
function: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelectOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelEventsGoodEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

---


### ServiceLevelEventsOutputReference <a name="ServiceLevelEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents">put_bad_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents">put_good_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents">put_valid_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents">reset_bad_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents">reset_good_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bad_events` <a name="put_bad_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents"></a>

```python
def put_bad_events(
  from: str,
  select: ServiceLevelEventsBadEventsSelect = None,
  where: str = None
) -> None
```

###### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents.parameter.from"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}.

---

###### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents.parameter.select"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsSelect">ServiceLevelEventsBadEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#select ServiceLevel#select}

---

###### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putBadEvents.parameter.where"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}.

---

##### `put_good_events` <a name="put_good_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents"></a>

```python
def put_good_events(
  from: str,
  select: ServiceLevelEventsGoodEventsSelect = None,
  where: str = None
) -> None
```

###### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents.parameter.from"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}.

---

###### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents.parameter.select"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsSelect">ServiceLevelEventsGoodEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#select ServiceLevel#select}

---

###### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putGoodEvents.parameter.where"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}.

---

##### `put_valid_events` <a name="put_valid_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents"></a>

```python
def put_valid_events(
  from: str,
  select: ServiceLevelEventsValidEventsSelect = None,
  where: str = None
) -> None
```

###### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents.parameter.from"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#from ServiceLevel#from}.

---

###### `select`<sup>Optional</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents.parameter.select"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

select block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#select ServiceLevel#select}

---

###### `where`<sup>Optional</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.putValidEvents.parameter.where"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#where ServiceLevel#where}.

---

##### `reset_bad_events` <a name="reset_bad_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetBadEvents"></a>

```python
def reset_bad_events() -> None
```

##### `reset_good_events` <a name="reset_good_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.resetGoodEvents"></a>

```python
def reset_good_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents">bad_events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents">good_events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents">valid_events</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput">bad_events_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput">good_events_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput">valid_events_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bad_events`<sup>Required</sup> <a name="bad_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEvents"></a>

```python
bad_events: ServiceLevelEventsBadEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEventsOutputReference">ServiceLevelEventsBadEventsOutputReference</a>

---

##### `good_events`<sup>Required</sup> <a name="good_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEvents"></a>

```python
good_events: ServiceLevelEventsGoodEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEventsOutputReference">ServiceLevelEventsGoodEventsOutputReference</a>

---

##### `valid_events`<sup>Required</sup> <a name="valid_events" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEvents"></a>

```python
valid_events: ServiceLevelEventsValidEventsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference">ServiceLevelEventsValidEventsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bad_events_input`<sup>Optional</sup> <a name="bad_events_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.badEventsInput"></a>

```python
bad_events_input: ServiceLevelEventsBadEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsBadEvents">ServiceLevelEventsBadEvents</a>

---

##### `good_events_input`<sup>Optional</sup> <a name="good_events_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.goodEventsInput"></a>

```python
good_events_input: ServiceLevelEventsGoodEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsGoodEvents">ServiceLevelEventsGoodEvents</a>

---

##### `valid_events_input`<sup>Optional</sup> <a name="valid_events_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.validEventsInput"></a>

```python
valid_events_input: ServiceLevelEventsValidEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEvents">ServiceLevelEvents</a>

---


### ServiceLevelEventsValidEventsOutputReference <a name="ServiceLevelEventsValidEventsOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsValidEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect">put_select</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect">reset_select</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere">reset_where</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_select` <a name="put_select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect"></a>

```python
def put_select(
  function: str,
  attribute: str = None,
  threshold: typing.Union[int, float] = None
) -> None
```

###### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect.parameter.function"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#function ServiceLevel#function}.

---

###### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect.parameter.attribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#attribute ServiceLevel#attribute}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.putSelect.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

The event threshold to use in the SELECT clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#threshold ServiceLevel#threshold}

---

##### `reset_select` <a name="reset_select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetSelect"></a>

```python
def reset_select() -> None
```

##### `reset_where` <a name="reset_where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.resetWhere"></a>

```python
def reset_where() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select">select</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput">select_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput">where_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where">where</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `select`<sup>Required</sup> <a name="select" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.select"></a>

```python
select: ServiceLevelEventsValidEventsSelectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference">ServiceLevelEventsValidEventsSelectOutputReference</a>

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `select_input`<sup>Optional</sup> <a name="select_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.selectInput"></a>

```python
select_input: ServiceLevelEventsValidEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---

##### `where_input`<sup>Optional</sup> <a name="where_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.whereInput"></a>

```python
where_input: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `where`<sup>Required</sup> <a name="where" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.where"></a>

```python
where: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelEventsValidEvents
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEvents">ServiceLevelEventsValidEvents</a>

---


### ServiceLevelEventsValidEventsSelectOutputReference <a name="ServiceLevelEventsValidEventsSelectOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput">function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function">function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.functionInput"></a>

```python
function_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.function"></a>

```python
function: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelectOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelEventsValidEventsSelect
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelEventsValidEventsSelect">ServiceLevelEventsValidEventsSelect</a>

---


### ServiceLevelObjectiveOutputReference <a name="ServiceLevelObjectiveOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelObjectiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow">put_time_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_time_window` <a name="put_time_window" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow"></a>

```python
def put_time_window(
  rolling: ServiceLevelObjectiveTimeWindowRolling
) -> None
```

###### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.putTimeWindow.parameter.rolling"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#rolling ServiceLevel#rolling}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow">time_window</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput">time_window_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_window`<sup>Required</sup> <a name="time_window" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindow"></a>

```python
time_window: ServiceLevelObjectiveTimeWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference">ServiceLevelObjectiveTimeWindowOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_window_input`<sup>Optional</sup> <a name="time_window_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.timeWindowInput"></a>

```python
time_window_input: ServiceLevelObjectiveTimeWindow
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjective
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjective">ServiceLevelObjective</a>

---


### ServiceLevelObjectiveTimeWindowOutputReference <a name="ServiceLevelObjectiveTimeWindowOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling">put_rolling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rolling` <a name="put_rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling"></a>

```python
def put_rolling(
  count: typing.Union[int, float],
  unit: str
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#count ServiceLevel#count}.

---

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.putRolling.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.61.0/docs/resources/service_level#unit ServiceLevel#unit}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput">rolling_input</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rolling"></a>

```python
rolling: ServiceLevelObjectiveTimeWindowRollingOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference">ServiceLevelObjectiveTimeWindowRollingOutputReference</a>

---

##### `rolling_input`<sup>Optional</sup> <a name="rolling_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.rollingInput"></a>

```python
rolling_input: ServiceLevelObjectiveTimeWindowRolling
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjectiveTimeWindow
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindow">ServiceLevelObjectiveTimeWindow</a>

---


### ServiceLevelObjectiveTimeWindowRollingOutputReference <a name="ServiceLevelObjectiveTimeWindowRollingOutputReference" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import service_level

serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRollingOutputReference.property.internalValue"></a>

```python
internal_value: ServiceLevelObjectiveTimeWindowRolling
```

- *Type:* <a href="#@cdktf/provider-newrelic.serviceLevel.ServiceLevelObjectiveTimeWindowRolling">ServiceLevelObjectiveTimeWindowRolling</a>

---



