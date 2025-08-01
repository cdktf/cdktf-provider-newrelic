# `logParsingRule` Submodule <a name="`logParsingRule` Submodule" id="@cdktf/provider-newrelic.logParsingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogParsingRule <a name="LogParsingRule" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule newrelic_log_parsing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import log_parsing_rule

logParsingRule.LogParsingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  grok: str,
  lucene: str,
  name: str,
  nrql: str,
  account_id: typing.Union[int, float] = None,
  attribute: str = None,
  id: str = None,
  matched: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not this rule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.grok">grok</a></code> | <code>str</code> | The Grok of what to parse. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.lucene">lucene</a></code> | <code>str</code> | The Lucene to match events to the parsing rule. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | A description of what this parsing rule represents. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.nrql">nrql</a></code> | <code>str</code> | The NRQL to match events to the parsing rule. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id associated with the obfuscation expression. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.attribute">attribute</a></code> | <code>str</code> | The parsing rule will apply to value of this attribute. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#id LogParsingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.matched">matched</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the Grok pattern matched. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not this rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#enabled LogParsingRule#enabled}

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.grok"></a>

- *Type:* str

The Grok of what to parse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#grok LogParsingRule#grok}

---

##### `lucene`<sup>Required</sup> <a name="lucene" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.lucene"></a>

- *Type:* str

The Lucene to match events to the parsing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#lucene LogParsingRule#lucene}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.name"></a>

- *Type:* str

A description of what this parsing rule represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#name LogParsingRule#name}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.nrql"></a>

- *Type:* str

The NRQL to match events to the parsing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#nrql LogParsingRule#nrql}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account id associated with the obfuscation expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#account_id LogParsingRule#account_id}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.attribute"></a>

- *Type:* str

The parsing rule will apply to value of this attribute.

If field is not provided, value will default to message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#attribute LogParsingRule#attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#id LogParsingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matched`<sup>Optional</sup> <a name="matched" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.Initializer.parameter.matched"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the Grok pattern matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#matched LogParsingRule#matched}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetAttribute">reset_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetMatched">reset_matched</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_attribute` <a name="reset_attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetAttribute"></a>

```python
def reset_attribute() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_matched` <a name="reset_matched" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.resetMatched"></a>

```python
def reset_matched() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogParsingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import log_parsing_rule

logParsingRule.LogParsingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import log_parsing_rule

logParsingRule.LogParsingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import log_parsing_rule

logParsingRule.LogParsingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import log_parsing_rule

logParsingRule.LogParsingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogParsingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogParsingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogParsingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogParsingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.grokInput">grok_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.luceneInput">lucene_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.matchedInput">matched_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nrqlInput">nrql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.grok">grok</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.lucene">lucene</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.matched">matched</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nrql">nrql</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grok_input`<sup>Optional</sup> <a name="grok_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.grokInput"></a>

```python
grok_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lucene_input`<sup>Optional</sup> <a name="lucene_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.luceneInput"></a>

```python
lucene_input: str
```

- *Type:* str

---

##### `matched_input`<sup>Optional</sup> <a name="matched_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.matchedInput"></a>

```python
matched_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nrql_input`<sup>Optional</sup> <a name="nrql_input" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nrqlInput"></a>

```python
nrql_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.grok"></a>

```python
grok: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lucene`<sup>Required</sup> <a name="lucene" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.lucene"></a>

```python
lucene: str
```

- *Type:* str

---

##### `matched`<sup>Required</sup> <a name="matched" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.matched"></a>

```python
matched: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.nrql"></a>

```python
nrql: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogParsingRuleConfig <a name="LogParsingRuleConfig" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import log_parsing_rule

logParsingRule.LogParsingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  grok: str,
  lucene: str,
  name: str,
  nrql: str,
  account_id: typing.Union[int, float] = None,
  attribute: str = None,
  id: str = None,
  matched: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not this rule is enabled. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.grok">grok</a></code> | <code>str</code> | The Grok of what to parse. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.lucene">lucene</a></code> | <code>str</code> | The Lucene to match events to the parsing rule. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.name">name</a></code> | <code>str</code> | A description of what this parsing rule represents. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.nrql">nrql</a></code> | <code>str</code> | The NRQL to match events to the parsing rule. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id associated with the obfuscation expression. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.attribute">attribute</a></code> | <code>str</code> | The parsing rule will apply to value of this attribute. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#id LogParsingRule#id}. |
| <code><a href="#@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.matched">matched</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the Grok pattern matched. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not this rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#enabled LogParsingRule#enabled}

---

##### `grok`<sup>Required</sup> <a name="grok" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.grok"></a>

```python
grok: str
```

- *Type:* str

The Grok of what to parse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#grok LogParsingRule#grok}

---

##### `lucene`<sup>Required</sup> <a name="lucene" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.lucene"></a>

```python
lucene: str
```

- *Type:* str

The Lucene to match events to the parsing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#lucene LogParsingRule#lucene}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A description of what this parsing rule represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#name LogParsingRule#name}

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.nrql"></a>

```python
nrql: str
```

- *Type:* str

The NRQL to match events to the parsing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#nrql LogParsingRule#nrql}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account id associated with the obfuscation expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#account_id LogParsingRule#account_id}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

The parsing rule will apply to value of this attribute.

If field is not provided, value will default to message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#attribute LogParsingRule#attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#id LogParsingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matched`<sup>Optional</sup> <a name="matched" id="@cdktf/provider-newrelic.logParsingRule.LogParsingRuleConfig.property.matched"></a>

```python
matched: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the Grok pattern matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/resources/log_parsing_rule#matched LogParsingRule#matched}

---



