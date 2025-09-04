# `workflow` Submodule <a name="`workflow` Submodule" id="@cdktf/provider-newrelic.workflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workflow <a name="Workflow" id="@cdktf/provider-newrelic.workflow.Workflow"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow newrelic_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.Workflow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: typing.Union[IResolvable, typing.List[WorkflowDestination]],
  issues_filter: WorkflowIssuesFilter,
  muting_rules_handling: str,
  name: str,
  account_id: typing.Union[int, float] = None,
  destinations_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  enrichments: WorkflowEnrichments = None,
  enrichments_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.destination">destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]</code> | destination block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.issuesFilter">issues_filter</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | issues_filter block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.mutingRulesHandling">muting_rules_handling</a></code> | <code>str</code> | The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES). |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.name">name</a></code> | <code>str</code> | (Required) The name of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.destinationsEnabled">destinations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the destinations are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the workflow is enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enrichments">enrichments</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | enrichments block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enrichmentsEnabled">enrichments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the enrichments are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#id Workflow#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.destination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#destination Workflow#destination}

---

##### `issues_filter`<sup>Required</sup> <a name="issues_filter" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.issuesFilter"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

issues_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#issues_filter Workflow#issues_filter}

---

##### `muting_rules_handling`<sup>Required</sup> <a name="muting_rules_handling" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.mutingRulesHandling"></a>

- *Type:* str

The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#muting_rules_handling Workflow#muting_rules_handling}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.name"></a>

- *Type:* str

(Required) The name of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#name Workflow#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The account id of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#account_id Workflow#account_id}

---

##### `destinations_enabled`<sup>Optional</sup> <a name="destinations_enabled" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.destinationsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the destinations are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#destinations_enabled Workflow#destinations_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the workflow is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#enabled Workflow#enabled}

---

##### `enrichments`<sup>Optional</sup> <a name="enrichments" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enrichments"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

enrichments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#enrichments Workflow#enrichments}

---

##### `enrichments_enabled`<sup>Optional</sup> <a name="enrichments_enabled" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.enrichmentsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the enrichments are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#enrichments_enabled Workflow#enrichments_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#id Workflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putEnrichments">put_enrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter">put_issues_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetDestinationsEnabled">reset_destinations_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnrichments">reset_enrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetEnrichmentsEnabled">reset_enrichments_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.Workflow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.Workflow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.workflow.Workflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.workflow.Workflow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.workflow.Workflow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.workflow.Workflow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.workflow.Workflow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.workflow.Workflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.workflow.Workflow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.Workflow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.Workflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.workflow.Workflow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.Workflow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.workflow.Workflow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-newrelic.workflow.Workflow.putDestination"></a>

