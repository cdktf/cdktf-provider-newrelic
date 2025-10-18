# `cloudGcpIntegrations` Submodule <a name="`cloudGcpIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudGcpIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGcpIntegrations <a name="CloudGcpIntegrations" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations newrelic_cloud_gcp_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrations(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  linked_account_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  alloy_db: CloudGcpIntegrationsAlloyDb = None,
  app_engine: CloudGcpIntegrationsAppEngine = None,
  big_query: CloudGcpIntegrationsBigQuery = None,
  big_table: CloudGcpIntegrationsBigTable = None,
  composer: CloudGcpIntegrationsComposer = None,
  data_flow: CloudGcpIntegrationsDataFlow = None,
  data_proc: CloudGcpIntegrationsDataProc = None,
  data_store: CloudGcpIntegrationsDataStore = None,
  fire_base_database: CloudGcpIntegrationsFireBaseDatabase = None,
  fire_base_hosting: CloudGcpIntegrationsFireBaseHosting = None,
  fire_base_storage: CloudGcpIntegrationsFireBaseStorage = None,
  fire_store: CloudGcpIntegrationsFireStore = None,
  functions: CloudGcpIntegrationsFunctions = None,
  id: str = None,
  interconnect: CloudGcpIntegrationsInterconnect = None,
  kubernetes: CloudGcpIntegrationsKubernetes = None,
  load_balancing: CloudGcpIntegrationsLoadBalancing = None,
  mem_cache: CloudGcpIntegrationsMemCache = None,
  pub_sub: CloudGcpIntegrationsPubSub = None,
  redis: CloudGcpIntegrationsRedis = None,
  router: CloudGcpIntegrationsRouter = None,
  run: CloudGcpIntegrationsRun = None,
  spanner: CloudGcpIntegrationsSpanner = None,
  sql: CloudGcpIntegrationsSql = None,
  storage: CloudGcpIntegrationsStorage = None,
  virtual_machines: CloudGcpIntegrationsVirtualMachines = None,
  vpc_access: CloudGcpIntegrationsVpcAccess = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | Id of the linked gcp account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.alloyDb">alloy_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.bigQuery">big_query</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.bigTable">big_table</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.composer">composer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataFlow">data_flow</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataProc">data_proc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataStore">data_store</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseDatabase">fire_base_database</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | fire_base_database block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseHosting">fire_base_hosting</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | fire_base_hosting block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseStorage">fire_base_storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | fire_base_storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireStore">fire_store</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | fire_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.interconnect">interconnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.memCache">mem_cache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.pubSub">pub_sub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.redis">redis</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.router">router</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.run">run</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.spanner">spanner</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.virtualMachines">virtual_machines</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* typing.Union[int, float]

Id of the linked gcp account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#linked_account_id CloudGcpIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#account_id CloudGcpIntegrations#account_id}

---

##### `alloy_db`<sup>Optional</sup> <a name="alloy_db" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.alloyDb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#alloy_db CloudGcpIntegrations#alloy_db}

---

##### `app_engine`<sup>Optional</sup> <a name="app_engine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.appEngine"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#app_engine CloudGcpIntegrations#app_engine}

---

##### `big_query`<sup>Optional</sup> <a name="big_query" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.bigQuery"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#big_query CloudGcpIntegrations#big_query}

---

##### `big_table`<sup>Optional</sup> <a name="big_table" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.bigTable"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#big_table CloudGcpIntegrations#big_table}

---

##### `composer`<sup>Optional</sup> <a name="composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.composer"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#composer CloudGcpIntegrations#composer}

---

##### `data_flow`<sup>Optional</sup> <a name="data_flow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataFlow"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#data_flow CloudGcpIntegrations#data_flow}

---

##### `data_proc`<sup>Optional</sup> <a name="data_proc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataProc"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#data_proc CloudGcpIntegrations#data_proc}

---

##### `data_store`<sup>Optional</sup> <a name="data_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataStore"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#data_store CloudGcpIntegrations#data_store}

---

##### `fire_base_database`<sup>Optional</sup> <a name="fire_base_database" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseDatabase"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

fire_base_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fire_base_database CloudGcpIntegrations#fire_base_database}

---

##### `fire_base_hosting`<sup>Optional</sup> <a name="fire_base_hosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseHosting"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

fire_base_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fire_base_hosting CloudGcpIntegrations#fire_base_hosting}

---

##### `fire_base_storage`<sup>Optional</sup> <a name="fire_base_storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseStorage"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

fire_base_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fire_base_storage CloudGcpIntegrations#fire_base_storage}

---

##### `fire_store`<sup>Optional</sup> <a name="fire_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireStore"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

fire_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fire_store CloudGcpIntegrations#fire_store}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.functions"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#functions CloudGcpIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.interconnect"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#interconnect CloudGcpIntegrations#interconnect}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#kubernetes CloudGcpIntegrations#kubernetes}

---

##### `load_balancing`<sup>Optional</sup> <a name="load_balancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.loadBalancing"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#load_balancing CloudGcpIntegrations#load_balancing}

---

