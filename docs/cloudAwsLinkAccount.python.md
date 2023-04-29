# `newrelic_cloud_aws_link_account`

Refer to the Terraform Registory for docs: [`newrelic_cloud_aws_link_account`](https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account).

# `cloudAwsLinkAccount` Submodule <a name="`cloudAwsLinkAccount` Submodule" id="@cdktf/provider-newrelic.cloudAwsLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsLinkAccount <a name="CloudAwsLinkAccount" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account newrelic_cloud_aws_link_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_link_account

cloudAwsLinkAccount.CloudAwsLinkAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  name: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  metric_collection_mode: str = None,
  timeouts: CloudAwsLinkAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.arn">arn</a></code> | <code>str</code> | The AWS role ARN. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the linked account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to link the AWS account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#id CloudAwsLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.metricCollectionMode">metric_collection_mode</a></code> | <code>str</code> | How metrics will be collected. Defaults to `PULL` if empty. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts">CloudAwsLinkAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.arn"></a>

- *Type:* str

The AWS role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#arn CloudAwsLinkAccount#arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.name"></a>

- *Type:* str

The name of the linked account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#name CloudAwsLinkAccount#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to link the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#account_id CloudAwsLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#id CloudAwsLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric_collection_mode`<sup>Optional</sup> <a name="metric_collection_mode" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.metricCollectionMode"></a>

- *Type:* str

How metrics will be collected. Defaults to `PULL` if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#metric_collection_mode CloudAwsLinkAccount#metric_collection_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts">CloudAwsLinkAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#timeouts CloudAwsLinkAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetMetricCollectionMode">reset_metric_collection_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#create CloudAwsLinkAccount#create}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metric_collection_mode` <a name="reset_metric_collection_mode" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetMetricCollectionMode"></a>

```python
def reset_metric_collection_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_link_account

cloudAwsLinkAccount.CloudAwsLinkAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_link_account

cloudAwsLinkAccount.CloudAwsLinkAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_link_account

cloudAwsLinkAccount.CloudAwsLinkAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference">CloudAwsLinkAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.metricCollectionModeInput">metric_collection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts">CloudAwsLinkAccountTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.metricCollectionMode">metric_collection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.timeouts"></a>

```python
timeouts: CloudAwsLinkAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference">CloudAwsLinkAccountTimeoutsOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metric_collection_mode_input`<sup>Optional</sup> <a name="metric_collection_mode_input" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.metricCollectionModeInput"></a>

```python
metric_collection_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudAwsLinkAccountTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts">CloudAwsLinkAccountTimeouts</a>, cdktf.IResolvable]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_collection_mode`<sup>Required</sup> <a name="metric_collection_mode" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.metricCollectionMode"></a>

```python
metric_collection_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsLinkAccountConfig <a name="CloudAwsLinkAccountConfig" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_link_account

cloudAwsLinkAccount.CloudAwsLinkAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  name: str,
  account_id: typing.Union[int, float] = None,
  id: str = None,
  metric_collection_mode: str = None,
  timeouts: CloudAwsLinkAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.arn">arn</a></code> | <code>str</code> | The AWS role ARN. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.name">name</a></code> | <code>str</code> | The name of the linked account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The New Relic account ID where you want to link the AWS account. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#id CloudAwsLinkAccount#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.metricCollectionMode">metric_collection_mode</a></code> | <code>str</code> | How metrics will be collected. Defaults to `PULL` if empty. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts">CloudAwsLinkAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

The AWS role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#arn CloudAwsLinkAccount#arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the linked account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#name CloudAwsLinkAccount#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The New Relic account ID where you want to link the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#account_id CloudAwsLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#id CloudAwsLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric_collection_mode`<sup>Optional</sup> <a name="metric_collection_mode" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.metricCollectionMode"></a>

```python
metric_collection_mode: str
```

- *Type:* str

How metrics will be collected. Defaults to `PULL` if empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#metric_collection_mode CloudAwsLinkAccount#metric_collection_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountConfig.property.timeouts"></a>

```python
timeouts: CloudAwsLinkAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts">CloudAwsLinkAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#timeouts CloudAwsLinkAccount#timeouts}

---

### CloudAwsLinkAccountTimeouts <a name="CloudAwsLinkAccountTimeouts" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_link_account

cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#create CloudAwsLinkAccount#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.21.3/docs/resources/cloud_aws_link_account#create CloudAwsLinkAccount#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsLinkAccountTimeoutsOutputReference <a name="CloudAwsLinkAccountTimeoutsOutputReference" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_aws_link_account

cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts">CloudAwsLinkAccountTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudAwsLinkAccountTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-newrelic.cloudAwsLinkAccount.CloudAwsLinkAccountTimeouts">CloudAwsLinkAccountTimeouts</a>, cdktf.IResolvable]

---