```python
def put_destination(
  value: typing.Union[IResolvable, typing.List[WorkflowDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.Workflow.putDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]

---

##### `put_enrichments` <a name="put_enrichments" id="@cdktf/provider-newrelic.workflow.Workflow.putEnrichments"></a>

```python
def put_enrichments(
  nrql: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrql]]
) -> None
```

###### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.workflow.Workflow.putEnrichments.parameter.nrql"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]]

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#nrql Workflow#nrql}

---

##### `put_issues_filter` <a name="put_issues_filter" id="@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter"></a>

```python
def put_issues_filter(
  name: str,
  type: str,
  predicate: typing.Union[IResolvable, typing.List[WorkflowIssuesFilterPredicate]] = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter.parameter.name"></a>

- *Type:* str

(Required) Filter's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#name Workflow#name}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter.parameter.type"></a>

- *Type:* str

(Required) The type of the filter. One of: (FILTER, VIEW).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#type Workflow#type}

---

###### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-newrelic.workflow.Workflow.putIssuesFilter.parameter.predicate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]]

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#predicate Workflow#predicate}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.workflow.Workflow.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_destinations_enabled` <a name="reset_destinations_enabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetDestinationsEnabled"></a>

```python
def reset_destinations_enabled() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enrichments` <a name="reset_enrichments" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnrichments"></a>

```python
def reset_enrichments() -> None
```

##### `reset_enrichments_enabled` <a name="reset_enrichments_enabled" id="@cdktf/provider-newrelic.workflow.Workflow.resetEnrichmentsEnabled"></a>

```python
def reset_enrichments_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.workflow.Workflow.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.workflow.Workflow.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.Workflow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workflow.Workflow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.Workflow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.Workflow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.workflow.Workflow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.Workflow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Workflow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Workflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.Workflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Workflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList">WorkflowDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichments">enrichments</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference">WorkflowEnrichmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.guid">guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilter">issues_filter</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference">WorkflowIssuesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.lastRun">last_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.workflowId">workflow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationInput">destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabledInput">destinations_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabledInput">enrichments_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsInput">enrichments_input</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilterInput">issues_filter_input</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandlingInput">muting_rules_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabled">destinations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabled">enrichments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandling">muting_rules_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.workflow.Workflow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.workflow.Workflow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.Workflow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.workflow.Workflow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.workflow.Workflow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workflow.Workflow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workflow.Workflow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.workflow.Workflow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.workflow.Workflow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workflow.Workflow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.Workflow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workflow.Workflow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-newrelic.workflow.Workflow.property.destination"></a>

```python
destination: WorkflowDestinationList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList">WorkflowDestinationList</a>

---

##### `enrichments`<sup>Required</sup> <a name="enrichments" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichments"></a>

```python
enrichments: WorkflowEnrichmentsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference">WorkflowEnrichmentsOutputReference</a>

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktf/provider-newrelic.workflow.Workflow.property.guid"></a>

```python
guid: str
```

- *Type:* str

---

##### `issues_filter`<sup>Required</sup> <a name="issues_filter" id="@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilter"></a>

```python
issues_filter: WorkflowIssuesFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference">WorkflowIssuesFilterOutputReference</a>

---

##### `last_run`<sup>Required</sup> <a name="last_run" id="@cdktf/provider-newrelic.workflow.Workflow.property.lastRun"></a>

```python
last_run: str
```

- *Type:* str

---

##### `workflow_id`<sup>Required</sup> <a name="workflow_id" id="@cdktf/provider-newrelic.workflow.Workflow.property.workflowId"></a>

```python
workflow_id: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationInput"></a>

```python
destination_input: typing.Union[IResolvable, typing.List[WorkflowDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]

---

##### `destinations_enabled_input`<sup>Optional</sup> <a name="destinations_enabled_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabledInput"></a>

```python
destinations_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enrichments_enabled_input`<sup>Optional</sup> <a name="enrichments_enabled_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabledInput"></a>

```python
enrichments_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enrichments_input`<sup>Optional</sup> <a name="enrichments_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsInput"></a>

```python
enrichments_input: WorkflowEnrichments
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issues_filter_input`<sup>Optional</sup> <a name="issues_filter_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.issuesFilterInput"></a>

```python
issues_filter_input: WorkflowIssuesFilter
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

---

##### `muting_rules_handling_input`<sup>Optional</sup> <a name="muting_rules_handling_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandlingInput"></a>

```python
muting_rules_handling_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.workflow.Workflow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.workflow.Workflow.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destinations_enabled`<sup>Required</sup> <a name="destinations_enabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.destinationsEnabled"></a>

```python
destinations_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enrichments_enabled`<sup>Required</sup> <a name="enrichments_enabled" id="@cdktf/provider-newrelic.workflow.Workflow.property.enrichmentsEnabled"></a>

```python
enrichments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.Workflow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `muting_rules_handling`<sup>Required</sup> <a name="muting_rules_handling" id="@cdktf/provider-newrelic.workflow.Workflow.property.mutingRulesHandling"></a>

```python
muting_rules_handling: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.Workflow.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.Workflow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.workflow.Workflow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowConfig <a name="WorkflowConfig" id="@cdktf/provider-newrelic.workflow.WorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: typing.Union[IResolvable, typing.List[WorkflowDestination]],
  issues_filter: WorkflowIssuesFilter,
  muting_rules_handling: str,
  name: str,
  account_id: typing.Union[int, float] = None,
  destinations_enabled: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  enrichments: WorkflowEnrichments = None,
  enrichments_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destination">destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]</code> | destination block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.issuesFilter">issues_filter</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | issues_filter block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.mutingRulesHandling">muting_rules_handling</a></code> | <code>str</code> | The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES). |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.name">name</a></code> | <code>str</code> | (Required) The name of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The account id of the workflow. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destinationsEnabled">destinations_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the destinations are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the workflow is enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichments">enrichments</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | enrichments block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichmentsEnabled">enrichments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the enrichments are enabled. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#id Workflow#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destination"></a>

```python
destination: typing.Union[IResolvable, typing.List[WorkflowDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#destination Workflow#destination}

---

##### `issues_filter`<sup>Required</sup> <a name="issues_filter" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.issuesFilter"></a>

```python
issues_filter: WorkflowIssuesFilter
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

issues_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#issues_filter Workflow#issues_filter}

---

##### `muting_rules_handling`<sup>Required</sup> <a name="muting_rules_handling" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.mutingRulesHandling"></a>

```python
muting_rules_handling: str
```

- *Type:* str

The type of the muting rule handling. One of: (NOTIFY_ALL_ISSUES, DONT_NOTIFY_FULLY_MUTED_ISSUES, DONT_NOTIFY_FULLY_OR_PARTIALLY_MUTED_ISSUES).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#muting_rules_handling Workflow#muting_rules_handling}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

(Required) The name of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#name Workflow#name}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The account id of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#account_id Workflow#account_id}

---

##### `destinations_enabled`<sup>Optional</sup> <a name="destinations_enabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.destinationsEnabled"></a>

```python
destinations_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the destinations are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#destinations_enabled Workflow#destinations_enabled}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the workflow is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#enabled Workflow#enabled}

---

##### `enrichments`<sup>Optional</sup> <a name="enrichments" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichments"></a>

```python
enrichments: WorkflowEnrichments
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

enrichments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#enrichments Workflow#enrichments}

---

##### `enrichments_enabled`<sup>Optional</sup> <a name="enrichments_enabled" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.enrichmentsEnabled"></a>

```python
enrichments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the enrichments are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#enrichments_enabled Workflow#enrichments_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.workflow.WorkflowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#id Workflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkflowDestination <a name="WorkflowDestination" id="@cdktf/provider-newrelic.workflow.WorkflowDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowDestination(
  channel_id: str,
  notification_triggers: typing.List[str] = None,
  update_original_message: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.channelId">channel_id</a></code> | <code>str</code> | (Required) Destination's channel id. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.notificationTriggers">notification_triggers</a></code> | <code>typing.List[str]</code> | List of triggers to notify about in this destination configuration. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination.property.updateOriginalMessage">update_original_message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Update original notification message (Slack channels only). |

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

(Required) Destination's channel id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#channel_id Workflow#channel_id}

---

##### `notification_triggers`<sup>Optional</sup> <a name="notification_triggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.notificationTriggers"></a>

```python
notification_triggers: typing.List[str]
```

- *Type:* typing.List[str]

List of triggers to notify about in this destination configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#notification_triggers Workflow#notification_triggers}

---

##### `update_original_message`<sup>Optional</sup> <a name="update_original_message" id="@cdktf/provider-newrelic.workflow.WorkflowDestination.property.updateOriginalMessage"></a>

```python
update_original_message: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Update original notification message (Slack channels only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#update_original_message Workflow#update_original_message}

---

### WorkflowEnrichments <a name="WorkflowEnrichments" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowEnrichments(
  nrql: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrql]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments.property.nrql">nrql</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]]</code> | nrql block. |

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichments.property.nrql"></a>

```python
nrql: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrql]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]]

nrql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#nrql Workflow#nrql}

---

### WorkflowEnrichmentsNrql <a name="WorkflowEnrichmentsNrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowEnrichmentsNrql(
  configuration: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrqlConfiguration]],
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]]</code> | configuration block. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.name">name</a></code> | <code>str</code> | (Required) Enrichment's name. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.configuration"></a>

