# `dataNewrelicEntity` Submodule <a name="`dataNewrelicEntity` Submodule" id="@cdktf/provider-newrelic.dataNewrelicEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicEntity <a name="DataNewrelicEntity" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity newrelic_entity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntity(
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
  account_id: typing.Union[int, float] = None,
  domain: str = None,
  entity_tags: str = None,
  id: str = None,
  ignore_case: typing.Union[bool, IResolvable] = None,
  ignore_not_found: typing.Union[bool, IResolvable] = None,
  tag: typing.Union[IResolvable, typing.List[DataNewrelicEntityTag]] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the entity in New Relic One. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID; |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The entity's domain. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.entityTags">entity_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#id DataNewrelicEntity#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.ignoreCase">ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore case when searching the entity name. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.ignoreNotFound">ignore_not_found</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean attribute which when set to true, does not throw an error if the queried entity is not found. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.type">type</a></code> | <code>str</code> | The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.name"></a>

- *Type:* str

The name of the entity in New Relic One.

The first entity matching this name for the given search parameters will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#name DataNewrelicEntity#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID;

if specified, constrains the data source to return an entity belonging to the account with this ID, of all matching entities retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#account_id DataNewrelicEntity#account_id}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.domain"></a>

- *Type:* str

The entity's domain.

Valid values are APM, BROWSER, INFRA, MOBILE, SYNTH, and EXT. If not specified, all domains are searched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#domain DataNewrelicEntity#domain}

---

##### `entity_tags`<sup>Optional</sup> <a name="entity_tags" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.entityTags"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#id DataNewrelicEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_case`<sup>Optional</sup> <a name="ignore_case" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.ignoreCase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore case when searching the entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#ignore_case DataNewrelicEntity#ignore_case}

---

##### `ignore_not_found`<sup>Optional</sup> <a name="ignore_not_found" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.ignoreNotFound"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean attribute which when set to true, does not throw an error if the queried entity is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#ignore_not_found DataNewrelicEntity#ignore_not_found}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.tag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#tag DataNewrelicEntity#tag}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.type"></a>

- *Type:* str

The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#type DataNewrelicEntity#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag">put_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetEntityTags">reset_entity_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreCase">reset_ignore_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreNotFound">reset_ignore_not_found</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tag` <a name="put_tag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag"></a>

```python
def put_tag(
  value: typing.Union[IResolvable, typing.List[DataNewrelicEntityTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_entity_tags` <a name="reset_entity_tags" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetEntityTags"></a>

```python
def reset_entity_tags() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_case` <a name="reset_ignore_case" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreCase"></a>

```python
def reset_ignore_case() -> None
```

##### `reset_ignore_not_found` <a name="reset_ignore_not_found" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreNotFound"></a>

```python
def reset_ignore_not_found() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataNewrelicEntity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntity.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataNewrelicEntity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicEntity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.applicationId">application_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.servingApmApplicationId">serving_apm_application_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList">DataNewrelicEntityTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTagsInput">entity_tags_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCaseInput">ignore_case_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFoundInput">ignore_not_found_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tagInput">tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTags">entity_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCase">ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFound">ignore_not_found</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.applicationId"></a>

```python
application_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `serving_apm_application_id`<sup>Required</sup> <a name="serving_apm_application_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.servingApmApplicationId"></a>

```python
serving_apm_application_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tag"></a>

```python
tag: DataNewrelicEntityTagList
```

- *Type:* <a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList">DataNewrelicEntityTagList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `entity_tags_input`<sup>Optional</sup> <a name="entity_tags_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTagsInput"></a>

```python
entity_tags_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_case_input`<sup>Optional</sup> <a name="ignore_case_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCaseInput"></a>

```python
ignore_case_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_not_found_input`<sup>Optional</sup> <a name="ignore_not_found_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFoundInput"></a>

```python
ignore_not_found_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tagInput"></a>

```python
tag_input: typing.Union[IResolvable, typing.List[DataNewrelicEntityTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `entity_tags`<sup>Required</sup> <a name="entity_tags" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTags"></a>

```python
entity_tags: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_case`<sup>Required</sup> <a name="ignore_case" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCase"></a>

```python
ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_not_found`<sup>Required</sup> <a name="ignore_not_found" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFound"></a>

```python
ignore_not_found: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicEntityConfig <a name="DataNewrelicEntityConfig" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: typing.Union[int, float] = None,
  domain: str = None,
  entity_tags: str = None,
  id: str = None,
  ignore_case: typing.Union[bool, IResolvable] = None,
  ignore_not_found: typing.Union[bool, IResolvable] = None,
  tag: typing.Union[IResolvable, typing.List[DataNewrelicEntityTag]] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.name">name</a></code> | <code>str</code> | The name of the entity in New Relic One. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID; |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.domain">domain</a></code> | <code>str</code> | The entity's domain. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.entityTags">entity_tags</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#id DataNewrelicEntity#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreCase">ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore case when searching the entity name. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreNotFound">ignore_not_found</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean attribute which when set to true, does not throw an error if the queried entity is not found. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.tag">tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]</code> | tag block. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.type">type</a></code> | <code>str</code> | The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the entity in New Relic One.

The first entity matching this name for the given search parameters will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#name DataNewrelicEntity#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID;

if specified, constrains the data source to return an entity belonging to the account with this ID, of all matching entities retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#account_id DataNewrelicEntity#account_id}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The entity's domain.

Valid values are APM, BROWSER, INFRA, MOBILE, SYNTH, and EXT. If not specified, all domains are searched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#domain DataNewrelicEntity#domain}

---

##### `entity_tags`<sup>Optional</sup> <a name="entity_tags" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.entityTags"></a>

```python
entity_tags: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#id DataNewrelicEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_case`<sup>Optional</sup> <a name="ignore_case" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreCase"></a>

```python
ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore case when searching the entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#ignore_case DataNewrelicEntity#ignore_case}

---

##### `ignore_not_found`<sup>Optional</sup> <a name="ignore_not_found" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreNotFound"></a>

```python
ignore_not_found: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean attribute which when set to true, does not throw an error if the queried entity is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#ignore_not_found DataNewrelicEntity#ignore_not_found}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.tag"></a>

```python
tag: typing.Union[IResolvable, typing.List[DataNewrelicEntityTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#tag DataNewrelicEntity#tag}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#type DataNewrelicEntity#type}

---

### DataNewrelicEntityTag <a name="DataNewrelicEntityTag" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntityTag(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#key DataNewrelicEntity#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.65.0/docs/data-sources/entity#value DataNewrelicEntity#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicEntityTagList <a name="DataNewrelicEntityTagList" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntityTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataNewrelicEntityTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataNewrelicEntityTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]]

---


### DataNewrelicEntityTagOutputReference <a name="DataNewrelicEntityTagOutputReference" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_entity

dataNewrelicEntity.DataNewrelicEntityTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataNewrelicEntityTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>]

---



