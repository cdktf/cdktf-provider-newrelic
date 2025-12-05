# `cloudAzureIntegrations` Submodule <a name="`cloudAzureIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAzureIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAzureIntegrations <a name="CloudAzureIntegrations" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations newrelic_cloud_azure_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrations(
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
  api_management: CloudAzureIntegrationsApiManagement = None,
  app_gateway: CloudAzureIntegrationsAppGateway = None,
  app_service: CloudAzureIntegrationsAppService = None,
  auto_discovery: CloudAzureIntegrationsAutoDiscovery = None,
  containers: CloudAzureIntegrationsContainers = None,
  cosmos_db: CloudAzureIntegrationsCosmosDb = None,
  cost_management: CloudAzureIntegrationsCostManagement = None,
  data_factory: CloudAzureIntegrationsDataFactory = None,
  event_hub: CloudAzureIntegrationsEventHub = None,
  express_route: CloudAzureIntegrationsExpressRoute = None,
  firewalls: CloudAzureIntegrationsFirewalls = None,
  front_door: CloudAzureIntegrationsFrontDoor = None,
  functions: CloudAzureIntegrationsFunctions = None,
  id: str = None,
  key_vault: CloudAzureIntegrationsKeyVault = None,
  load_balancer: CloudAzureIntegrationsLoadBalancer = None,
  logic_apps: CloudAzureIntegrationsLogicApps = None,
  machine_learning: CloudAzureIntegrationsMachineLearning = None,
  maria_db: CloudAzureIntegrationsMariaDb = None,
  monitor: CloudAzureIntegrationsMonitor = None,
  mysql: CloudAzureIntegrationsMysql = None,
  mysql_flexible: CloudAzureIntegrationsMysqlFlexible = None,
  postgresql: CloudAzureIntegrationsPostgresql = None,
  postgresql_flexible: CloudAzureIntegrationsPostgresqlFlexible = None,
  power_bi_dedicated: CloudAzureIntegrationsPowerBiDedicated = None,
  redis_cache: CloudAzureIntegrationsRedisCache = None,
  service_bus: CloudAzureIntegrationsServiceBus = None,
  sql: CloudAzureIntegrationsSql = None,
  sql_managed: CloudAzureIntegrationsSqlManaged = None,
  storage: CloudAzureIntegrationsStorage = None,
  virtual_machine: CloudAzureIntegrationsVirtualMachine = None,
  virtual_networks: CloudAzureIntegrationsVirtualNetworks = None,
  vms: CloudAzureIntegrationsVms = None,
  vpn_gateway: CloudAzureIntegrationsVpnGateway = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the linked Azure account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.apiManagement">api_management</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | api_management block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.appGateway">app_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | app_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.appService">app_service</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | app_service block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.autoDiscovery">auto_discovery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a></code> | auto_discovery block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.containers">containers</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | containers block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.cosmosDb">cosmos_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | cosmos_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.costManagement">cost_management</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | cost_management block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.dataFactory">data_factory</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | data_factory block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.eventHub">event_hub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | event_hub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.expressRoute">express_route</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | express_route block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.firewalls">firewalls</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | firewalls block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.frontDoor">front_door</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | front_door block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.keyVault">key_vault</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.logicApps">logic_apps</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | logic_apps block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.machineLearning">machine_learning</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | machine_learning block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.mariaDb">maria_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | maria_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.mysqlFlexible">mysql_flexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | mysql_flexible block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.postgresqlFlexible">postgresql_flexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | postgresql_flexible block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.powerBiDedicated">power_bi_dedicated</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | power_bi_dedicated block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.redisCache">redis_cache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | redis_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.serviceBus">service_bus</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | service_bus block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.sqlManaged">sql_managed</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | sql_managed block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.virtualNetworks">virtual_networks</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | virtual_networks block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.vms">vms</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | vms block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.vpnGateway">vpn_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | vpn_gateway block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* typing.Union[int, float]

The ID of the linked Azure account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#linked_account_id CloudAzureIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.accountId"></a>

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#account_id CloudAzureIntegrations#account_id}

---

##### `api_management`<sup>Optional</sup> <a name="api_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.apiManagement"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#api_management CloudAzureIntegrations#api_management}

---

##### `app_gateway`<sup>Optional</sup> <a name="app_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.appGateway"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

app_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#app_gateway CloudAzureIntegrations#app_gateway}

---

##### `app_service`<sup>Optional</sup> <a name="app_service" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.appService"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

app_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#app_service CloudAzureIntegrations#app_service}

---

##### `auto_discovery`<sup>Optional</sup> <a name="auto_discovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.autoDiscovery"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a>

auto_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#auto_discovery CloudAzureIntegrations#auto_discovery}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.containers"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#containers CloudAzureIntegrations#containers}

---

##### `cosmos_db`<sup>Optional</sup> <a name="cosmos_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.cosmosDb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

cosmos_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#cosmos_db CloudAzureIntegrations#cosmos_db}

---

##### `cost_management`<sup>Optional</sup> <a name="cost_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.costManagement"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

cost_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#cost_management CloudAzureIntegrations#cost_management}

---

##### `data_factory`<sup>Optional</sup> <a name="data_factory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.dataFactory"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

data_factory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#data_factory CloudAzureIntegrations#data_factory}

---

##### `event_hub`<sup>Optional</sup> <a name="event_hub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.eventHub"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

event_hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#event_hub CloudAzureIntegrations#event_hub}

---

##### `express_route`<sup>Optional</sup> <a name="express_route" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.expressRoute"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

express_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#express_route CloudAzureIntegrations#express_route}

---

##### `firewalls`<sup>Optional</sup> <a name="firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.firewalls"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

firewalls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#firewalls CloudAzureIntegrations#firewalls}

---

##### `front_door`<sup>Optional</sup> <a name="front_door" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.frontDoor"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

front_door block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#front_door CloudAzureIntegrations#front_door}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.functions"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#functions CloudAzureIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault`<sup>Optional</sup> <a name="key_vault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.keyVault"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#key_vault CloudAzureIntegrations#key_vault}

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.loadBalancer"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#load_balancer CloudAzureIntegrations#load_balancer}

---

##### `logic_apps`<sup>Optional</sup> <a name="logic_apps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.logicApps"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

logic_apps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#logic_apps CloudAzureIntegrations#logic_apps}

---

##### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.machineLearning"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#machine_learning CloudAzureIntegrations#machine_learning}

---

##### `maria_db`<sup>Optional</sup> <a name="maria_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.mariaDb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#maria_db CloudAzureIntegrations#maria_db}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.monitor"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#monitor CloudAzureIntegrations#monitor}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.mysql"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#mysql CloudAzureIntegrations#mysql}

---

##### `mysql_flexible`<sup>Optional</sup> <a name="mysql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.mysqlFlexible"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

mysql_flexible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#mysql_flexible CloudAzureIntegrations#mysql_flexible}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.postgresql"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#postgresql CloudAzureIntegrations#postgresql}

---

##### `postgresql_flexible`<sup>Optional</sup> <a name="postgresql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.postgresqlFlexible"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

postgresql_flexible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#postgresql_flexible CloudAzureIntegrations#postgresql_flexible}

---

##### `power_bi_dedicated`<sup>Optional</sup> <a name="power_bi_dedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.powerBiDedicated"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

power_bi_dedicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#power_bi_dedicated CloudAzureIntegrations#power_bi_dedicated}

---

##### `redis_cache`<sup>Optional</sup> <a name="redis_cache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.redisCache"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

redis_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#redis_cache CloudAzureIntegrations#redis_cache}

---

##### `service_bus`<sup>Optional</sup> <a name="service_bus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.serviceBus"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

service_bus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#service_bus CloudAzureIntegrations#service_bus}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.sql"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#sql CloudAzureIntegrations#sql}

---