```python
configuration: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrqlConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#configuration Workflow#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql.property.name"></a>

```python
name: str
```

- *Type:* str

(Required) Enrichment's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#name Workflow#name}

---

### WorkflowEnrichmentsNrqlConfiguration <a name="WorkflowEnrichmentsNrqlConfiguration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowEnrichmentsNrqlConfiguration(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.property.query">query</a></code> | <code>str</code> | enrichment's NRQL query. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration.property.query"></a>

```python
query: str
```

- *Type:* str

enrichment's NRQL query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#query Workflow#query}

---

### WorkflowIssuesFilter <a name="WorkflowIssuesFilter" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowIssuesFilter(
  name: str,
  type: str,
  predicate: typing.Union[IResolvable, typing.List[WorkflowIssuesFilterPredicate]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.name">name</a></code> | <code>str</code> | (Required) Filter's name. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.type">type</a></code> | <code>str</code> | (Required) The type of the filter. One of: (FILTER, VIEW). |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.predicate">predicate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]]</code> | predicate block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

(Required) Filter's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#name Workflow#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.type"></a>

```python
type: str
```

- *Type:* str

(Required) The type of the filter. One of: (FILTER, VIEW).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#type Workflow#type}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter.property.predicate"></a>

```python
predicate: typing.Union[IResolvable, typing.List[WorkflowIssuesFilterPredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]]

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#predicate Workflow#predicate}

