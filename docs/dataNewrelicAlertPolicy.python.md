# `dataNewrelicAlertPolicy` Submodule <a name="`dataNewrelicAlertPolicy` Submodule" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicAlertPolicy <a name="DataNewrelicAlertPolicy" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy newrelic_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_alert_policy

dataNewrelicAlertPolicy.DataNewrelicAlertPolicy(
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
  id: str = None,
  incident_preference: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the alert policy in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID to operate on. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#id DataNewrelicAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.incidentPreference">incident_preference</a></code> | <code>str</code> | The rollup strategy for the policy, which can be `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the alert policy in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#name DataNewrelicAlertPolicy#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID to operate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#account_id DataNewrelicAlertPolicy#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#id DataNewrelicAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident_preference`<sup>Optional</sup> <a name="incident_preference" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.Initializer.parameter.incidentPreference"></a>

- *Type:* str

The rollup strategy for the policy, which can be `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#incident_preference DataNewrelicAlertPolicy#incident_preference}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetIncidentPreference">reset_incident_preference</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_incident_preference` <a name="reset_incident_preference" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.resetIncidentPreference"></a>

```python
def reset_incident_preference() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataNewrelicAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_alert_policy

dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_alert_policy

dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_alert_policy

dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_alert_policy

dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataNewrelicAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataNewrelicAlertPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataNewrelicAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataNewrelicAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.incidentPreferenceInput">incident_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.incidentPreference">incident_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `incident_preference_input`<sup>Optional</sup> <a name="incident_preference_input" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.incidentPreferenceInput"></a>

```python
incident_preference_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `incident_preference`<sup>Required</sup> <a name="incident_preference" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.incidentPreference"></a>

```python
incident_preference: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicAlertPolicyConfig <a name="DataNewrelicAlertPolicyConfig" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import data_newrelic_alert_policy

dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  incident_preference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the alert policy in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID to operate on. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#id DataNewrelicAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.incidentPreference">incident_preference</a></code> | <code>str</code> | The rollup strategy for the policy, which can be `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the alert policy in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#name DataNewrelicAlertPolicy#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID to operate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#account_id DataNewrelicAlertPolicy#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#id DataNewrelicAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incident_preference`<sup>Optional</sup> <a name="incident_preference" id="@cdktf/provider-newrelic.dataNewrelicAlertPolicy.DataNewrelicAlertPolicyConfig.property.incidentPreference"></a>

```python
incident_preference: str
```

- *Type:* str

The rollup strategy for the policy, which can be `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.69.1/docs/data-sources/alert_policy#incident_preference DataNewrelicAlertPolicy#incident_preference}

---