##### `mem_cache`<sup>Optional</sup> <a name="mem_cache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.memCache"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#mem_cache CloudGcpIntegrations#mem_cache}

---

##### `pub_sub`<sup>Optional</sup> <a name="pub_sub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.pubSub"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#pub_sub CloudGcpIntegrations#pub_sub}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.redis"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#redis CloudGcpIntegrations#redis}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.router"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#router CloudGcpIntegrations#router}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.run"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#run CloudGcpIntegrations#run}

---

##### `spanner`<sup>Optional</sup> <a name="spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.spanner"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#spanner CloudGcpIntegrations#spanner}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.sql"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#sql CloudGcpIntegrations#sql}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#storage CloudGcpIntegrations#storage}

---

##### `virtual_machines`<sup>Optional</sup> <a name="virtual_machines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.virtualMachines"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#virtual_machines CloudGcpIntegrations#virtual_machines}

---

##### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.vpcAccess"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#vpc_access CloudGcpIntegrations#vpc_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb">put_alloy_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine">put_app_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery">put_big_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable">put_big_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer">put_composer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow">put_data_flow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc">put_data_proc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore">put_data_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase">put_fire_base_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting">put_fire_base_hosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage">put_fire_base_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore">put_fire_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions">put_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect">put_interconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes">put_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing">put_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache">put_mem_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub">put_pub_sub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis">put_redis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter">put_router</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun">put_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner">put_spanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql">put_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines">put_virtual_machines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess">put_vpc_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAlloyDb">reset_alloy_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAppEngine">reset_app_engine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigQuery">reset_big_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigTable">reset_big_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetComposer">reset_composer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataFlow">reset_data_flow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataProc">reset_data_proc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataStore">reset_data_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseDatabase">reset_fire_base_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseHosting">reset_fire_base_hosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseStorage">reset_fire_base_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireStore">reset_fire_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFunctions">reset_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetInterconnect">reset_interconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetKubernetes">reset_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetLoadBalancing">reset_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetMemCache">reset_mem_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetPubSub">reset_pub_sub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRedis">reset_redis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRouter">reset_router</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRun">reset_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSpanner">reset_spanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVirtualMachines">reset_virtual_machines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVpcAccess">reset_vpc_access</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alloy_db` <a name="put_alloy_db" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb"></a>

```python
def put_alloy_db(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_app_engine` <a name="put_app_engine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine"></a>

```python
def put_app_engine(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_big_query` <a name="put_big_query" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery"></a>

```python
def put_big_query(
  fetch_tags: bool | IResolvable = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery.parameter.fetchTags"></a>

- *Type:* bool | cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_big_table` <a name="put_big_table" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable"></a>

```python
def put_big_table(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_composer` <a name="put_composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer"></a>

```python
def put_composer(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_data_flow` <a name="put_data_flow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow"></a>

```python
def put_data_flow(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_data_proc` <a name="put_data_proc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc"></a>

```python
def put_data_proc(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_data_store` <a name="put_data_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore"></a>

```python
def put_data_store(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_fire_base_database` <a name="put_fire_base_database" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase"></a>

```python
def put_fire_base_database(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_fire_base_hosting` <a name="put_fire_base_hosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting"></a>

```python
def put_fire_base_hosting(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_fire_base_storage` <a name="put_fire_base_storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage"></a>

```python
def put_fire_base_storage(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_fire_store` <a name="put_fire_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore"></a>

```python
def put_fire_store(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_functions` <a name="put_functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions"></a>

```python
def put_functions(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_interconnect` <a name="put_interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect"></a>

```python
def put_interconnect(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_kubernetes` <a name="put_kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes"></a>

```python
def put_kubernetes(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_load_balancing` <a name="put_load_balancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing"></a>

```python
def put_load_balancing(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_mem_cache` <a name="put_mem_cache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache"></a>

```python
def put_mem_cache(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_pub_sub` <a name="put_pub_sub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub"></a>

```python
def put_pub_sub(
  fetch_tags: bool | IResolvable = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub.parameter.fetchTags"></a>

- *Type:* bool | cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_redis` <a name="put_redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis"></a>

```python
def put_redis(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_router` <a name="put_router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter"></a>

```python
def put_router(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_run` <a name="put_run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun"></a>

```python
def put_run(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_spanner` <a name="put_spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner"></a>

```python
def put_spanner(
  fetch_tags: bool | IResolvable = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner.parameter.fetchTags"></a>

- *Type:* bool | cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_sql` <a name="put_sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql"></a>

```python
def put_sql(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_storage` <a name="put_storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage"></a>

```python
def put_storage(
  fetch_tags: bool | IResolvable = None,
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage.parameter.fetchTags"></a>

- *Type:* bool | cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_virtual_machines` <a name="put_virtual_machines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines"></a>

