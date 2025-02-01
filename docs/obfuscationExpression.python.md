# `obfuscationExpression` Submodule <a name="`obfuscationExpression` Submodule" id="@cdktf/provider-newrelic.obfuscationExpression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObfuscationExpression <a name="ObfuscationExpression" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression newrelic_obfuscation_expression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import obfuscation_expression

obfuscationExpression.ObfuscationExpression(
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
  regex: str,
  account_id: typing.Union[int, float] = None,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of expression. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.regex">regex</a></code> | <code>str</code> | Regex of expression. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id associated with the obfuscation expression. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of expression. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#id ObfuscationExpression#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.name"></a>

- *Type:* str

Name of expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#name ObfuscationExpression#name}

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.regex"></a>

- *Type:* str

Regex of expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#regex ObfuscationExpression#regex}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account id associated with the obfuscation expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#account_id ObfuscationExpression#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.description"></a>

- *Type:* str

Description of expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#description ObfuscationExpression#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#id ObfuscationExpression#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ObfuscationExpression resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import obfuscation_expression

obfuscationExpression.ObfuscationExpression.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import obfuscation_expression

obfuscationExpression.ObfuscationExpression.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import obfuscation_expression

obfuscationExpression.ObfuscationExpression.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import obfuscation_expression

obfuscationExpression.ObfuscationExpression.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ObfuscationExpression resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObfuscationExpression to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObfuscationExpression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObfuscationExpression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.regex">regex</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpression.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObfuscationExpressionConfig <a name="ObfuscationExpressionConfig" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import obfuscation_expression

obfuscationExpression.ObfuscationExpressionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  regex: str,
  account_id: typing.Union[int, float] = None,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.name">name</a></code> | <code>str</code> | Name of expression. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.regex">regex</a></code> | <code>str</code> | Regex of expression. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id associated with the obfuscation expression. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.description">description</a></code> | <code>str</code> | Description of expression. |
| <code><a href="#@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#id ObfuscationExpression#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#name ObfuscationExpression#name}

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.regex"></a>

```python
regex: str
```

- *Type:* str

Regex of expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#regex ObfuscationExpression#regex}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account id associated with the obfuscation expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#account_id ObfuscationExpression#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#description ObfuscationExpression#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.obfuscationExpression.ObfuscationExpressionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.54.1/docs/resources/obfuscation_expression#id ObfuscationExpression#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