---

### WorkflowIssuesFilterPredicate <a name="WorkflowIssuesFilterPredicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowIssuesFilterPredicate(
  attribute: str,
  operator: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.attribute">attribute</a></code> | <code>str</code> | (Required) predicate's attribute. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.operator">operator</a></code> | <code>str</code> | The type of the operator. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.values">values</a></code> | <code>typing.List[str]</code> | List of predicate values. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

(Required) predicate's attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#attribute Workflow#attribute}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.operator"></a>

```python
operator: str
```

- *Type:* str

The type of the operator.

One of: (CONTAINS, DOES_NOT_CONTAIN, DOES_NOT_EQUAL, DOES_NOT_EXACTLY_MATCH, ENDS_WITH, EQUAL, EXACTLY_MATCHES, GREATER_OR_EQUAL, GREATER_THAN, IS, IS_NOT, LESS_OR_EQUAL, LESS_THAN, STARTS_WITH).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#operator Workflow#operator}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

List of predicate values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.67.0/docs/resources/workflow#values Workflow#values}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkflowDestinationList <a name="WorkflowDestinationList" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkflowDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkflowDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]]

---


### WorkflowDestinationOutputReference <a name="WorkflowDestinationOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetNotificationTriggers">reset_notification_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetUpdateOriginalMessage">reset_update_original_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notification_triggers` <a name="reset_notification_triggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetNotificationTriggers"></a>

```python
def reset_notification_triggers() -> None
```

##### `reset_update_original_message` <a name="reset_update_original_message" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.resetUpdateOriginalMessage"></a>

```python
def reset_update_original_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggersInput">notification_triggers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessageInput">update_original_message_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggers">notification_triggers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessage">update_original_message</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `notification_triggers_input`<sup>Optional</sup> <a name="notification_triggers_input" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggersInput"></a>

```python
notification_triggers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `update_original_message_input`<sup>Optional</sup> <a name="update_original_message_input" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessageInput"></a>

```python
update_original_message_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `notification_triggers`<sup>Required</sup> <a name="notification_triggers" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.notificationTriggers"></a>

```python
notification_triggers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `update_original_message`<sup>Required</sup> <a name="update_original_message" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.updateOriginalMessage"></a>