```python
def put_virtual_machines(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `put_vpc_access` <a name="put_vpc_access" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess"></a>

```python
def put_vpc_access(
  metrics_polling_interval: typing.Union[int, float] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_alloy_db` <a name="reset_alloy_db" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAlloyDb"></a>

```python
def reset_alloy_db() -> None
```

##### `reset_app_engine` <a name="reset_app_engine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAppEngine"></a>

```python
def reset_app_engine() -> None
```

##### `reset_big_query` <a name="reset_big_query" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigQuery"></a>

```python
def reset_big_query() -> None
```

##### `reset_big_table` <a name="reset_big_table" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigTable"></a>

```python
def reset_big_table() -> None
```

##### `reset_composer` <a name="reset_composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetComposer"></a>

```python
def reset_composer() -> None
```

##### `reset_data_flow` <a name="reset_data_flow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataFlow"></a>

```python
def reset_data_flow() -> None
```

##### `reset_data_proc` <a name="reset_data_proc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataProc"></a>

```python
def reset_data_proc() -> None
```

##### `reset_data_store` <a name="reset_data_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataStore"></a>

```python
def reset_data_store() -> None
```

##### `reset_fire_base_database` <a name="reset_fire_base_database" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseDatabase"></a>

```python
def reset_fire_base_database() -> None
```

##### `reset_fire_base_hosting` <a name="reset_fire_base_hosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseHosting"></a>

```python
def reset_fire_base_hosting() -> None
```

##### `reset_fire_base_storage` <a name="reset_fire_base_storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseStorage"></a>

```python
def reset_fire_base_storage() -> None
```

##### `reset_fire_store` <a name="reset_fire_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireStore"></a>

```python
def reset_fire_store() -> None
```

##### `reset_functions` <a name="reset_functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFunctions"></a>

```python
def reset_functions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interconnect` <a name="reset_interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetInterconnect"></a>

```python
def reset_interconnect() -> None
```

##### `reset_kubernetes` <a name="reset_kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetKubernetes"></a>

```python
def reset_kubernetes() -> None
```

##### `reset_load_balancing` <a name="reset_load_balancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetLoadBalancing"></a>

```python
def reset_load_balancing() -> None
```

##### `reset_mem_cache` <a name="reset_mem_cache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetMemCache"></a>

```python
def reset_mem_cache() -> None
```

##### `reset_pub_sub` <a name="reset_pub_sub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetPubSub"></a>

```python
def reset_pub_sub() -> None
```

##### `reset_redis` <a name="reset_redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRedis"></a>

```python
def reset_redis() -> None
```

##### `reset_router` <a name="reset_router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRouter"></a>

```python
def reset_router() -> None
```

##### `reset_run` <a name="reset_run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRun"></a>

```python
def reset_run() -> None
```

##### `reset_spanner` <a name="reset_spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSpanner"></a>

```python
def reset_spanner() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_virtual_machines` <a name="reset_virtual_machines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVirtualMachines"></a>

```python
def reset_virtual_machines() -> None
```

##### `reset_vpc_access` <a name="reset_vpc_access" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVpcAccess"></a>

```python
def reset_vpc_access() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudGcpIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrations.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudGcpIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudGcpIntegrations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudGcpIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudGcpIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDb">alloy_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference">CloudGcpIntegrationsAlloyDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference">CloudGcpIntegrationsAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQuery">big_query</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference">CloudGcpIntegrationsBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTable">big_table</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference">CloudGcpIntegrationsBigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composer">composer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference">CloudGcpIntegrationsComposerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlow">data_flow</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference">CloudGcpIntegrationsDataFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProc">data_proc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference">CloudGcpIntegrationsDataProcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStore">data_store</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference">CloudGcpIntegrationsDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabase">fire_base_database</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference">CloudGcpIntegrationsFireBaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHosting">fire_base_hosting</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference">CloudGcpIntegrationsFireBaseHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorage">fire_base_storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference">CloudGcpIntegrationsFireBaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStore">fire_store</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference">CloudGcpIntegrationsFireStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference">CloudGcpIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnect">interconnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference">CloudGcpIntegrationsInterconnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference">CloudGcpIntegrationsKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference">CloudGcpIntegrationsLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCache">mem_cache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference">CloudGcpIntegrationsMemCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSub">pub_sub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference">CloudGcpIntegrationsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference">CloudGcpIntegrationsRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.router">router</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference">CloudGcpIntegrationsRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.run">run</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference">CloudGcpIntegrationsRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spanner">spanner</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference">CloudGcpIntegrationsSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference">CloudGcpIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference">CloudGcpIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachines">virtual_machines</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference">CloudGcpIntegrationsVirtualMachinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference">CloudGcpIntegrationsVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDbInput">alloy_db_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngineInput">app_engine_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQueryInput">big_query_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTableInput">big_table_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composerInput">composer_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlowInput">data_flow_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProcInput">data_proc_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStoreInput">data_store_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabaseInput">fire_base_database_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHostingInput">fire_base_hosting_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorageInput">fire_base_storage_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStoreInput">fire_store_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functionsInput">functions_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnectInput">interconnect_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetesInput">kubernetes_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountIdInput">linked_account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancingInput">load_balancing_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCacheInput">mem_cache_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSubInput">pub_sub_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redisInput">redis_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.routerInput">router_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.runInput">run_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spannerInput">spanner_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sqlInput">sql_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storageInput">storage_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachinesInput">virtual_machines_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccessInput">vpc_access_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `alloy_db`<sup>Required</sup> <a name="alloy_db" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDb"></a>

```python
alloy_db: CloudGcpIntegrationsAlloyDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference">CloudGcpIntegrationsAlloyDbOutputReference</a>

---

##### `app_engine`<sup>Required</sup> <a name="app_engine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngine"></a>

```python
app_engine: CloudGcpIntegrationsAppEngineOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference">CloudGcpIntegrationsAppEngineOutputReference</a>

---

##### `big_query`<sup>Required</sup> <a name="big_query" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQuery"></a>

```python
big_query: CloudGcpIntegrationsBigQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference">CloudGcpIntegrationsBigQueryOutputReference</a>

---

##### `big_table`<sup>Required</sup> <a name="big_table" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTable"></a>

```python
big_table: CloudGcpIntegrationsBigTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference">CloudGcpIntegrationsBigTableOutputReference</a>

---

##### `composer`<sup>Required</sup> <a name="composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composer"></a>

```python
composer: CloudGcpIntegrationsComposerOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference">CloudGcpIntegrationsComposerOutputReference</a>

---

##### `data_flow`<sup>Required</sup> <a name="data_flow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlow"></a>

```python
data_flow: CloudGcpIntegrationsDataFlowOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference">CloudGcpIntegrationsDataFlowOutputReference</a>

---

##### `data_proc`<sup>Required</sup> <a name="data_proc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProc"></a>

```python
data_proc: CloudGcpIntegrationsDataProcOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference">CloudGcpIntegrationsDataProcOutputReference</a>

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStore"></a>

```python
data_store: CloudGcpIntegrationsDataStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference">CloudGcpIntegrationsDataStoreOutputReference</a>

---

##### `fire_base_database`<sup>Required</sup> <a name="fire_base_database" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabase"></a>

```python
fire_base_database: CloudGcpIntegrationsFireBaseDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference">CloudGcpIntegrationsFireBaseDatabaseOutputReference</a>

---

##### `fire_base_hosting`<sup>Required</sup> <a name="fire_base_hosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHosting"></a>

```python
fire_base_hosting: CloudGcpIntegrationsFireBaseHostingOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference">CloudGcpIntegrationsFireBaseHostingOutputReference</a>

---

##### `fire_base_storage`<sup>Required</sup> <a name="fire_base_storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorage"></a>

```python
fire_base_storage: CloudGcpIntegrationsFireBaseStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference">CloudGcpIntegrationsFireBaseStorageOutputReference</a>

---

##### `fire_store`<sup>Required</sup> <a name="fire_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStore"></a>

```python
fire_store: CloudGcpIntegrationsFireStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference">CloudGcpIntegrationsFireStoreOutputReference</a>

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functions"></a>

```python
functions: CloudGcpIntegrationsFunctionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference">CloudGcpIntegrationsFunctionsOutputReference</a>

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnect"></a>

```python
interconnect: CloudGcpIntegrationsInterconnectOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference">CloudGcpIntegrationsInterconnectOutputReference</a>

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetes"></a>

```python
kubernetes: CloudGcpIntegrationsKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference">CloudGcpIntegrationsKubernetesOutputReference</a>

---

##### `load_balancing`<sup>Required</sup> <a name="load_balancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancing"></a>

```python
load_balancing: CloudGcpIntegrationsLoadBalancingOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference">CloudGcpIntegrationsLoadBalancingOutputReference</a>

---

##### `mem_cache`<sup>Required</sup> <a name="mem_cache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCache"></a>

```python
mem_cache: CloudGcpIntegrationsMemCacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference">CloudGcpIntegrationsMemCacheOutputReference</a>

---

##### `pub_sub`<sup>Required</sup> <a name="pub_sub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSub"></a>

```python
pub_sub: CloudGcpIntegrationsPubSubOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference">CloudGcpIntegrationsPubSubOutputReference</a>

---

##### `redis`<sup>Required</sup> <a name="redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redis"></a>

```python
redis: CloudGcpIntegrationsRedisOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference">CloudGcpIntegrationsRedisOutputReference</a>

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.router"></a>

```python
router: CloudGcpIntegrationsRouterOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference">CloudGcpIntegrationsRouterOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.run"></a>

```python
run: CloudGcpIntegrationsRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference">CloudGcpIntegrationsRunOutputReference</a>

---

##### `spanner`<sup>Required</sup> <a name="spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spanner"></a>

```python
spanner: CloudGcpIntegrationsSpannerOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference">CloudGcpIntegrationsSpannerOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sql"></a>

```python
sql: CloudGcpIntegrationsSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference">CloudGcpIntegrationsSqlOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storage"></a>

```python
storage: CloudGcpIntegrationsStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference">CloudGcpIntegrationsStorageOutputReference</a>

---

##### `virtual_machines`<sup>Required</sup> <a name="virtual_machines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachines"></a>

```python
virtual_machines: CloudGcpIntegrationsVirtualMachinesOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference">CloudGcpIntegrationsVirtualMachinesOutputReference</a>

---

##### `vpc_access`<sup>Required</sup> <a name="vpc_access" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccess"></a>

```python
vpc_access: CloudGcpIntegrationsVpcAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference">CloudGcpIntegrationsVpcAccessOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `alloy_db_input`<sup>Optional</sup> <a name="alloy_db_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDbInput"></a>

```python
alloy_db_input: CloudGcpIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

---

##### `app_engine_input`<sup>Optional</sup> <a name="app_engine_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngineInput"></a>

```python
app_engine_input: CloudGcpIntegrationsAppEngine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

---

##### `big_query_input`<sup>Optional</sup> <a name="big_query_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQueryInput"></a>

```python
big_query_input: CloudGcpIntegrationsBigQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

---

##### `big_table_input`<sup>Optional</sup> <a name="big_table_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTableInput"></a>

```python
big_table_input: CloudGcpIntegrationsBigTable
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

---

##### `composer_input`<sup>Optional</sup> <a name="composer_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composerInput"></a>

```python
composer_input: CloudGcpIntegrationsComposer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

---

##### `data_flow_input`<sup>Optional</sup> <a name="data_flow_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlowInput"></a>

```python
data_flow_input: CloudGcpIntegrationsDataFlow
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

---

##### `data_proc_input`<sup>Optional</sup> <a name="data_proc_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProcInput"></a>

```python
data_proc_input: CloudGcpIntegrationsDataProc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStoreInput"></a>

```python
data_store_input: CloudGcpIntegrationsDataStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

---

##### `fire_base_database_input`<sup>Optional</sup> <a name="fire_base_database_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabaseInput"></a>

```python
fire_base_database_input: CloudGcpIntegrationsFireBaseDatabase
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

---

##### `fire_base_hosting_input`<sup>Optional</sup> <a name="fire_base_hosting_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHostingInput"></a>

```python
fire_base_hosting_input: CloudGcpIntegrationsFireBaseHosting
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

---

##### `fire_base_storage_input`<sup>Optional</sup> <a name="fire_base_storage_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorageInput"></a>

```python
fire_base_storage_input: CloudGcpIntegrationsFireBaseStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

---

##### `fire_store_input`<sup>Optional</sup> <a name="fire_store_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStoreInput"></a>

```python
fire_store_input: CloudGcpIntegrationsFireStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

---

##### `functions_input`<sup>Optional</sup> <a name="functions_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functionsInput"></a>

```python
functions_input: CloudGcpIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interconnect_input`<sup>Optional</sup> <a name="interconnect_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnectInput"></a>

```python
interconnect_input: CloudGcpIntegrationsInterconnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

---

##### `kubernetes_input`<sup>Optional</sup> <a name="kubernetes_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetesInput"></a>

```python
kubernetes_input: CloudGcpIntegrationsKubernetes
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

---

##### `linked_account_id_input`<sup>Optional</sup> <a name="linked_account_id_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountIdInput"></a>

```python
linked_account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancing_input`<sup>Optional</sup> <a name="load_balancing_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancingInput"></a>

```python
load_balancing_input: CloudGcpIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

---

##### `mem_cache_input`<sup>Optional</sup> <a name="mem_cache_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCacheInput"></a>

```python
mem_cache_input: CloudGcpIntegrationsMemCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

---

##### `pub_sub_input`<sup>Optional</sup> <a name="pub_sub_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSubInput"></a>

```python
pub_sub_input: CloudGcpIntegrationsPubSub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

---

##### `redis_input`<sup>Optional</sup> <a name="redis_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redisInput"></a>

```python
redis_input: CloudGcpIntegrationsRedis
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.routerInput"></a>

```python
router_input: CloudGcpIntegrationsRouter
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

---

##### `run_input`<sup>Optional</sup> <a name="run_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.runInput"></a>

```python
run_input: CloudGcpIntegrationsRun
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

---

##### `spanner_input`<sup>Optional</sup> <a name="spanner_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spannerInput"></a>

```python
spanner_input: CloudGcpIntegrationsSpanner
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sqlInput"></a>

```python
sql_input: CloudGcpIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storageInput"></a>

```python
storage_input: CloudGcpIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

---

##### `virtual_machines_input`<sup>Optional</sup> <a name="virtual_machines_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachinesInput"></a>

```python
virtual_machines_input: CloudGcpIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

---

##### `vpc_access_input`<sup>Optional</sup> <a name="vpc_access_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccessInput"></a>

```python
vpc_access_input: CloudGcpIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGcpIntegrationsAlloyDb <a name="CloudGcpIntegrationsAlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsAppEngine <a name="CloudGcpIntegrationsAppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsAppEngine(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsBigQuery <a name="CloudGcpIntegrationsBigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsBigQuery(
  fetch_tags: bool | IResolvable = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.fetchTags">fetch_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.fetchTags"></a>

```python
fetch_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsBigTable <a name="CloudGcpIntegrationsBigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsBigTable(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsComposer <a name="CloudGcpIntegrationsComposer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsComposer(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsConfig <a name="CloudGcpIntegrationsConfig" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  linked_account_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  alloy_db: CloudGcpIntegrationsAlloyDb = None,
  app_engine: CloudGcpIntegrationsAppEngine = None,
  big_query: CloudGcpIntegrationsBigQuery = None,
  big_table: CloudGcpIntegrationsBigTable = None,
  composer: CloudGcpIntegrationsComposer = None,
  data_flow: CloudGcpIntegrationsDataFlow = None,
  data_proc: CloudGcpIntegrationsDataProc = None,
  data_store: CloudGcpIntegrationsDataStore = None,
  fire_base_database: CloudGcpIntegrationsFireBaseDatabase = None,
  fire_base_hosting: CloudGcpIntegrationsFireBaseHosting = None,
  fire_base_storage: CloudGcpIntegrationsFireBaseStorage = None,
  fire_store: CloudGcpIntegrationsFireStore = None,
  functions: CloudGcpIntegrationsFunctions = None,
  id: str = None,
  interconnect: CloudGcpIntegrationsInterconnect = None,
  kubernetes: CloudGcpIntegrationsKubernetes = None,
  load_balancing: CloudGcpIntegrationsLoadBalancing = None,
  mem_cache: CloudGcpIntegrationsMemCache = None,
  pub_sub: CloudGcpIntegrationsPubSub = None,
  redis: CloudGcpIntegrationsRedis = None,
  router: CloudGcpIntegrationsRouter = None,
  run: CloudGcpIntegrationsRun = None,
  spanner: CloudGcpIntegrationsSpanner = None,
  sql: CloudGcpIntegrationsSql = None,
  storage: CloudGcpIntegrationsStorage = None,
  virtual_machines: CloudGcpIntegrationsVirtualMachines = None,
  vpc_access: CloudGcpIntegrationsVpcAccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | Id of the linked gcp account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.alloyDb">alloy_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.appEngine">app_engine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigQuery">big_query</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigTable">big_table</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.composer">composer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataFlow">data_flow</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataProc">data_proc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataStore">data_store</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseDatabase">fire_base_database</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | fire_base_database block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseHosting">fire_base_hosting</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | fire_base_hosting block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseStorage">fire_base_storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | fire_base_storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireStore">fire_store</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | fire_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.interconnect">interconnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.loadBalancing">load_balancing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.memCache">mem_cache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.pubSub">pub_sub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.router">router</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.run">run</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.spanner">spanner</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.virtualMachines">virtual_machines</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.vpcAccess">vpc_access</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Id of the linked gcp account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#linked_account_id CloudGcpIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#account_id CloudGcpIntegrations#account_id}

---

##### `alloy_db`<sup>Optional</sup> <a name="alloy_db" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.alloyDb"></a>

```python
alloy_db: CloudGcpIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#alloy_db CloudGcpIntegrations#alloy_db}

---

##### `app_engine`<sup>Optional</sup> <a name="app_engine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.appEngine"></a>

```python
app_engine: CloudGcpIntegrationsAppEngine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#app_engine CloudGcpIntegrations#app_engine}

---

##### `big_query`<sup>Optional</sup> <a name="big_query" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigQuery"></a>

```python
big_query: CloudGcpIntegrationsBigQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#big_query CloudGcpIntegrations#big_query}

---

##### `big_table`<sup>Optional</sup> <a name="big_table" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigTable"></a>

```python
big_table: CloudGcpIntegrationsBigTable
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#big_table CloudGcpIntegrations#big_table}

---

##### `composer`<sup>Optional</sup> <a name="composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.composer"></a>

```python
composer: CloudGcpIntegrationsComposer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#composer CloudGcpIntegrations#composer}

---

##### `data_flow`<sup>Optional</sup> <a name="data_flow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataFlow"></a>

```python
data_flow: CloudGcpIntegrationsDataFlow
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#data_flow CloudGcpIntegrations#data_flow}

---

##### `data_proc`<sup>Optional</sup> <a name="data_proc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataProc"></a>

```python
data_proc: CloudGcpIntegrationsDataProc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#data_proc CloudGcpIntegrations#data_proc}

---

##### `data_store`<sup>Optional</sup> <a name="data_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataStore"></a>

```python
data_store: CloudGcpIntegrationsDataStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#data_store CloudGcpIntegrations#data_store}

---

##### `fire_base_database`<sup>Optional</sup> <a name="fire_base_database" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseDatabase"></a>

```python
fire_base_database: CloudGcpIntegrationsFireBaseDatabase
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

fire_base_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fire_base_database CloudGcpIntegrations#fire_base_database}

---

##### `fire_base_hosting`<sup>Optional</sup> <a name="fire_base_hosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseHosting"></a>

```python
fire_base_hosting: CloudGcpIntegrationsFireBaseHosting
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

fire_base_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fire_base_hosting CloudGcpIntegrations#fire_base_hosting}

---

##### `fire_base_storage`<sup>Optional</sup> <a name="fire_base_storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseStorage"></a>

```python
fire_base_storage: CloudGcpIntegrationsFireBaseStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

fire_base_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fire_base_storage CloudGcpIntegrations#fire_base_storage}

---

##### `fire_store`<sup>Optional</sup> <a name="fire_store" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireStore"></a>

```python
fire_store: CloudGcpIntegrationsFireStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

fire_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fire_store CloudGcpIntegrations#fire_store}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.functions"></a>

```python
functions: CloudGcpIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#functions CloudGcpIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.interconnect"></a>

```python
interconnect: CloudGcpIntegrationsInterconnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#interconnect CloudGcpIntegrations#interconnect}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.kubernetes"></a>

```python
kubernetes: CloudGcpIntegrationsKubernetes
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#kubernetes CloudGcpIntegrations#kubernetes}

---

##### `load_balancing`<sup>Optional</sup> <a name="load_balancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.loadBalancing"></a>

```python
load_balancing: CloudGcpIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#load_balancing CloudGcpIntegrations#load_balancing}

---

##### `mem_cache`<sup>Optional</sup> <a name="mem_cache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.memCache"></a>

```python
mem_cache: CloudGcpIntegrationsMemCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#mem_cache CloudGcpIntegrations#mem_cache}

---

##### `pub_sub`<sup>Optional</sup> <a name="pub_sub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.pubSub"></a>

```python
pub_sub: CloudGcpIntegrationsPubSub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#pub_sub CloudGcpIntegrations#pub_sub}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.redis"></a>

```python
redis: CloudGcpIntegrationsRedis
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#redis CloudGcpIntegrations#redis}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.router"></a>

```python
router: CloudGcpIntegrationsRouter
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#router CloudGcpIntegrations#router}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.run"></a>

```python
run: CloudGcpIntegrationsRun
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#run CloudGcpIntegrations#run}

---

##### `spanner`<sup>Optional</sup> <a name="spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.spanner"></a>

```python
spanner: CloudGcpIntegrationsSpanner
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#spanner CloudGcpIntegrations#spanner}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.sql"></a>

```python
sql: CloudGcpIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#sql CloudGcpIntegrations#sql}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.storage"></a>

```python
storage: CloudGcpIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#storage CloudGcpIntegrations#storage}

---

##### `virtual_machines`<sup>Optional</sup> <a name="virtual_machines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.virtualMachines"></a>

```python
virtual_machines: CloudGcpIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#virtual_machines CloudGcpIntegrations#virtual_machines}

---

##### `vpc_access`<sup>Optional</sup> <a name="vpc_access" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.vpcAccess"></a>

```python
vpc_access: CloudGcpIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#vpc_access CloudGcpIntegrations#vpc_access}

---

### CloudGcpIntegrationsDataFlow <a name="CloudGcpIntegrationsDataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsDataFlow(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsDataProc <a name="CloudGcpIntegrationsDataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsDataProc(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsDataStore <a name="CloudGcpIntegrationsDataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsDataStore(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseDatabase <a name="CloudGcpIntegrationsFireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseHosting <a name="CloudGcpIntegrationsFireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseStorage <a name="CloudGcpIntegrationsFireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireStore <a name="CloudGcpIntegrationsFireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFireStore(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFunctions <a name="CloudGcpIntegrationsFunctions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFunctions(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsInterconnect <a name="CloudGcpIntegrationsInterconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsInterconnect(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsKubernetes <a name="CloudGcpIntegrationsKubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsKubernetes(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsLoadBalancing <a name="CloudGcpIntegrationsLoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsMemCache <a name="CloudGcpIntegrationsMemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsMemCache(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsPubSub <a name="CloudGcpIntegrationsPubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsPubSub(
  fetch_tags: bool | IResolvable = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.fetchTags">fetch_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.fetchTags"></a>

```python
fetch_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRedis <a name="CloudGcpIntegrationsRedis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsRedis(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRouter <a name="CloudGcpIntegrationsRouter" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsRouter(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRun <a name="CloudGcpIntegrationsRun" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsRun(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsSpanner <a name="CloudGcpIntegrationsSpanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsSpanner(
  fetch_tags: bool | IResolvable = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.fetchTags">fetch_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.fetchTags"></a>

```python
fetch_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsSql <a name="CloudGcpIntegrationsSql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsSql(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsStorage <a name="CloudGcpIntegrationsStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsStorage(
  fetch_tags: bool | IResolvable = None,
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.fetchTags">fetch_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `fetch_tags`<sup>Optional</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.fetchTags"></a>

```python
fetch_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsVirtualMachines <a name="CloudGcpIntegrationsVirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsVpcAccess <a name="CloudGcpIntegrationsVpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess(
  metrics_polling_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | the data polling interval in seconds. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.72.3/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGcpIntegrationsAlloyDbOutputReference <a name="CloudGcpIntegrationsAlloyDbOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsAlloyDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

---


### CloudGcpIntegrationsAppEngineOutputReference <a name="CloudGcpIntegrationsAppEngineOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsAppEngine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

---


### CloudGcpIntegrationsBigQueryOutputReference <a name="CloudGcpIntegrationsBigQueryOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetFetchTags">reset_fetch_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fetch_tags` <a name="reset_fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetFetchTags"></a>

```python
def reset_fetch_tags() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTagsInput">fetch_tags_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTags">fetch_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fetch_tags_input`<sup>Optional</sup> <a name="fetch_tags_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTagsInput"></a>

```python
fetch_tags_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fetch_tags`<sup>Required</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTags"></a>

```python
fetch_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsBigQuery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

---


### CloudGcpIntegrationsBigTableOutputReference <a name="CloudGcpIntegrationsBigTableOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsBigTable
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

---


### CloudGcpIntegrationsComposerOutputReference <a name="CloudGcpIntegrationsComposerOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsComposer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

---


### CloudGcpIntegrationsDataFlowOutputReference <a name="CloudGcpIntegrationsDataFlowOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsDataFlow
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

---


### CloudGcpIntegrationsDataProcOutputReference <a name="CloudGcpIntegrationsDataProcOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsDataProc
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

---


### CloudGcpIntegrationsDataStoreOutputReference <a name="CloudGcpIntegrationsDataStoreOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsDataStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

---


### CloudGcpIntegrationsFireBaseDatabaseOutputReference <a name="CloudGcpIntegrationsFireBaseDatabaseOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsFireBaseDatabase
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

---


### CloudGcpIntegrationsFireBaseHostingOutputReference <a name="CloudGcpIntegrationsFireBaseHostingOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsFireBaseHosting
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

---


### CloudGcpIntegrationsFireBaseStorageOutputReference <a name="CloudGcpIntegrationsFireBaseStorageOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsFireBaseStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

---


### CloudGcpIntegrationsFireStoreOutputReference <a name="CloudGcpIntegrationsFireStoreOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsFireStore
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

---


### CloudGcpIntegrationsFunctionsOutputReference <a name="CloudGcpIntegrationsFunctionsOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

---


### CloudGcpIntegrationsInterconnectOutputReference <a name="CloudGcpIntegrationsInterconnectOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsInterconnect
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

---


### CloudGcpIntegrationsKubernetesOutputReference <a name="CloudGcpIntegrationsKubernetesOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsKubernetes
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

---


### CloudGcpIntegrationsLoadBalancingOutputReference <a name="CloudGcpIntegrationsLoadBalancingOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsLoadBalancing
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

---


### CloudGcpIntegrationsMemCacheOutputReference <a name="CloudGcpIntegrationsMemCacheOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsMemCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

---


### CloudGcpIntegrationsPubSubOutputReference <a name="CloudGcpIntegrationsPubSubOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetFetchTags">reset_fetch_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fetch_tags` <a name="reset_fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetFetchTags"></a>

```python
def reset_fetch_tags() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTagsInput">fetch_tags_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTags">fetch_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fetch_tags_input`<sup>Optional</sup> <a name="fetch_tags_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTagsInput"></a>

```python
fetch_tags_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fetch_tags`<sup>Required</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTags"></a>

```python
fetch_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsPubSub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

---


### CloudGcpIntegrationsRedisOutputReference <a name="CloudGcpIntegrationsRedisOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsRedis
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

---


### CloudGcpIntegrationsRouterOutputReference <a name="CloudGcpIntegrationsRouterOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsRouter
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

---


### CloudGcpIntegrationsRunOutputReference <a name="CloudGcpIntegrationsRunOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsRun
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

---


### CloudGcpIntegrationsSpannerOutputReference <a name="CloudGcpIntegrationsSpannerOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetFetchTags">reset_fetch_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fetch_tags` <a name="reset_fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetFetchTags"></a>

```python
def reset_fetch_tags() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTagsInput">fetch_tags_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTags">fetch_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fetch_tags_input`<sup>Optional</sup> <a name="fetch_tags_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTagsInput"></a>

```python
fetch_tags_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fetch_tags`<sup>Required</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTags"></a>

```python
fetch_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsSpanner
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

---


### CloudGcpIntegrationsSqlOutputReference <a name="CloudGcpIntegrationsSqlOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

---


### CloudGcpIntegrationsStorageOutputReference <a name="CloudGcpIntegrationsStorageOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetFetchTags">reset_fetch_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fetch_tags` <a name="reset_fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetFetchTags"></a>

```python
def reset_fetch_tags() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTagsInput">fetch_tags_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTags">fetch_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fetch_tags_input`<sup>Optional</sup> <a name="fetch_tags_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTagsInput"></a>

```python
fetch_tags_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fetch_tags`<sup>Required</sup> <a name="fetch_tags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTags"></a>

```python
fetch_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

---


### CloudGcpIntegrationsVirtualMachinesOutputReference <a name="CloudGcpIntegrationsVirtualMachinesOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsVirtualMachines
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

---


### CloudGcpIntegrationsVpcAccessOutputReference <a name="CloudGcpIntegrationsVpcAccessOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_gcp_integrations

cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.internalValue"></a>

```python
internal_value: CloudGcpIntegrationsVpcAccess
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

---