##### `sql_managed`<sup>Optional</sup> <a name="sql_managed" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.sqlManaged"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

sql_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#sql_managed CloudAzureIntegrations#sql_managed}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#storage CloudAzureIntegrations#storage}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.virtualMachine"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#virtual_machine CloudAzureIntegrations#virtual_machine}

---

##### `virtual_networks`<sup>Optional</sup> <a name="virtual_networks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.virtualNetworks"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

virtual_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#virtual_networks CloudAzureIntegrations#virtual_networks}

---

##### `vms`<sup>Optional</sup> <a name="vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.vms"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

vms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#vms CloudAzureIntegrations#vms}

---

##### `vpn_gateway`<sup>Optional</sup> <a name="vpn_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.Initializer.parameter.vpnGateway"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

vpn_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#vpn_gateway CloudAzureIntegrations#vpn_gateway}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement">put_api_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway">put_app_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService">put_app_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAutoDiscovery">put_auto_discovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers">put_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb">put_cosmos_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement">put_cost_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory">put_data_factory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub">put_event_hub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute">put_express_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls">put_firewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor">put_front_door</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions">put_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault">put_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer">put_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps">put_logic_apps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning">put_machine_learning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb">put_maria_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor">put_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql">put_mysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible">put_mysql_flexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql">put_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible">put_postgresql_flexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated">put_power_bi_dedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache">put_redis_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus">put_service_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql">put_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged">put_sql_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine">put_virtual_machine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks">put_virtual_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms">put_vms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway">put_vpn_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetApiManagement">reset_api_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppGateway">reset_app_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppService">reset_app_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAutoDiscovery">reset_auto_discovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetContainers">reset_containers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCosmosDb">reset_cosmos_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCostManagement">reset_cost_management</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetDataFactory">reset_data_factory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetEventHub">reset_event_hub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetExpressRoute">reset_express_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFirewalls">reset_firewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFrontDoor">reset_front_door</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFunctions">reset_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetKeyVault">reset_key_vault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLoadBalancer">reset_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLogicApps">reset_logic_apps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMachineLearning">reset_machine_learning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMariaDb">reset_maria_db</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMonitor">reset_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysql">reset_mysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysqlFlexible">reset_mysql_flexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresql">reset_postgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresqlFlexible">reset_postgresql_flexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPowerBiDedicated">reset_power_bi_dedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetRedisCache">reset_redis_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetServiceBus">reset_service_bus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSqlManaged">reset_sql_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualMachine">reset_virtual_machine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualNetworks">reset_virtual_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVms">reset_vms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVpnGateway">reset_vpn_gateway</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_api_management` <a name="put_api_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement"></a>

```python
def put_api_management(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putApiManagement.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_app_gateway` <a name="put_app_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway"></a>

```python
def put_app_gateway(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppGateway.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_app_service` <a name="put_app_service" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService"></a>

```python
def put_app_service(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAppService.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_auto_discovery` <a name="put_auto_discovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAutoDiscovery"></a>

```python
def put_auto_discovery(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAutoDiscovery.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putAutoDiscovery.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_containers` <a name="put_containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers"></a>

```python
def put_containers(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putContainers.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_cosmos_db` <a name="put_cosmos_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb"></a>

```python
def put_cosmos_db(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCosmosDb.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_cost_management` <a name="put_cost_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement"></a>