```python
update_original_message: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkflowDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.workflow.WorkflowDestination">WorkflowDestination</a>]

---


### WorkflowEnrichmentsNrqlConfigurationList <a name="WorkflowEnrichmentsNrqlConfigurationList" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowEnrichmentsNrqlConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkflowEnrichmentsNrqlConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrqlConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]]

---


### WorkflowEnrichmentsNrqlConfigurationOutputReference <a name="WorkflowEnrichmentsNrqlConfigurationOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkflowEnrichmentsNrqlConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]

---


### WorkflowEnrichmentsNrqlList <a name="WorkflowEnrichmentsNrqlList" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowEnrichmentsNrqlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkflowEnrichmentsNrqlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrql]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]]

---


### WorkflowEnrichmentsNrqlOutputReference <a name="WorkflowEnrichmentsNrqlOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowEnrichmentsNrqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration">put_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration"></a>

```python
def put_configuration(
  value: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrqlConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.putConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList">WorkflowEnrichmentsNrqlConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.enrichmentId">enrichment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configurationInput">configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configuration"></a>

```python
configuration: WorkflowEnrichmentsNrqlConfigurationList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfigurationList">WorkflowEnrichmentsNrqlConfigurationList</a>

---

##### `enrichment_id`<sup>Required</sup> <a name="enrichment_id" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.enrichmentId"></a>

```python
enrichment_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.configurationInput"></a>

```python
configuration_input: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrqlConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlConfiguration">WorkflowEnrichmentsNrqlConfiguration</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkflowEnrichmentsNrql]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]

---


### WorkflowEnrichmentsOutputReference <a name="WorkflowEnrichmentsOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowEnrichmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql">put_nrql</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nrql` <a name="put_nrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql"></a>

```python
def put_nrql(
  value: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrql]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.putNrql.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrql">nrql</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList">WorkflowEnrichmentsNrqlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrqlInput">nrql_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nrql`<sup>Required</sup> <a name="nrql" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrql"></a>

```python
nrql: WorkflowEnrichmentsNrqlList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrqlList">WorkflowEnrichmentsNrqlList</a>

---

##### `nrql_input`<sup>Optional</sup> <a name="nrql_input" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.nrqlInput"></a>

```python
nrql_input: typing.Union[IResolvable, typing.List[WorkflowEnrichmentsNrql]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsNrql">WorkflowEnrichmentsNrql</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowEnrichmentsOutputReference.property.internalValue"></a>

```python
internal_value: WorkflowEnrichments
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowEnrichments">WorkflowEnrichments</a>

---


### WorkflowIssuesFilterOutputReference <a name="WorkflowIssuesFilterOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowIssuesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate">put_predicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resetPredicate">reset_predicate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_predicate` <a name="put_predicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate"></a>

```python
def put_predicate(
  value: typing.Union[IResolvable, typing.List[WorkflowIssuesFilterPredicate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.putPredicate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]]

---

##### `reset_predicate` <a name="reset_predicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.resetPredicate"></a>

```python
def reset_predicate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.filterId">filter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList">WorkflowIssuesFilterPredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicateInput">predicate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_id`<sup>Required</sup> <a name="filter_id" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.filterId"></a>

```python
filter_id: str
```

- *Type:* str

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicate"></a>

```python
predicate: WorkflowIssuesFilterPredicateList
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList">WorkflowIssuesFilterPredicateList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `predicate_input`<sup>Optional</sup> <a name="predicate_input" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.predicateInput"></a>

```python
predicate_input: typing.Union[IResolvable, typing.List[WorkflowIssuesFilterPredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterOutputReference.property.internalValue"></a>

```python
internal_value: WorkflowIssuesFilter
```

- *Type:* <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilter">WorkflowIssuesFilter</a>

---


### WorkflowIssuesFilterPredicateList <a name="WorkflowIssuesFilterPredicateList" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowIssuesFilterPredicateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkflowIssuesFilterPredicateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkflowIssuesFilterPredicate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]]

---


### WorkflowIssuesFilterPredicateOutputReference <a name="WorkflowIssuesFilterPredicateOutputReference" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import workflow

workflow.WorkflowIssuesFilterPredicateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkflowIssuesFilterPredicate]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-newrelic.workflow.WorkflowIssuesFilterPredicate">WorkflowIssuesFilterPredicate</a>]

---