```python
def put_cost_management(
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_keys: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `tag_keys`<sup>Optional</sup> <a name="tag_keys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putCostManagement.parameter.tagKeys"></a>

- *Type:* typing.List[str]

Specify if additional cost data per tag should be collected. This field is case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#tag_keys CloudAzureIntegrations#tag_keys}

---

##### `put_data_factory` <a name="put_data_factory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory"></a>

```python
def put_data_factory(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putDataFactory.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_event_hub` <a name="put_event_hub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub"></a>

```python
def put_event_hub(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putEventHub.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_express_route` <a name="put_express_route" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute"></a>

```python
def put_express_route(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putExpressRoute.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_firewalls` <a name="put_firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls"></a>

```python
def put_firewalls(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFirewalls.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_front_door` <a name="put_front_door" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor"></a>

```python
def put_front_door(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFrontDoor.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_functions` <a name="put_functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions"></a>

```python
def put_functions(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putFunctions.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_key_vault` <a name="put_key_vault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault"></a>

```python
def put_key_vault(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putKeyVault.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_load_balancer` <a name="put_load_balancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer"></a>

```python
def put_load_balancer(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLoadBalancer.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_logic_apps` <a name="put_logic_apps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps"></a>

```python
def put_logic_apps(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putLogicApps.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_machine_learning` <a name="put_machine_learning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning"></a>

```python
def put_machine_learning(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMachineLearning.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_maria_db` <a name="put_maria_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb"></a>

```python
def put_maria_db(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMariaDb.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_monitor` <a name="put_monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor"></a>

```python
def put_monitor(
  enabled: bool | IResolvable = None,
  exclude_tags: typing.List[str] = None,
  include_tags: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None,
  resource_types: typing.List[str] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

A flag that specifies if the integration is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#enabled CloudAzureIntegrations#enabled}

---

###### `exclude_tags`<sup>Optional</sup> <a name="exclude_tags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor.parameter.excludeTags"></a>

- *Type:* typing.List[str]

Specify resource tags in 'key:value' form to be excluded from monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#exclude_tags CloudAzureIntegrations#exclude_tags}

---

###### `include_tags`<sup>Optional</sup> <a name="include_tags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor.parameter.includeTags"></a>

- *Type:* typing.List[str]

Specify resource tags in 'key:value' form to be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#include_tags CloudAzureIntegrations#include_tags}

---

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

###### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMonitor.parameter.resourceTypes"></a>

- *Type:* typing.List[str]

Specify each Azure resource type that needs to be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_types CloudAzureIntegrations#resource_types}

---

##### `put_mysql` <a name="put_mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql"></a>

```python
def put_mysql(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysql.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_mysql_flexible` <a name="put_mysql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible"></a>

```python
def put_mysql_flexible(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putMysqlFlexible.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_postgresql` <a name="put_postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql"></a>

```python
def put_postgresql(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresql.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_postgresql_flexible` <a name="put_postgresql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible"></a>

```python
def put_postgresql_flexible(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPostgresqlFlexible.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_power_bi_dedicated` <a name="put_power_bi_dedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated"></a>

```python
def put_power_bi_dedicated(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putPowerBiDedicated.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_redis_cache` <a name="put_redis_cache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache"></a>

```python
def put_redis_cache(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putRedisCache.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_service_bus` <a name="put_service_bus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus"></a>

```python
def put_service_bus(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putServiceBus.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_sql` <a name="put_sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql"></a>

```python
def put_sql(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSql.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_sql_managed` <a name="put_sql_managed" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged"></a>

```python
def put_sql_managed(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putSqlManaged.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_storage` <a name="put_storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage"></a>

```python
def put_storage(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putStorage.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_virtual_machine` <a name="put_virtual_machine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine"></a>

```python
def put_virtual_machine(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualMachine.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_virtual_networks` <a name="put_virtual_networks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks"></a>

```python
def put_virtual_networks(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVirtualNetworks.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_vms` <a name="put_vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms"></a>

```python
def put_vms(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVms.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `put_vpn_gateway` <a name="put_vpn_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway"></a>

```python
def put_vpn_gateway(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
) -> None
```

###### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway.parameter.metricsPollingInterval"></a>

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

###### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.putVpnGateway.parameter.resourceGroups"></a>

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_api_management` <a name="reset_api_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetApiManagement"></a>

```python
def reset_api_management() -> None
```

##### `reset_app_gateway` <a name="reset_app_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppGateway"></a>

```python
def reset_app_gateway() -> None
```

##### `reset_app_service` <a name="reset_app_service" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAppService"></a>

```python
def reset_app_service() -> None
```

##### `reset_auto_discovery` <a name="reset_auto_discovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetAutoDiscovery"></a>

```python
def reset_auto_discovery() -> None
```

##### `reset_containers` <a name="reset_containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetContainers"></a>

```python
def reset_containers() -> None
```

##### `reset_cosmos_db` <a name="reset_cosmos_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCosmosDb"></a>

```python
def reset_cosmos_db() -> None
```

##### `reset_cost_management` <a name="reset_cost_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetCostManagement"></a>

```python
def reset_cost_management() -> None
```

##### `reset_data_factory` <a name="reset_data_factory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetDataFactory"></a>

```python
def reset_data_factory() -> None
```

##### `reset_event_hub` <a name="reset_event_hub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetEventHub"></a>

```python
def reset_event_hub() -> None
```

##### `reset_express_route` <a name="reset_express_route" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetExpressRoute"></a>

```python
def reset_express_route() -> None
```

##### `reset_firewalls` <a name="reset_firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFirewalls"></a>

```python
def reset_firewalls() -> None
```

##### `reset_front_door` <a name="reset_front_door" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFrontDoor"></a>

```python
def reset_front_door() -> None
```

##### `reset_functions` <a name="reset_functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetFunctions"></a>

```python
def reset_functions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_vault` <a name="reset_key_vault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetKeyVault"></a>

```python
def reset_key_vault() -> None
```

##### `reset_load_balancer` <a name="reset_load_balancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLoadBalancer"></a>

```python
def reset_load_balancer() -> None
```

##### `reset_logic_apps` <a name="reset_logic_apps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetLogicApps"></a>

```python
def reset_logic_apps() -> None
```

##### `reset_machine_learning` <a name="reset_machine_learning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMachineLearning"></a>

```python
def reset_machine_learning() -> None
```

##### `reset_maria_db` <a name="reset_maria_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMariaDb"></a>

```python
def reset_maria_db() -> None
```

##### `reset_monitor` <a name="reset_monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMonitor"></a>

```python
def reset_monitor() -> None
```

##### `reset_mysql` <a name="reset_mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysql"></a>

```python
def reset_mysql() -> None
```

##### `reset_mysql_flexible` <a name="reset_mysql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetMysqlFlexible"></a>

```python
def reset_mysql_flexible() -> None
```

##### `reset_postgresql` <a name="reset_postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresql"></a>

```python
def reset_postgresql() -> None
```

##### `reset_postgresql_flexible` <a name="reset_postgresql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPostgresqlFlexible"></a>

```python
def reset_postgresql_flexible() -> None
```

##### `reset_power_bi_dedicated` <a name="reset_power_bi_dedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetPowerBiDedicated"></a>

```python
def reset_power_bi_dedicated() -> None
```

##### `reset_redis_cache` <a name="reset_redis_cache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetRedisCache"></a>

```python
def reset_redis_cache() -> None
```

##### `reset_service_bus` <a name="reset_service_bus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetServiceBus"></a>

```python
def reset_service_bus() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_sql_managed` <a name="reset_sql_managed" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetSqlManaged"></a>

```python
def reset_sql_managed() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_virtual_machine` <a name="reset_virtual_machine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualMachine"></a>

```python
def reset_virtual_machine() -> None
```

##### `reset_virtual_networks` <a name="reset_virtual_networks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVirtualNetworks"></a>

```python
def reset_virtual_networks() -> None
```

##### `reset_vms` <a name="reset_vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVms"></a>

```python
def reset_vms() -> None
```

##### `reset_vpn_gateway` <a name="reset_vpn_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.resetVpnGateway"></a>

```python
def reset_vpn_gateway() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudAzureIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrations.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudAzureIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudAzureIntegrations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudAzureIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudAzureIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagement">api_management</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference">CloudAzureIntegrationsApiManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGateway">app_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference">CloudAzureIntegrationsAppGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appService">app_service</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference">CloudAzureIntegrationsAppServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.autoDiscovery">auto_discovery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference">CloudAzureIntegrationsAutoDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference">CloudAzureIntegrationsContainersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDb">cosmos_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference">CloudAzureIntegrationsCosmosDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagement">cost_management</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference">CloudAzureIntegrationsCostManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactory">data_factory</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference">CloudAzureIntegrationsDataFactoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHub">event_hub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference">CloudAzureIntegrationsEventHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRoute">express_route</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference">CloudAzureIntegrationsExpressRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewalls">firewalls</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference">CloudAzureIntegrationsFirewallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoor">front_door</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference">CloudAzureIntegrationsFrontDoorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference">CloudAzureIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVault">key_vault</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference">CloudAzureIntegrationsKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference">CloudAzureIntegrationsLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicApps">logic_apps</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference">CloudAzureIntegrationsLogicAppsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference">CloudAzureIntegrationsMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDb">maria_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference">CloudAzureIntegrationsMariaDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference">CloudAzureIntegrationsMonitorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference">CloudAzureIntegrationsMysqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexible">mysql_flexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference">CloudAzureIntegrationsMysqlFlexibleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference">CloudAzureIntegrationsPostgresqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexible">postgresql_flexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference">CloudAzureIntegrationsPostgresqlFlexibleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicated">power_bi_dedicated</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference">CloudAzureIntegrationsPowerBiDedicatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCache">redis_cache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference">CloudAzureIntegrationsRedisCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBus">service_bus</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference">CloudAzureIntegrationsServiceBusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference">CloudAzureIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManaged">sql_managed</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference">CloudAzureIntegrationsSqlManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference">CloudAzureIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference">CloudAzureIntegrationsVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworks">virtual_networks</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference">CloudAzureIntegrationsVirtualNetworksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vms">vms</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference">CloudAzureIntegrationsVmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGateway">vpn_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference">CloudAzureIntegrationsVpnGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountIdInput">account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagementInput">api_management_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGatewayInput">app_gateway_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appServiceInput">app_service_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.autoDiscoveryInput">auto_discovery_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containersInput">containers_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDbInput">cosmos_db_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagementInput">cost_management_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactoryInput">data_factory_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHubInput">event_hub_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRouteInput">express_route_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewallsInput">firewalls_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoorInput">front_door_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functionsInput">functions_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVaultInput">key_vault_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountIdInput">linked_account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancerInput">load_balancer_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicAppsInput">logic_apps_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearningInput">machine_learning_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDbInput">maria_db_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitorInput">monitor_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexibleInput">mysql_flexible_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlInput">mysql_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexibleInput">postgresql_flexible_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlInput">postgresql_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicatedInput">power_bi_dedicated_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCacheInput">redis_cache_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBusInput">service_bus_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlInput">sql_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManagedInput">sql_managed_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storageInput">storage_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachineInput">virtual_machine_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworksInput">virtual_networks_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vmsInput">vms_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGatewayInput">vpn_gateway_input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_management`<sup>Required</sup> <a name="api_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagement"></a>

```python
api_management: CloudAzureIntegrationsApiManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference">CloudAzureIntegrationsApiManagementOutputReference</a>

---

##### `app_gateway`<sup>Required</sup> <a name="app_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGateway"></a>

```python
app_gateway: CloudAzureIntegrationsAppGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference">CloudAzureIntegrationsAppGatewayOutputReference</a>

---

##### `app_service`<sup>Required</sup> <a name="app_service" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appService"></a>

```python
app_service: CloudAzureIntegrationsAppServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference">CloudAzureIntegrationsAppServiceOutputReference</a>

---

##### `auto_discovery`<sup>Required</sup> <a name="auto_discovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.autoDiscovery"></a>

```python
auto_discovery: CloudAzureIntegrationsAutoDiscoveryOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference">CloudAzureIntegrationsAutoDiscoveryOutputReference</a>

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containers"></a>

```python
containers: CloudAzureIntegrationsContainersOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference">CloudAzureIntegrationsContainersOutputReference</a>

---

##### `cosmos_db`<sup>Required</sup> <a name="cosmos_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDb"></a>

```python
cosmos_db: CloudAzureIntegrationsCosmosDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference">CloudAzureIntegrationsCosmosDbOutputReference</a>

---

##### `cost_management`<sup>Required</sup> <a name="cost_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagement"></a>

```python
cost_management: CloudAzureIntegrationsCostManagementOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference">CloudAzureIntegrationsCostManagementOutputReference</a>

---

##### `data_factory`<sup>Required</sup> <a name="data_factory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactory"></a>

```python
data_factory: CloudAzureIntegrationsDataFactoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference">CloudAzureIntegrationsDataFactoryOutputReference</a>

---

##### `event_hub`<sup>Required</sup> <a name="event_hub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHub"></a>

```python
event_hub: CloudAzureIntegrationsEventHubOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference">CloudAzureIntegrationsEventHubOutputReference</a>

---

##### `express_route`<sup>Required</sup> <a name="express_route" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRoute"></a>

```python
express_route: CloudAzureIntegrationsExpressRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference">CloudAzureIntegrationsExpressRouteOutputReference</a>

---

##### `firewalls`<sup>Required</sup> <a name="firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewalls"></a>

```python
firewalls: CloudAzureIntegrationsFirewallsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference">CloudAzureIntegrationsFirewallsOutputReference</a>

---

##### `front_door`<sup>Required</sup> <a name="front_door" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoor"></a>

```python
front_door: CloudAzureIntegrationsFrontDoorOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference">CloudAzureIntegrationsFrontDoorOutputReference</a>

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functions"></a>

```python
functions: CloudAzureIntegrationsFunctionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference">CloudAzureIntegrationsFunctionsOutputReference</a>

---

##### `key_vault`<sup>Required</sup> <a name="key_vault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVault"></a>

```python
key_vault: CloudAzureIntegrationsKeyVaultOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference">CloudAzureIntegrationsKeyVaultOutputReference</a>

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancer"></a>

```python
load_balancer: CloudAzureIntegrationsLoadBalancerOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference">CloudAzureIntegrationsLoadBalancerOutputReference</a>

---

##### `logic_apps`<sup>Required</sup> <a name="logic_apps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicApps"></a>

```python
logic_apps: CloudAzureIntegrationsLogicAppsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference">CloudAzureIntegrationsLogicAppsOutputReference</a>

---

##### `machine_learning`<sup>Required</sup> <a name="machine_learning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearning"></a>

```python
machine_learning: CloudAzureIntegrationsMachineLearningOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference">CloudAzureIntegrationsMachineLearningOutputReference</a>

---

##### `maria_db`<sup>Required</sup> <a name="maria_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDb"></a>

```python
maria_db: CloudAzureIntegrationsMariaDbOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference">CloudAzureIntegrationsMariaDbOutputReference</a>

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitor"></a>

```python
monitor: CloudAzureIntegrationsMonitorOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference">CloudAzureIntegrationsMonitorOutputReference</a>

---

##### `mysql`<sup>Required</sup> <a name="mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysql"></a>

```python
mysql: CloudAzureIntegrationsMysqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference">CloudAzureIntegrationsMysqlOutputReference</a>

---

##### `mysql_flexible`<sup>Required</sup> <a name="mysql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexible"></a>

```python
mysql_flexible: CloudAzureIntegrationsMysqlFlexibleOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference">CloudAzureIntegrationsMysqlFlexibleOutputReference</a>

---

##### `postgresql`<sup>Required</sup> <a name="postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresql"></a>

```python
postgresql: CloudAzureIntegrationsPostgresqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference">CloudAzureIntegrationsPostgresqlOutputReference</a>

---

##### `postgresql_flexible`<sup>Required</sup> <a name="postgresql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexible"></a>

```python
postgresql_flexible: CloudAzureIntegrationsPostgresqlFlexibleOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference">CloudAzureIntegrationsPostgresqlFlexibleOutputReference</a>

---

##### `power_bi_dedicated`<sup>Required</sup> <a name="power_bi_dedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicated"></a>

```python
power_bi_dedicated: CloudAzureIntegrationsPowerBiDedicatedOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference">CloudAzureIntegrationsPowerBiDedicatedOutputReference</a>

---

##### `redis_cache`<sup>Required</sup> <a name="redis_cache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCache"></a>

```python
redis_cache: CloudAzureIntegrationsRedisCacheOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference">CloudAzureIntegrationsRedisCacheOutputReference</a>

---

##### `service_bus`<sup>Required</sup> <a name="service_bus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBus"></a>

```python
service_bus: CloudAzureIntegrationsServiceBusOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference">CloudAzureIntegrationsServiceBusOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sql"></a>

```python
sql: CloudAzureIntegrationsSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference">CloudAzureIntegrationsSqlOutputReference</a>

---

##### `sql_managed`<sup>Required</sup> <a name="sql_managed" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManaged"></a>

```python
sql_managed: CloudAzureIntegrationsSqlManagedOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference">CloudAzureIntegrationsSqlManagedOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storage"></a>

```python
storage: CloudAzureIntegrationsStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference">CloudAzureIntegrationsStorageOutputReference</a>

---

##### `virtual_machine`<sup>Required</sup> <a name="virtual_machine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachine"></a>

```python
virtual_machine: CloudAzureIntegrationsVirtualMachineOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference">CloudAzureIntegrationsVirtualMachineOutputReference</a>

---

##### `virtual_networks`<sup>Required</sup> <a name="virtual_networks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworks"></a>

```python
virtual_networks: CloudAzureIntegrationsVirtualNetworksOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference">CloudAzureIntegrationsVirtualNetworksOutputReference</a>

---

##### `vms`<sup>Required</sup> <a name="vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vms"></a>

```python
vms: CloudAzureIntegrationsVmsOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference">CloudAzureIntegrationsVmsOutputReference</a>

---

##### `vpn_gateway`<sup>Required</sup> <a name="vpn_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGateway"></a>

```python
vpn_gateway: CloudAzureIntegrationsVpnGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference">CloudAzureIntegrationsVpnGatewayOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountIdInput"></a>

```python
account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `api_management_input`<sup>Optional</sup> <a name="api_management_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.apiManagementInput"></a>

```python
api_management_input: CloudAzureIntegrationsApiManagement
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

---

##### `app_gateway_input`<sup>Optional</sup> <a name="app_gateway_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appGatewayInput"></a>

```python
app_gateway_input: CloudAzureIntegrationsAppGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

---

##### `app_service_input`<sup>Optional</sup> <a name="app_service_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.appServiceInput"></a>

```python
app_service_input: CloudAzureIntegrationsAppService
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

---

##### `auto_discovery_input`<sup>Optional</sup> <a name="auto_discovery_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.autoDiscoveryInput"></a>

```python
auto_discovery_input: CloudAzureIntegrationsAutoDiscovery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a>

---

##### `containers_input`<sup>Optional</sup> <a name="containers_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.containersInput"></a>

```python
containers_input: CloudAzureIntegrationsContainers
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

---

##### `cosmos_db_input`<sup>Optional</sup> <a name="cosmos_db_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.cosmosDbInput"></a>

```python
cosmos_db_input: CloudAzureIntegrationsCosmosDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

---

##### `cost_management_input`<sup>Optional</sup> <a name="cost_management_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.costManagementInput"></a>

```python
cost_management_input: CloudAzureIntegrationsCostManagement
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

---

##### `data_factory_input`<sup>Optional</sup> <a name="data_factory_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.dataFactoryInput"></a>

```python
data_factory_input: CloudAzureIntegrationsDataFactory
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

---

##### `event_hub_input`<sup>Optional</sup> <a name="event_hub_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.eventHubInput"></a>

```python
event_hub_input: CloudAzureIntegrationsEventHub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

---

##### `express_route_input`<sup>Optional</sup> <a name="express_route_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.expressRouteInput"></a>

```python
express_route_input: CloudAzureIntegrationsExpressRoute
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

---

##### `firewalls_input`<sup>Optional</sup> <a name="firewalls_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.firewallsInput"></a>

```python
firewalls_input: CloudAzureIntegrationsFirewalls
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

---

##### `front_door_input`<sup>Optional</sup> <a name="front_door_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.frontDoorInput"></a>

```python
front_door_input: CloudAzureIntegrationsFrontDoor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

---

##### `functions_input`<sup>Optional</sup> <a name="functions_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.functionsInput"></a>

```python
functions_input: CloudAzureIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_input`<sup>Optional</sup> <a name="key_vault_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.keyVaultInput"></a>

```python
key_vault_input: CloudAzureIntegrationsKeyVault
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

---

##### `linked_account_id_input`<sup>Optional</sup> <a name="linked_account_id_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountIdInput"></a>

```python
linked_account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.loadBalancerInput"></a>

```python
load_balancer_input: CloudAzureIntegrationsLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

---

##### `logic_apps_input`<sup>Optional</sup> <a name="logic_apps_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.logicAppsInput"></a>

```python
logic_apps_input: CloudAzureIntegrationsLogicApps
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

---

##### `machine_learning_input`<sup>Optional</sup> <a name="machine_learning_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.machineLearningInput"></a>

```python
machine_learning_input: CloudAzureIntegrationsMachineLearning
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

---

##### `maria_db_input`<sup>Optional</sup> <a name="maria_db_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mariaDbInput"></a>

```python
maria_db_input: CloudAzureIntegrationsMariaDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

---

##### `monitor_input`<sup>Optional</sup> <a name="monitor_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.monitorInput"></a>

```python
monitor_input: CloudAzureIntegrationsMonitor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

---

##### `mysql_flexible_input`<sup>Optional</sup> <a name="mysql_flexible_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlFlexibleInput"></a>

```python
mysql_flexible_input: CloudAzureIntegrationsMysqlFlexible
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

---

##### `mysql_input`<sup>Optional</sup> <a name="mysql_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.mysqlInput"></a>

```python
mysql_input: CloudAzureIntegrationsMysql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

---

##### `postgresql_flexible_input`<sup>Optional</sup> <a name="postgresql_flexible_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlFlexibleInput"></a>

```python
postgresql_flexible_input: CloudAzureIntegrationsPostgresqlFlexible
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

---

##### `postgresql_input`<sup>Optional</sup> <a name="postgresql_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.postgresqlInput"></a>

```python
postgresql_input: CloudAzureIntegrationsPostgresql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

---

##### `power_bi_dedicated_input`<sup>Optional</sup> <a name="power_bi_dedicated_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.powerBiDedicatedInput"></a>

```python
power_bi_dedicated_input: CloudAzureIntegrationsPowerBiDedicated
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

---

##### `redis_cache_input`<sup>Optional</sup> <a name="redis_cache_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.redisCacheInput"></a>

```python
redis_cache_input: CloudAzureIntegrationsRedisCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

---

##### `service_bus_input`<sup>Optional</sup> <a name="service_bus_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.serviceBusInput"></a>

```python
service_bus_input: CloudAzureIntegrationsServiceBus
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlInput"></a>

```python
sql_input: CloudAzureIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

---

##### `sql_managed_input`<sup>Optional</sup> <a name="sql_managed_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.sqlManagedInput"></a>

```python
sql_managed_input: CloudAzureIntegrationsSqlManaged
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.storageInput"></a>

```python
storage_input: CloudAzureIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

---

##### `virtual_machine_input`<sup>Optional</sup> <a name="virtual_machine_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualMachineInput"></a>

```python
virtual_machine_input: CloudAzureIntegrationsVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

---

##### `virtual_networks_input`<sup>Optional</sup> <a name="virtual_networks_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.virtualNetworksInput"></a>

```python
virtual_networks_input: CloudAzureIntegrationsVirtualNetworks
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

---

##### `vms_input`<sup>Optional</sup> <a name="vms_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vmsInput"></a>

```python
vms_input: CloudAzureIntegrationsVms
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

---

##### `vpn_gateway_input`<sup>Optional</sup> <a name="vpn_gateway_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.vpnGatewayInput"></a>

```python
vpn_gateway_input: CloudAzureIntegrationsVpnGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAzureIntegrationsApiManagement <a name="CloudAzureIntegrationsApiManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsApiManagement(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsAppGateway <a name="CloudAzureIntegrationsAppGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsAppGateway(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsAppService <a name="CloudAzureIntegrationsAppService" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsAppService(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsAutoDiscovery <a name="CloudAzureIntegrationsAutoDiscovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsConfig <a name="CloudAzureIntegrationsConfig" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  linked_account_id: typing.Union[int, float],
  account_id: typing.Union[int, float] = None,
  api_management: CloudAzureIntegrationsApiManagement = None,
  app_gateway: CloudAzureIntegrationsAppGateway = None,
  app_service: CloudAzureIntegrationsAppService = None,
  auto_discovery: CloudAzureIntegrationsAutoDiscovery = None,
  containers: CloudAzureIntegrationsContainers = None,
  cosmos_db: CloudAzureIntegrationsCosmosDb = None,
  cost_management: CloudAzureIntegrationsCostManagement = None,
  data_factory: CloudAzureIntegrationsDataFactory = None,
  event_hub: CloudAzureIntegrationsEventHub = None,
  express_route: CloudAzureIntegrationsExpressRoute = None,
  firewalls: CloudAzureIntegrationsFirewalls = None,
  front_door: CloudAzureIntegrationsFrontDoor = None,
  functions: CloudAzureIntegrationsFunctions = None,
  id: str = None,
  key_vault: CloudAzureIntegrationsKeyVault = None,
  load_balancer: CloudAzureIntegrationsLoadBalancer = None,
  logic_apps: CloudAzureIntegrationsLogicApps = None,
  machine_learning: CloudAzureIntegrationsMachineLearning = None,
  maria_db: CloudAzureIntegrationsMariaDb = None,
  monitor: CloudAzureIntegrationsMonitor = None,
  mysql: CloudAzureIntegrationsMysql = None,
  mysql_flexible: CloudAzureIntegrationsMysqlFlexible = None,
  postgresql: CloudAzureIntegrationsPostgresql = None,
  postgresql_flexible: CloudAzureIntegrationsPostgresqlFlexible = None,
  power_bi_dedicated: CloudAzureIntegrationsPowerBiDedicated = None,
  redis_cache: CloudAzureIntegrationsRedisCache = None,
  service_bus: CloudAzureIntegrationsServiceBus = None,
  sql: CloudAzureIntegrationsSql = None,
  sql_managed: CloudAzureIntegrationsSqlManaged = None,
  storage: CloudAzureIntegrationsStorage = None,
  virtual_machine: CloudAzureIntegrationsVirtualMachine = None,
  virtual_networks: CloudAzureIntegrationsVirtualNetworks = None,
  vms: CloudAzureIntegrationsVms = None,
  vpn_gateway: CloudAzureIntegrationsVpnGateway = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.linkedAccountId">linked_account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the linked Azure account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.accountId">account_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.apiManagement">api_management</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | api_management block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appGateway">app_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | app_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appService">app_service</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | app_service block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.autoDiscovery">auto_discovery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a></code> | auto_discovery block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | containers block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.cosmosDb">cosmos_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | cosmos_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.costManagement">cost_management</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | cost_management block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dataFactory">data_factory</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | data_factory block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.eventHub">event_hub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | event_hub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.expressRoute">express_route</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | express_route block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.firewalls">firewalls</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | firewalls block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.frontDoor">front_door</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | front_door block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.keyVault">key_vault</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | key_vault block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.logicApps">logic_apps</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | logic_apps block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.machineLearning">machine_learning</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | machine_learning block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mariaDb">maria_db</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | maria_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | monitor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysql">mysql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | mysql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysqlFlexible">mysql_flexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | mysql_flexible block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresql">postgresql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | postgresql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresqlFlexible">postgresql_flexible</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | postgresql_flexible block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.powerBiDedicated">power_bi_dedicated</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | power_bi_dedicated block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.redisCache">redis_cache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | redis_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.serviceBus">service_bus</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | service_bus block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sqlManaged">sql_managed</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | sql_managed block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualMachine">virtual_machine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualNetworks">virtual_networks</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | virtual_networks block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vms">vms</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | vms block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vpnGateway">vpn_gateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | vpn_gateway block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `linked_account_id`<sup>Required</sup> <a name="linked_account_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.linkedAccountId"></a>

```python
linked_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the linked Azure account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#linked_account_id CloudAzureIntegrations#linked_account_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.accountId"></a>

```python
account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#account_id CloudAzureIntegrations#account_id}

---

##### `api_management`<sup>Optional</sup> <a name="api_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.apiManagement"></a>

```python
api_management: CloudAzureIntegrationsApiManagement
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

api_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#api_management CloudAzureIntegrations#api_management}

---

##### `app_gateway`<sup>Optional</sup> <a name="app_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appGateway"></a>

```python
app_gateway: CloudAzureIntegrationsAppGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

app_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#app_gateway CloudAzureIntegrations#app_gateway}

---

##### `app_service`<sup>Optional</sup> <a name="app_service" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.appService"></a>

```python
app_service: CloudAzureIntegrationsAppService
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

app_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#app_service CloudAzureIntegrations#app_service}

---

##### `auto_discovery`<sup>Optional</sup> <a name="auto_discovery" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.autoDiscovery"></a>

```python
auto_discovery: CloudAzureIntegrationsAutoDiscovery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a>

auto_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#auto_discovery CloudAzureIntegrations#auto_discovery}

---

##### `containers`<sup>Optional</sup> <a name="containers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.containers"></a>

```python
containers: CloudAzureIntegrationsContainers
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#containers CloudAzureIntegrations#containers}

---

##### `cosmos_db`<sup>Optional</sup> <a name="cosmos_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.cosmosDb"></a>

```python
cosmos_db: CloudAzureIntegrationsCosmosDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

cosmos_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#cosmos_db CloudAzureIntegrations#cosmos_db}

---

##### `cost_management`<sup>Optional</sup> <a name="cost_management" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.costManagement"></a>

```python
cost_management: CloudAzureIntegrationsCostManagement
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

cost_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#cost_management CloudAzureIntegrations#cost_management}

---

##### `data_factory`<sup>Optional</sup> <a name="data_factory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.dataFactory"></a>

```python
data_factory: CloudAzureIntegrationsDataFactory
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

data_factory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#data_factory CloudAzureIntegrations#data_factory}

---

##### `event_hub`<sup>Optional</sup> <a name="event_hub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.eventHub"></a>

```python
event_hub: CloudAzureIntegrationsEventHub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

event_hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#event_hub CloudAzureIntegrations#event_hub}

---

##### `express_route`<sup>Optional</sup> <a name="express_route" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.expressRoute"></a>

```python
express_route: CloudAzureIntegrationsExpressRoute
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

express_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#express_route CloudAzureIntegrations#express_route}

---

##### `firewalls`<sup>Optional</sup> <a name="firewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.firewalls"></a>

```python
firewalls: CloudAzureIntegrationsFirewalls
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

firewalls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#firewalls CloudAzureIntegrations#firewalls}

---

##### `front_door`<sup>Optional</sup> <a name="front_door" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.frontDoor"></a>

```python
front_door: CloudAzureIntegrationsFrontDoor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

front_door block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#front_door CloudAzureIntegrations#front_door}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.functions"></a>

```python
functions: CloudAzureIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#functions CloudAzureIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#id CloudAzureIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault`<sup>Optional</sup> <a name="key_vault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.keyVault"></a>

```python
key_vault: CloudAzureIntegrationsKeyVault
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#key_vault CloudAzureIntegrations#key_vault}

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.loadBalancer"></a>

```python
load_balancer: CloudAzureIntegrationsLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#load_balancer CloudAzureIntegrations#load_balancer}

---

##### `logic_apps`<sup>Optional</sup> <a name="logic_apps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.logicApps"></a>

```python
logic_apps: CloudAzureIntegrationsLogicApps
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

logic_apps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#logic_apps CloudAzureIntegrations#logic_apps}

---

##### `machine_learning`<sup>Optional</sup> <a name="machine_learning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.machineLearning"></a>

```python
machine_learning: CloudAzureIntegrationsMachineLearning
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

machine_learning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#machine_learning CloudAzureIntegrations#machine_learning}

---

##### `maria_db`<sup>Optional</sup> <a name="maria_db" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mariaDb"></a>

```python
maria_db: CloudAzureIntegrationsMariaDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

maria_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#maria_db CloudAzureIntegrations#maria_db}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.monitor"></a>

```python
monitor: CloudAzureIntegrationsMonitor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

monitor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#monitor CloudAzureIntegrations#monitor}

---

##### `mysql`<sup>Optional</sup> <a name="mysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysql"></a>

```python
mysql: CloudAzureIntegrationsMysql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

mysql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#mysql CloudAzureIntegrations#mysql}

---

##### `mysql_flexible`<sup>Optional</sup> <a name="mysql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.mysqlFlexible"></a>

```python
mysql_flexible: CloudAzureIntegrationsMysqlFlexible
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

mysql_flexible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#mysql_flexible CloudAzureIntegrations#mysql_flexible}

---

##### `postgresql`<sup>Optional</sup> <a name="postgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresql"></a>

```python
postgresql: CloudAzureIntegrationsPostgresql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

postgresql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#postgresql CloudAzureIntegrations#postgresql}

---

##### `postgresql_flexible`<sup>Optional</sup> <a name="postgresql_flexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.postgresqlFlexible"></a>

```python
postgresql_flexible: CloudAzureIntegrationsPostgresqlFlexible
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

postgresql_flexible block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#postgresql_flexible CloudAzureIntegrations#postgresql_flexible}

---

##### `power_bi_dedicated`<sup>Optional</sup> <a name="power_bi_dedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.powerBiDedicated"></a>

```python
power_bi_dedicated: CloudAzureIntegrationsPowerBiDedicated
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

power_bi_dedicated block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#power_bi_dedicated CloudAzureIntegrations#power_bi_dedicated}

---

##### `redis_cache`<sup>Optional</sup> <a name="redis_cache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.redisCache"></a>

```python
redis_cache: CloudAzureIntegrationsRedisCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

redis_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#redis_cache CloudAzureIntegrations#redis_cache}

---

##### `service_bus`<sup>Optional</sup> <a name="service_bus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.serviceBus"></a>

```python
service_bus: CloudAzureIntegrationsServiceBus
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

service_bus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#service_bus CloudAzureIntegrations#service_bus}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sql"></a>

```python
sql: CloudAzureIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#sql CloudAzureIntegrations#sql}

---

##### `sql_managed`<sup>Optional</sup> <a name="sql_managed" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.sqlManaged"></a>

```python
sql_managed: CloudAzureIntegrationsSqlManaged
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

sql_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#sql_managed CloudAzureIntegrations#sql_managed}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.storage"></a>

```python
storage: CloudAzureIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#storage CloudAzureIntegrations#storage}

---

##### `virtual_machine`<sup>Optional</sup> <a name="virtual_machine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualMachine"></a>

```python
virtual_machine: CloudAzureIntegrationsVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#virtual_machine CloudAzureIntegrations#virtual_machine}

---

##### `virtual_networks`<sup>Optional</sup> <a name="virtual_networks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.virtualNetworks"></a>

```python
virtual_networks: CloudAzureIntegrationsVirtualNetworks
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

virtual_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#virtual_networks CloudAzureIntegrations#virtual_networks}

---

##### `vms`<sup>Optional</sup> <a name="vms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vms"></a>

```python
vms: CloudAzureIntegrationsVms
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

vms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#vms CloudAzureIntegrations#vms}

---

##### `vpn_gateway`<sup>Optional</sup> <a name="vpn_gateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsConfig.property.vpnGateway"></a>

```python
vpn_gateway: CloudAzureIntegrationsVpnGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

vpn_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#vpn_gateway CloudAzureIntegrations#vpn_gateway}

---

### CloudAzureIntegrationsContainers <a name="CloudAzureIntegrationsContainers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsContainers(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsCosmosDb <a name="CloudAzureIntegrationsCosmosDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsCostManagement <a name="CloudAzureIntegrationsCostManagement" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsCostManagement(
  metrics_polling_interval: typing.Union[int, float] = None,
  tag_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.tagKeys">tag_keys</a></code> | <code>typing.List[str]</code> | Specify if additional cost data per tag should be collected. This field is case sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `tag_keys`<sup>Optional</sup> <a name="tag_keys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement.property.tagKeys"></a>

```python
tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

Specify if additional cost data per tag should be collected. This field is case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#tag_keys CloudAzureIntegrations#tag_keys}

---

### CloudAzureIntegrationsDataFactory <a name="CloudAzureIntegrationsDataFactory" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsDataFactory(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsEventHub <a name="CloudAzureIntegrationsEventHub" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsEventHub(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsExpressRoute <a name="CloudAzureIntegrationsExpressRoute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFirewalls <a name="CloudAzureIntegrationsFirewalls" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsFirewalls(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFrontDoor <a name="CloudAzureIntegrationsFrontDoor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsFunctions <a name="CloudAzureIntegrationsFunctions" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsFunctions(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsKeyVault <a name="CloudAzureIntegrationsKeyVault" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsKeyVault(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsLoadBalancer <a name="CloudAzureIntegrationsLoadBalancer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsLogicApps <a name="CloudAzureIntegrationsLogicApps" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsLogicApps(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMachineLearning <a name="CloudAzureIntegrationsMachineLearning" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMariaDb <a name="CloudAzureIntegrationsMariaDb" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMariaDb(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMonitor <a name="CloudAzureIntegrationsMonitor" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMonitor(
  enabled: bool | IResolvable = None,
  exclude_tags: typing.List[str] = None,
  include_tags: typing.List[str] = None,
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None,
  resource_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | A flag that specifies if the integration is active. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.excludeTags">exclude_tags</a></code> | <code>typing.List[str]</code> | Specify resource tags in 'key:value' form to be excluded from monitoring. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.includeTags">include_tags</a></code> | <code>typing.List[str]</code> | Specify resource tags in 'key:value' form to be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Specify each Azure resource type that needs to be monitored. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

A flag that specifies if the integration is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#enabled CloudAzureIntegrations#enabled}

---

##### `exclude_tags`<sup>Optional</sup> <a name="exclude_tags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.excludeTags"></a>

```python
exclude_tags: typing.List[str]
```

- *Type:* typing.List[str]

Specify resource tags in 'key:value' form to be excluded from monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#exclude_tags CloudAzureIntegrations#exclude_tags}

---

##### `include_tags`<sup>Optional</sup> <a name="include_tags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.includeTags"></a>

```python
include_tags: typing.List[str]
```

- *Type:* typing.List[str]

Specify resource tags in 'key:value' form to be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#include_tags CloudAzureIntegrations#include_tags}

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Azure resource type that needs to be monitored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_types CloudAzureIntegrations#resource_types}

---

### CloudAzureIntegrationsMysql <a name="CloudAzureIntegrationsMysql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMysql(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsMysqlFlexible <a name="CloudAzureIntegrationsMysqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPostgresql <a name="CloudAzureIntegrationsPostgresql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsPostgresql(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPostgresqlFlexible <a name="CloudAzureIntegrationsPostgresqlFlexible" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsPowerBiDedicated <a name="CloudAzureIntegrationsPowerBiDedicated" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsRedisCache <a name="CloudAzureIntegrationsRedisCache" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsRedisCache(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsServiceBus <a name="CloudAzureIntegrationsServiceBus" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsServiceBus(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsSql <a name="CloudAzureIntegrationsSql" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsSql(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsSqlManaged <a name="CloudAzureIntegrationsSqlManaged" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsStorage <a name="CloudAzureIntegrationsStorage" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsStorage(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVirtualMachine <a name="CloudAzureIntegrationsVirtualMachine" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVirtualNetworks <a name="CloudAzureIntegrationsVirtualNetworks" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVms <a name="CloudAzureIntegrationsVms" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsVms(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

### CloudAzureIntegrationsVpnGateway <a name="CloudAzureIntegrationsVpnGateway" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway(
  metrics_polling_interval: typing.Union[int, float] = None,
  resource_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `metrics_polling_interval`<sup>Optional</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#metrics_polling_interval CloudAzureIntegrations#metrics_polling_interval}

---

##### `resource_groups`<sup>Optional</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

Specify each Resource group associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.3/docs/resources/cloud_azure_integrations#resource_groups CloudAzureIntegrations#resource_groups}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAzureIntegrationsApiManagementOutputReference <a name="CloudAzureIntegrationsApiManagementOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagementOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsApiManagement
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsApiManagement">CloudAzureIntegrationsApiManagement</a>

---


### CloudAzureIntegrationsAppGatewayOutputReference <a name="CloudAzureIntegrationsAppGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGatewayOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsAppGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppGateway">CloudAzureIntegrationsAppGateway</a>

---


### CloudAzureIntegrationsAppServiceOutputReference <a name="CloudAzureIntegrationsAppServiceOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppServiceOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsAppService
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAppService">CloudAzureIntegrationsAppService</a>

---


### CloudAzureIntegrationsAutoDiscoveryOutputReference <a name="CloudAzureIntegrationsAutoDiscoveryOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsAutoDiscovery
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsAutoDiscovery">CloudAzureIntegrationsAutoDiscovery</a>

---


### CloudAzureIntegrationsContainersOutputReference <a name="CloudAzureIntegrationsContainersOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainersOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsContainers
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsContainers">CloudAzureIntegrationsContainers</a>

---


### CloudAzureIntegrationsCosmosDbOutputReference <a name="CloudAzureIntegrationsCosmosDbOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDbOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsCosmosDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCosmosDb">CloudAzureIntegrationsCosmosDb</a>

---


### CloudAzureIntegrationsCostManagementOutputReference <a name="CloudAzureIntegrationsCostManagementOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetTagKeys">reset_tag_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_tag_keys` <a name="reset_tag_keys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.resetTagKeys"></a>

```python
def reset_tag_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeysInput">tag_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeys">tag_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_keys_input`<sup>Optional</sup> <a name="tag_keys_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeysInput"></a>

```python
tag_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tag_keys`<sup>Required</sup> <a name="tag_keys" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.tagKeys"></a>

```python
tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagementOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsCostManagement
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsCostManagement">CloudAzureIntegrationsCostManagement</a>

---


### CloudAzureIntegrationsDataFactoryOutputReference <a name="CloudAzureIntegrationsDataFactoryOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactoryOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsDataFactory
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsDataFactory">CloudAzureIntegrationsDataFactory</a>

---


### CloudAzureIntegrationsEventHubOutputReference <a name="CloudAzureIntegrationsEventHubOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHubOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsEventHub
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsEventHub">CloudAzureIntegrationsEventHub</a>

---


### CloudAzureIntegrationsExpressRouteOutputReference <a name="CloudAzureIntegrationsExpressRouteOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRouteOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsExpressRoute
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsExpressRoute">CloudAzureIntegrationsExpressRoute</a>

---


### CloudAzureIntegrationsFirewallsOutputReference <a name="CloudAzureIntegrationsFirewallsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewallsOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsFirewalls
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFirewalls">CloudAzureIntegrationsFirewalls</a>

---


### CloudAzureIntegrationsFrontDoorOutputReference <a name="CloudAzureIntegrationsFrontDoorOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoorOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsFrontDoor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFrontDoor">CloudAzureIntegrationsFrontDoor</a>

---


### CloudAzureIntegrationsFunctionsOutputReference <a name="CloudAzureIntegrationsFunctionsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsFunctions
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsFunctions">CloudAzureIntegrationsFunctions</a>

---


### CloudAzureIntegrationsKeyVaultOutputReference <a name="CloudAzureIntegrationsKeyVaultOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVaultOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsKeyVault
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsKeyVault">CloudAzureIntegrationsKeyVault</a>

---


### CloudAzureIntegrationsLoadBalancerOutputReference <a name="CloudAzureIntegrationsLoadBalancerOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsLoadBalancer
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLoadBalancer">CloudAzureIntegrationsLoadBalancer</a>

---


### CloudAzureIntegrationsLogicAppsOutputReference <a name="CloudAzureIntegrationsLogicAppsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicAppsOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsLogicApps
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsLogicApps">CloudAzureIntegrationsLogicApps</a>

---


### CloudAzureIntegrationsMachineLearningOutputReference <a name="CloudAzureIntegrationsMachineLearningOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearningOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsMachineLearning
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMachineLearning">CloudAzureIntegrationsMachineLearning</a>

---


### CloudAzureIntegrationsMariaDbOutputReference <a name="CloudAzureIntegrationsMariaDbOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDbOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsMariaDb
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMariaDb">CloudAzureIntegrationsMariaDb</a>

---


### CloudAzureIntegrationsMonitorOutputReference <a name="CloudAzureIntegrationsMonitorOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetExcludeTags">reset_exclude_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetIncludeTags">reset_include_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceTypes">reset_resource_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_exclude_tags` <a name="reset_exclude_tags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetExcludeTags"></a>

```python
def reset_exclude_tags() -> None
```

##### `reset_include_tags` <a name="reset_include_tags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetIncludeTags"></a>

```python
def reset_include_tags() -> None
```

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```

##### `reset_resource_types` <a name="reset_resource_types" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTagsInput">exclude_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTagsInput">include_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTags">exclude_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTags">include_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `exclude_tags_input`<sup>Optional</sup> <a name="exclude_tags_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTagsInput"></a>

```python
exclude_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_tags_input`<sup>Optional</sup> <a name="include_tags_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTagsInput"></a>

```python
include_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `exclude_tags`<sup>Required</sup> <a name="exclude_tags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.excludeTags"></a>

```python
exclude_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_tags`<sup>Required</sup> <a name="include_tags" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.includeTags"></a>

```python
include_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitorOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsMonitor
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMonitor">CloudAzureIntegrationsMonitor</a>

---


### CloudAzureIntegrationsMysqlFlexibleOutputReference <a name="CloudAzureIntegrationsMysqlFlexibleOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexibleOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsMysqlFlexible
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlFlexible">CloudAzureIntegrationsMysqlFlexible</a>

---


### CloudAzureIntegrationsMysqlOutputReference <a name="CloudAzureIntegrationsMysqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysqlOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsMysql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsMysql">CloudAzureIntegrationsMysql</a>

---


### CloudAzureIntegrationsPostgresqlFlexibleOutputReference <a name="CloudAzureIntegrationsPostgresqlFlexibleOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexibleOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsPostgresqlFlexible
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlFlexible">CloudAzureIntegrationsPostgresqlFlexible</a>

---


### CloudAzureIntegrationsPostgresqlOutputReference <a name="CloudAzureIntegrationsPostgresqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresqlOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsPostgresql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPostgresql">CloudAzureIntegrationsPostgresql</a>

---


### CloudAzureIntegrationsPowerBiDedicatedOutputReference <a name="CloudAzureIntegrationsPowerBiDedicatedOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicatedOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsPowerBiDedicated
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsPowerBiDedicated">CloudAzureIntegrationsPowerBiDedicated</a>

---


### CloudAzureIntegrationsRedisCacheOutputReference <a name="CloudAzureIntegrationsRedisCacheOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCacheOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsRedisCache
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsRedisCache">CloudAzureIntegrationsRedisCache</a>

---


### CloudAzureIntegrationsServiceBusOutputReference <a name="CloudAzureIntegrationsServiceBusOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBusOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsServiceBus
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsServiceBus">CloudAzureIntegrationsServiceBus</a>

---


### CloudAzureIntegrationsSqlManagedOutputReference <a name="CloudAzureIntegrationsSqlManagedOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManagedOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsSqlManaged
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlManaged">CloudAzureIntegrationsSqlManaged</a>

---


### CloudAzureIntegrationsSqlOutputReference <a name="CloudAzureIntegrationsSqlOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSqlOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsSql
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsSql">CloudAzureIntegrationsSql</a>

---


### CloudAzureIntegrationsStorageOutputReference <a name="CloudAzureIntegrationsStorageOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorageOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsStorage
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsStorage">CloudAzureIntegrationsStorage</a>

---


### CloudAzureIntegrationsVirtualMachineOutputReference <a name="CloudAzureIntegrationsVirtualMachineOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachineOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsVirtualMachine
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualMachine">CloudAzureIntegrationsVirtualMachine</a>

---


### CloudAzureIntegrationsVirtualNetworksOutputReference <a name="CloudAzureIntegrationsVirtualNetworksOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworksOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsVirtualNetworks
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVirtualNetworks">CloudAzureIntegrationsVirtualNetworks</a>

---


### CloudAzureIntegrationsVmsOutputReference <a name="CloudAzureIntegrationsVmsOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVmsOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsVms
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVms">CloudAzureIntegrationsVms</a>

---


### CloudAzureIntegrationsVpnGatewayOutputReference <a name="CloudAzureIntegrationsVpnGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_newrelic import cloud_azure_integrations

cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetMetricsPollingInterval">reset_metrics_polling_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetResourceGroups">reset_resource_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_polling_interval` <a name="reset_metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetMetricsPollingInterval"></a>

```python
def reset_metrics_polling_interval() -> None
```

##### `reset_resource_groups` <a name="reset_resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.resetResourceGroups"></a>

```python
def reset_resource_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingIntervalInput">metrics_polling_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroupsInput">resource_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingInterval">metrics_polling_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroups">resource_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_polling_interval_input`<sup>Optional</sup> <a name="metrics_polling_interval_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```python
metrics_polling_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups_input`<sup>Optional</sup> <a name="resource_groups_input" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroupsInput"></a>

```python
resource_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metrics_polling_interval`<sup>Required</sup> <a name="metrics_polling_interval" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.metricsPollingInterval"></a>

```python
metrics_polling_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_groups`<sup>Required</sup> <a name="resource_groups" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.resourceGroups"></a>

```python
resource_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGatewayOutputReference.property.internalValue"></a>

```python
internal_value: CloudAzureIntegrationsVpnGateway
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAzureIntegrations.CloudAzureIntegrationsVpnGateway">CloudAzureIntegrationsVpnGateway</a>

---



