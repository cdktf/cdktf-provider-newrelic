# `cloudGcpIntegrations` Submodule <a name="`cloudGcpIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudGcpIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGcpIntegrations <a name="CloudGcpIntegrations" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations newrelic_cloud_gcp_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrations;

CloudGcpIntegrations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .linkedAccountId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .alloyDb(CloudGcpIntegrationsAlloyDb)
//  .appEngine(CloudGcpIntegrationsAppEngine)
//  .bigQuery(CloudGcpIntegrationsBigQuery)
//  .bigTable(CloudGcpIntegrationsBigTable)
//  .composer(CloudGcpIntegrationsComposer)
//  .dataFlow(CloudGcpIntegrationsDataFlow)
//  .dataProc(CloudGcpIntegrationsDataProc)
//  .dataStore(CloudGcpIntegrationsDataStore)
//  .fireBaseDatabase(CloudGcpIntegrationsFireBaseDatabase)
//  .fireBaseHosting(CloudGcpIntegrationsFireBaseHosting)
//  .fireBaseStorage(CloudGcpIntegrationsFireBaseStorage)
//  .fireStore(CloudGcpIntegrationsFireStore)
//  .functions(CloudGcpIntegrationsFunctions)
//  .id(java.lang.String)
//  .interconnect(CloudGcpIntegrationsInterconnect)
//  .kubernetes(CloudGcpIntegrationsKubernetes)
//  .loadBalancing(CloudGcpIntegrationsLoadBalancing)
//  .memCache(CloudGcpIntegrationsMemCache)
//  .pubSub(CloudGcpIntegrationsPubSub)
//  .redis(CloudGcpIntegrationsRedis)
//  .router(CloudGcpIntegrationsRouter)
//  .run(CloudGcpIntegrationsRun)
//  .spanner(CloudGcpIntegrationsSpanner)
//  .sql(CloudGcpIntegrationsSql)
//  .storage(CloudGcpIntegrationsStorage)
//  .virtualMachines(CloudGcpIntegrationsVirtualMachines)
//  .vpcAccess(CloudGcpIntegrationsVpcAccess)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | Id of the linked gcp account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.alloyDb">alloyDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.bigQuery">bigQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.bigTable">bigTable</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.composer">composer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataFlow">dataFlow</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataProc">dataProc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataStore">dataStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseDatabase">fireBaseDatabase</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | fire_base_database block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseHosting">fireBaseHosting</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | fire_base_hosting block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseStorage">fireBaseStorage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | fire_base_storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireStore">fireStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | fire_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.interconnect">interconnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.memCache">memCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.pubSub">pubSub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.redis">redis</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.router">router</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.run">run</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.spanner">spanner</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.virtualMachines">virtualMachines</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* java.lang.Number

Id of the linked gcp account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#linked_account_id CloudGcpIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#account_id CloudGcpIntegrations#account_id}

---

##### `alloyDb`<sup>Optional</sup> <a name="alloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.alloyDb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#alloy_db CloudGcpIntegrations#alloy_db}

---

##### `appEngine`<sup>Optional</sup> <a name="appEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.appEngine"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#app_engine CloudGcpIntegrations#app_engine}

---

##### `bigQuery`<sup>Optional</sup> <a name="bigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.bigQuery"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#big_query CloudGcpIntegrations#big_query}

---

##### `bigTable`<sup>Optional</sup> <a name="bigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.bigTable"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#big_table CloudGcpIntegrations#big_table}

---

##### `composer`<sup>Optional</sup> <a name="composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.composer"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#composer CloudGcpIntegrations#composer}

---

##### `dataFlow`<sup>Optional</sup> <a name="dataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataFlow"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#data_flow CloudGcpIntegrations#data_flow}

---

##### `dataProc`<sup>Optional</sup> <a name="dataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataProc"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#data_proc CloudGcpIntegrations#data_proc}

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.dataStore"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#data_store CloudGcpIntegrations#data_store}

---

##### `fireBaseDatabase`<sup>Optional</sup> <a name="fireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseDatabase"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

fire_base_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fire_base_database CloudGcpIntegrations#fire_base_database}

---

##### `fireBaseHosting`<sup>Optional</sup> <a name="fireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseHosting"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

fire_base_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fire_base_hosting CloudGcpIntegrations#fire_base_hosting}

---

##### `fireBaseStorage`<sup>Optional</sup> <a name="fireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireBaseStorage"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

fire_base_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fire_base_storage CloudGcpIntegrations#fire_base_storage}

---

##### `fireStore`<sup>Optional</sup> <a name="fireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.fireStore"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

fire_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fire_store CloudGcpIntegrations#fire_store}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.functions"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#functions CloudGcpIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.interconnect"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#interconnect CloudGcpIntegrations#interconnect}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#kubernetes CloudGcpIntegrations#kubernetes}

---

##### `loadBalancing`<sup>Optional</sup> <a name="loadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.loadBalancing"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#load_balancing CloudGcpIntegrations#load_balancing}

---

##### `memCache`<sup>Optional</sup> <a name="memCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.memCache"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#mem_cache CloudGcpIntegrations#mem_cache}

---

##### `pubSub`<sup>Optional</sup> <a name="pubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.pubSub"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#pub_sub CloudGcpIntegrations#pub_sub}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.redis"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#redis CloudGcpIntegrations#redis}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.router"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#router CloudGcpIntegrations#router}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.run"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#run CloudGcpIntegrations#run}

---

##### `spanner`<sup>Optional</sup> <a name="spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.spanner"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#spanner CloudGcpIntegrations#spanner}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.sql"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#sql CloudGcpIntegrations#sql}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.storage"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#storage CloudGcpIntegrations#storage}

---

##### `virtualMachines`<sup>Optional</sup> <a name="virtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.virtualMachines"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#virtual_machines CloudGcpIntegrations#virtual_machines}

---

##### `vpcAccess`<sup>Optional</sup> <a name="vpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.Initializer.parameter.vpcAccess"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#vpc_access CloudGcpIntegrations#vpc_access}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb">putAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine">putAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery">putBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable">putBigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer">putComposer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow">putDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc">putDataProc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore">putDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase">putFireBaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting">putFireBaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage">putFireBaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore">putFireStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions">putFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect">putInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing">putLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache">putMemCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub">putPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis">putRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter">putRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun">putRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner">putSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql">putSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines">putVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess">putVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAlloyDb">resetAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAppEngine">resetAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigQuery">resetBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigTable">resetBigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetComposer">resetComposer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataFlow">resetDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataProc">resetDataProc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataStore">resetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseDatabase">resetFireBaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseHosting">resetFireBaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseStorage">resetFireBaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireStore">resetFireStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFunctions">resetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetInterconnect">resetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetLoadBalancing">resetLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetMemCache">resetMemCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetPubSub">resetPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRedis">resetRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRun">resetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSpanner">resetSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSql">resetSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVirtualMachines">resetVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVpcAccess">resetVpcAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlloyDb` <a name="putAlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb"></a>

```java
public void putAlloyDb(CloudGcpIntegrationsAlloyDb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAlloyDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

---

##### `putAppEngine` <a name="putAppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine"></a>

```java
public void putAppEngine(CloudGcpIntegrationsAppEngine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putAppEngine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

---

##### `putBigQuery` <a name="putBigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery"></a>

```java
public void putBigQuery(CloudGcpIntegrationsBigQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

---

##### `putBigTable` <a name="putBigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable"></a>

```java
public void putBigTable(CloudGcpIntegrationsBigTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putBigTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

---

##### `putComposer` <a name="putComposer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer"></a>

```java
public void putComposer(CloudGcpIntegrationsComposer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putComposer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

---

##### `putDataFlow` <a name="putDataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow"></a>

```java
public void putDataFlow(CloudGcpIntegrationsDataFlow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataFlow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

---

##### `putDataProc` <a name="putDataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc"></a>

```java
public void putDataProc(CloudGcpIntegrationsDataProc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataProc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

---

##### `putDataStore` <a name="putDataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore"></a>

```java
public void putDataStore(CloudGcpIntegrationsDataStore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putDataStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

---

##### `putFireBaseDatabase` <a name="putFireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase"></a>

```java
public void putFireBaseDatabase(CloudGcpIntegrationsFireBaseDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

---

##### `putFireBaseHosting` <a name="putFireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting"></a>

```java
public void putFireBaseHosting(CloudGcpIntegrationsFireBaseHosting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseHosting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

---

##### `putFireBaseStorage` <a name="putFireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage"></a>

```java
public void putFireBaseStorage(CloudGcpIntegrationsFireBaseStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireBaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

---

##### `putFireStore` <a name="putFireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore"></a>

```java
public void putFireStore(CloudGcpIntegrationsFireStore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFireStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

---

##### `putFunctions` <a name="putFunctions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions"></a>

```java
public void putFunctions(CloudGcpIntegrationsFunctions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

---

##### `putInterconnect` <a name="putInterconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect"></a>

```java
public void putInterconnect(CloudGcpIntegrationsInterconnect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putInterconnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

---

##### `putKubernetes` <a name="putKubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes"></a>

```java
public void putKubernetes(CloudGcpIntegrationsKubernetes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

---

##### `putLoadBalancing` <a name="putLoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing"></a>

```java
public void putLoadBalancing(CloudGcpIntegrationsLoadBalancing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putLoadBalancing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

---

##### `putMemCache` <a name="putMemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache"></a>

```java
public void putMemCache(CloudGcpIntegrationsMemCache value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putMemCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

---

##### `putPubSub` <a name="putPubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub"></a>

```java
public void putPubSub(CloudGcpIntegrationsPubSub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putPubSub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

---

##### `putRedis` <a name="putRedis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis"></a>

```java
public void putRedis(CloudGcpIntegrationsRedis value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRedis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

---

##### `putRouter` <a name="putRouter" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter"></a>

```java
public void putRouter(CloudGcpIntegrationsRouter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRouter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

---

##### `putRun` <a name="putRun" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun"></a>

```java
public void putRun(CloudGcpIntegrationsRun value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

---

##### `putSpanner` <a name="putSpanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner"></a>

```java
public void putSpanner(CloudGcpIntegrationsSpanner value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

---

##### `putSql` <a name="putSql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql"></a>

```java
public void putSql(CloudGcpIntegrationsSql value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage"></a>

```java
public void putStorage(CloudGcpIntegrationsStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

---

##### `putVirtualMachines` <a name="putVirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines"></a>

```java
public void putVirtualMachines(CloudGcpIntegrationsVirtualMachines value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVirtualMachines.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

---

##### `putVpcAccess` <a name="putVpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess"></a>

```java
public void putVpcAccess(CloudGcpIntegrationsVpcAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAlloyDb` <a name="resetAlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAlloyDb"></a>

```java
public void resetAlloyDb()
```

##### `resetAppEngine` <a name="resetAppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetAppEngine"></a>

```java
public void resetAppEngine()
```

##### `resetBigQuery` <a name="resetBigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigQuery"></a>

```java
public void resetBigQuery()
```

##### `resetBigTable` <a name="resetBigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetBigTable"></a>

```java
public void resetBigTable()
```

##### `resetComposer` <a name="resetComposer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetComposer"></a>

```java
public void resetComposer()
```

##### `resetDataFlow` <a name="resetDataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataFlow"></a>

```java
public void resetDataFlow()
```

##### `resetDataProc` <a name="resetDataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataProc"></a>

```java
public void resetDataProc()
```

##### `resetDataStore` <a name="resetDataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetDataStore"></a>

```java
public void resetDataStore()
```

##### `resetFireBaseDatabase` <a name="resetFireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseDatabase"></a>

```java
public void resetFireBaseDatabase()
```

##### `resetFireBaseHosting` <a name="resetFireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseHosting"></a>

```java
public void resetFireBaseHosting()
```

##### `resetFireBaseStorage` <a name="resetFireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireBaseStorage"></a>

```java
public void resetFireBaseStorage()
```

##### `resetFireStore` <a name="resetFireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFireStore"></a>

```java
public void resetFireStore()
```

##### `resetFunctions` <a name="resetFunctions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetFunctions"></a>

```java
public void resetFunctions()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetId"></a>

```java
public void resetId()
```

##### `resetInterconnect` <a name="resetInterconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetInterconnect"></a>

```java
public void resetInterconnect()
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetKubernetes"></a>

```java
public void resetKubernetes()
```

##### `resetLoadBalancing` <a name="resetLoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetLoadBalancing"></a>

```java
public void resetLoadBalancing()
```

##### `resetMemCache` <a name="resetMemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetMemCache"></a>

```java
public void resetMemCache()
```

##### `resetPubSub` <a name="resetPubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetPubSub"></a>

```java
public void resetPubSub()
```

##### `resetRedis` <a name="resetRedis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRedis"></a>

```java
public void resetRedis()
```

##### `resetRouter` <a name="resetRouter" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRouter"></a>

```java
public void resetRouter()
```

##### `resetRun` <a name="resetRun" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetRun"></a>

```java
public void resetRun()
```

##### `resetSpanner` <a name="resetSpanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSpanner"></a>

```java
public void resetSpanner()
```

##### `resetSql` <a name="resetSql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetSql"></a>

```java
public void resetSql()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetVirtualMachines` <a name="resetVirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVirtualMachines"></a>

```java
public void resetVirtualMachines()
```

##### `resetVpcAccess` <a name="resetVpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.resetVpcAccess"></a>

```java
public void resetVpcAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGcpIntegrations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrations;

CloudGcpIntegrations.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrations;

CloudGcpIntegrations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrations;

CloudGcpIntegrations.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrations;

CloudGcpIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudGcpIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudGcpIntegrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudGcpIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudGcpIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudGcpIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDb">alloyDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference">CloudGcpIntegrationsAlloyDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference">CloudGcpIntegrationsAppEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQuery">bigQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference">CloudGcpIntegrationsBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTable">bigTable</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference">CloudGcpIntegrationsBigTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composer">composer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference">CloudGcpIntegrationsComposerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlow">dataFlow</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference">CloudGcpIntegrationsDataFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProc">dataProc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference">CloudGcpIntegrationsDataProcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStore">dataStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference">CloudGcpIntegrationsDataStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabase">fireBaseDatabase</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference">CloudGcpIntegrationsFireBaseDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHosting">fireBaseHosting</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference">CloudGcpIntegrationsFireBaseHostingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorage">fireBaseStorage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference">CloudGcpIntegrationsFireBaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStore">fireStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference">CloudGcpIntegrationsFireStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference">CloudGcpIntegrationsFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnect">interconnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference">CloudGcpIntegrationsInterconnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference">CloudGcpIntegrationsKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference">CloudGcpIntegrationsLoadBalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCache">memCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference">CloudGcpIntegrationsMemCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSub">pubSub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference">CloudGcpIntegrationsPubSubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference">CloudGcpIntegrationsRedisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.router">router</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference">CloudGcpIntegrationsRouterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.run">run</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference">CloudGcpIntegrationsRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spanner">spanner</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference">CloudGcpIntegrationsSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference">CloudGcpIntegrationsSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference">CloudGcpIntegrationsStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachines">virtualMachines</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference">CloudGcpIntegrationsVirtualMachinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference">CloudGcpIntegrationsVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDbInput">alloyDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngineInput">appEngineInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQueryInput">bigQueryInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTableInput">bigTableInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composerInput">composerInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlowInput">dataFlowInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProcInput">dataProcInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStoreInput">dataStoreInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabaseInput">fireBaseDatabaseInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHostingInput">fireBaseHostingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorageInput">fireBaseStorageInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStoreInput">fireStoreInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functionsInput">functionsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnectInput">interconnectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetesInput">kubernetesInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancingInput">loadBalancingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCacheInput">memCacheInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSubInput">pubSubInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redisInput">redisInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.routerInput">routerInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.runInput">runInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spannerInput">spannerInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sqlInput">sqlInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachinesInput">virtualMachinesInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccessInput">vpcAccessInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alloyDb`<sup>Required</sup> <a name="alloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDb"></a>

```java
public CloudGcpIntegrationsAlloyDbOutputReference getAlloyDb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference">CloudGcpIntegrationsAlloyDbOutputReference</a>

---

##### `appEngine`<sup>Required</sup> <a name="appEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngine"></a>

```java
public CloudGcpIntegrationsAppEngineOutputReference getAppEngine();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference">CloudGcpIntegrationsAppEngineOutputReference</a>

---

##### `bigQuery`<sup>Required</sup> <a name="bigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQuery"></a>

```java
public CloudGcpIntegrationsBigQueryOutputReference getBigQuery();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference">CloudGcpIntegrationsBigQueryOutputReference</a>

---

##### `bigTable`<sup>Required</sup> <a name="bigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTable"></a>

```java
public CloudGcpIntegrationsBigTableOutputReference getBigTable();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference">CloudGcpIntegrationsBigTableOutputReference</a>

---

##### `composer`<sup>Required</sup> <a name="composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composer"></a>

```java
public CloudGcpIntegrationsComposerOutputReference getComposer();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference">CloudGcpIntegrationsComposerOutputReference</a>

---

##### `dataFlow`<sup>Required</sup> <a name="dataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlow"></a>

```java
public CloudGcpIntegrationsDataFlowOutputReference getDataFlow();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference">CloudGcpIntegrationsDataFlowOutputReference</a>

---

##### `dataProc`<sup>Required</sup> <a name="dataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProc"></a>

```java
public CloudGcpIntegrationsDataProcOutputReference getDataProc();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference">CloudGcpIntegrationsDataProcOutputReference</a>

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStore"></a>

```java
public CloudGcpIntegrationsDataStoreOutputReference getDataStore();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference">CloudGcpIntegrationsDataStoreOutputReference</a>

---

##### `fireBaseDatabase`<sup>Required</sup> <a name="fireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabase"></a>

```java
public CloudGcpIntegrationsFireBaseDatabaseOutputReference getFireBaseDatabase();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference">CloudGcpIntegrationsFireBaseDatabaseOutputReference</a>

---

##### `fireBaseHosting`<sup>Required</sup> <a name="fireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHosting"></a>

```java
public CloudGcpIntegrationsFireBaseHostingOutputReference getFireBaseHosting();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference">CloudGcpIntegrationsFireBaseHostingOutputReference</a>

---

##### `fireBaseStorage`<sup>Required</sup> <a name="fireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorage"></a>

```java
public CloudGcpIntegrationsFireBaseStorageOutputReference getFireBaseStorage();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference">CloudGcpIntegrationsFireBaseStorageOutputReference</a>

---

##### `fireStore`<sup>Required</sup> <a name="fireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStore"></a>

```java
public CloudGcpIntegrationsFireStoreOutputReference getFireStore();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference">CloudGcpIntegrationsFireStoreOutputReference</a>

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functions"></a>

```java
public CloudGcpIntegrationsFunctionsOutputReference getFunctions();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference">CloudGcpIntegrationsFunctionsOutputReference</a>

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnect"></a>

```java
public CloudGcpIntegrationsInterconnectOutputReference getInterconnect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference">CloudGcpIntegrationsInterconnectOutputReference</a>

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetes"></a>

```java
public CloudGcpIntegrationsKubernetesOutputReference getKubernetes();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference">CloudGcpIntegrationsKubernetesOutputReference</a>

---

##### `loadBalancing`<sup>Required</sup> <a name="loadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancing"></a>

```java
public CloudGcpIntegrationsLoadBalancingOutputReference getLoadBalancing();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference">CloudGcpIntegrationsLoadBalancingOutputReference</a>

---

##### `memCache`<sup>Required</sup> <a name="memCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCache"></a>

```java
public CloudGcpIntegrationsMemCacheOutputReference getMemCache();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference">CloudGcpIntegrationsMemCacheOutputReference</a>

---

##### `pubSub`<sup>Required</sup> <a name="pubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSub"></a>

```java
public CloudGcpIntegrationsPubSubOutputReference getPubSub();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference">CloudGcpIntegrationsPubSubOutputReference</a>

---

##### `redis`<sup>Required</sup> <a name="redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redis"></a>

```java
public CloudGcpIntegrationsRedisOutputReference getRedis();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference">CloudGcpIntegrationsRedisOutputReference</a>

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.router"></a>

```java
public CloudGcpIntegrationsRouterOutputReference getRouter();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference">CloudGcpIntegrationsRouterOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.run"></a>

```java
public CloudGcpIntegrationsRunOutputReference getRun();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference">CloudGcpIntegrationsRunOutputReference</a>

---

##### `spanner`<sup>Required</sup> <a name="spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spanner"></a>

```java
public CloudGcpIntegrationsSpannerOutputReference getSpanner();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference">CloudGcpIntegrationsSpannerOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sql"></a>

```java
public CloudGcpIntegrationsSqlOutputReference getSql();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference">CloudGcpIntegrationsSqlOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storage"></a>

```java
public CloudGcpIntegrationsStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference">CloudGcpIntegrationsStorageOutputReference</a>

---

##### `virtualMachines`<sup>Required</sup> <a name="virtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachines"></a>

```java
public CloudGcpIntegrationsVirtualMachinesOutputReference getVirtualMachines();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference">CloudGcpIntegrationsVirtualMachinesOutputReference</a>

---

##### `vpcAccess`<sup>Required</sup> <a name="vpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccess"></a>

```java
public CloudGcpIntegrationsVpcAccessOutputReference getVpcAccess();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference">CloudGcpIntegrationsVpcAccessOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `alloyDbInput`<sup>Optional</sup> <a name="alloyDbInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.alloyDbInput"></a>

```java
public CloudGcpIntegrationsAlloyDb getAlloyDbInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

---

##### `appEngineInput`<sup>Optional</sup> <a name="appEngineInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.appEngineInput"></a>

```java
public CloudGcpIntegrationsAppEngine getAppEngineInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

---

##### `bigQueryInput`<sup>Optional</sup> <a name="bigQueryInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigQueryInput"></a>

```java
public CloudGcpIntegrationsBigQuery getBigQueryInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

---

##### `bigTableInput`<sup>Optional</sup> <a name="bigTableInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.bigTableInput"></a>

```java
public CloudGcpIntegrationsBigTable getBigTableInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

---

##### `composerInput`<sup>Optional</sup> <a name="composerInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.composerInput"></a>

```java
public CloudGcpIntegrationsComposer getComposerInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

---

##### `dataFlowInput`<sup>Optional</sup> <a name="dataFlowInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataFlowInput"></a>

```java
public CloudGcpIntegrationsDataFlow getDataFlowInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

---

##### `dataProcInput`<sup>Optional</sup> <a name="dataProcInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataProcInput"></a>

```java
public CloudGcpIntegrationsDataProc getDataProcInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.dataStoreInput"></a>

```java
public CloudGcpIntegrationsDataStore getDataStoreInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

---

##### `fireBaseDatabaseInput`<sup>Optional</sup> <a name="fireBaseDatabaseInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseDatabaseInput"></a>

```java
public CloudGcpIntegrationsFireBaseDatabase getFireBaseDatabaseInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

---

##### `fireBaseHostingInput`<sup>Optional</sup> <a name="fireBaseHostingInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseHostingInput"></a>

```java
public CloudGcpIntegrationsFireBaseHosting getFireBaseHostingInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

---

##### `fireBaseStorageInput`<sup>Optional</sup> <a name="fireBaseStorageInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireBaseStorageInput"></a>

```java
public CloudGcpIntegrationsFireBaseStorage getFireBaseStorageInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

---

##### `fireStoreInput`<sup>Optional</sup> <a name="fireStoreInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.fireStoreInput"></a>

```java
public CloudGcpIntegrationsFireStore getFireStoreInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

---

##### `functionsInput`<sup>Optional</sup> <a name="functionsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.functionsInput"></a>

```java
public CloudGcpIntegrationsFunctions getFunctionsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.interconnectInput"></a>

```java
public CloudGcpIntegrationsInterconnect getInterconnectInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.kubernetesInput"></a>

```java
public CloudGcpIntegrationsKubernetes getKubernetesInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountIdInput"></a>

```java
public java.lang.Number getLinkedAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `loadBalancingInput`<sup>Optional</sup> <a name="loadBalancingInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.loadBalancingInput"></a>

```java
public CloudGcpIntegrationsLoadBalancing getLoadBalancingInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

---

##### `memCacheInput`<sup>Optional</sup> <a name="memCacheInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.memCacheInput"></a>

```java
public CloudGcpIntegrationsMemCache getMemCacheInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

---

##### `pubSubInput`<sup>Optional</sup> <a name="pubSubInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.pubSubInput"></a>

```java
public CloudGcpIntegrationsPubSub getPubSubInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

---

##### `redisInput`<sup>Optional</sup> <a name="redisInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.redisInput"></a>

```java
public CloudGcpIntegrationsRedis getRedisInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.routerInput"></a>

```java
public CloudGcpIntegrationsRouter getRouterInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.runInput"></a>

```java
public CloudGcpIntegrationsRun getRunInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

---

##### `spannerInput`<sup>Optional</sup> <a name="spannerInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.spannerInput"></a>

```java
public CloudGcpIntegrationsSpanner getSpannerInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.sqlInput"></a>

```java
public CloudGcpIntegrationsSql getSqlInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.storageInput"></a>

```java
public CloudGcpIntegrationsStorage getStorageInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

---

##### `virtualMachinesInput`<sup>Optional</sup> <a name="virtualMachinesInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.virtualMachinesInput"></a>

```java
public CloudGcpIntegrationsVirtualMachines getVirtualMachinesInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

---

##### `vpcAccessInput`<sup>Optional</sup> <a name="vpcAccessInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.vpcAccessInput"></a>

```java
public CloudGcpIntegrationsVpcAccess getVpcAccessInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.linkedAccountId"></a>

```java
public java.lang.Number getLinkedAccountId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGcpIntegrationsAlloyDb <a name="CloudGcpIntegrationsAlloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsAlloyDb;

CloudGcpIntegrationsAlloyDb.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsAppEngine <a name="CloudGcpIntegrationsAppEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsAppEngine;

CloudGcpIntegrationsAppEngine.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsBigQuery <a name="CloudGcpIntegrationsBigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsBigQuery;

CloudGcpIntegrationsBigQuery.builder()
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsBigTable <a name="CloudGcpIntegrationsBigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsBigTable;

CloudGcpIntegrationsBigTable.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsComposer <a name="CloudGcpIntegrationsComposer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsComposer;

CloudGcpIntegrationsComposer.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsConfig <a name="CloudGcpIntegrationsConfig" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsConfig;

CloudGcpIntegrationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .linkedAccountId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .alloyDb(CloudGcpIntegrationsAlloyDb)
//  .appEngine(CloudGcpIntegrationsAppEngine)
//  .bigQuery(CloudGcpIntegrationsBigQuery)
//  .bigTable(CloudGcpIntegrationsBigTable)
//  .composer(CloudGcpIntegrationsComposer)
//  .dataFlow(CloudGcpIntegrationsDataFlow)
//  .dataProc(CloudGcpIntegrationsDataProc)
//  .dataStore(CloudGcpIntegrationsDataStore)
//  .fireBaseDatabase(CloudGcpIntegrationsFireBaseDatabase)
//  .fireBaseHosting(CloudGcpIntegrationsFireBaseHosting)
//  .fireBaseStorage(CloudGcpIntegrationsFireBaseStorage)
//  .fireStore(CloudGcpIntegrationsFireStore)
//  .functions(CloudGcpIntegrationsFunctions)
//  .id(java.lang.String)
//  .interconnect(CloudGcpIntegrationsInterconnect)
//  .kubernetes(CloudGcpIntegrationsKubernetes)
//  .loadBalancing(CloudGcpIntegrationsLoadBalancing)
//  .memCache(CloudGcpIntegrationsMemCache)
//  .pubSub(CloudGcpIntegrationsPubSub)
//  .redis(CloudGcpIntegrationsRedis)
//  .router(CloudGcpIntegrationsRouter)
//  .run(CloudGcpIntegrationsRun)
//  .spanner(CloudGcpIntegrationsSpanner)
//  .sql(CloudGcpIntegrationsSql)
//  .storage(CloudGcpIntegrationsStorage)
//  .virtualMachines(CloudGcpIntegrationsVirtualMachines)
//  .vpcAccess(CloudGcpIntegrationsVpcAccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | Id of the linked gcp account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | ID of the newrelic account. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.alloyDb">alloyDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | alloy_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.appEngine">appEngine</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | app_engine block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigQuery">bigQuery</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigTable">bigTable</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | big_table block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.composer">composer</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | composer block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataFlow">dataFlow</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | data_flow block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataProc">dataProc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | data_proc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataStore">dataStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | data_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseDatabase">fireBaseDatabase</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | fire_base_database block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseHosting">fireBaseHosting</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | fire_base_hosting block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseStorage">fireBaseStorage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | fire_base_storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireStore">fireStore</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | fire_store block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | functions block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.interconnect">interconnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | interconnect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | load_balancing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.memCache">memCache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | mem_cache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.pubSub">pubSub</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | pub_sub block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.redis">redis</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | redis block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.router">router</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | router block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.run">run</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.spanner">spanner</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | spanner block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.sql">sql</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | sql block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | storage block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.virtualMachines">virtualMachines</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | virtual_machines block. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.vpcAccess">vpcAccess</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | vpc_access block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.linkedAccountId"></a>

```java
public java.lang.Number getLinkedAccountId();
```

- *Type:* java.lang.Number

Id of the linked gcp account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#linked_account_id CloudGcpIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

ID of the newrelic account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#account_id CloudGcpIntegrations#account_id}

---

##### `alloyDb`<sup>Optional</sup> <a name="alloyDb" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.alloyDb"></a>

```java
public CloudGcpIntegrationsAlloyDb getAlloyDb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

alloy_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#alloy_db CloudGcpIntegrations#alloy_db}

---

##### `appEngine`<sup>Optional</sup> <a name="appEngine" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.appEngine"></a>

```java
public CloudGcpIntegrationsAppEngine getAppEngine();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

app_engine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#app_engine CloudGcpIntegrations#app_engine}

---

##### `bigQuery`<sup>Optional</sup> <a name="bigQuery" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigQuery"></a>

```java
public CloudGcpIntegrationsBigQuery getBigQuery();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#big_query CloudGcpIntegrations#big_query}

---

##### `bigTable`<sup>Optional</sup> <a name="bigTable" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.bigTable"></a>

```java
public CloudGcpIntegrationsBigTable getBigTable();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

big_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#big_table CloudGcpIntegrations#big_table}

---

##### `composer`<sup>Optional</sup> <a name="composer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.composer"></a>

```java
public CloudGcpIntegrationsComposer getComposer();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

composer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#composer CloudGcpIntegrations#composer}

---

##### `dataFlow`<sup>Optional</sup> <a name="dataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataFlow"></a>

```java
public CloudGcpIntegrationsDataFlow getDataFlow();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#data_flow CloudGcpIntegrations#data_flow}

---

##### `dataProc`<sup>Optional</sup> <a name="dataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataProc"></a>

```java
public CloudGcpIntegrationsDataProc getDataProc();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

data_proc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#data_proc CloudGcpIntegrations#data_proc}

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.dataStore"></a>

```java
public CloudGcpIntegrationsDataStore getDataStore();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

data_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#data_store CloudGcpIntegrations#data_store}

---

##### `fireBaseDatabase`<sup>Optional</sup> <a name="fireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseDatabase"></a>

```java
public CloudGcpIntegrationsFireBaseDatabase getFireBaseDatabase();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

fire_base_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fire_base_database CloudGcpIntegrations#fire_base_database}

---

##### `fireBaseHosting`<sup>Optional</sup> <a name="fireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseHosting"></a>

```java
public CloudGcpIntegrationsFireBaseHosting getFireBaseHosting();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

fire_base_hosting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fire_base_hosting CloudGcpIntegrations#fire_base_hosting}

---

##### `fireBaseStorage`<sup>Optional</sup> <a name="fireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireBaseStorage"></a>

```java
public CloudGcpIntegrationsFireBaseStorage getFireBaseStorage();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

fire_base_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fire_base_storage CloudGcpIntegrations#fire_base_storage}

---

##### `fireStore`<sup>Optional</sup> <a name="fireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.fireStore"></a>

```java
public CloudGcpIntegrationsFireStore getFireStore();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

fire_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fire_store CloudGcpIntegrations#fire_store}

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.functions"></a>

```java
public CloudGcpIntegrationsFunctions getFunctions();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#functions CloudGcpIntegrations#functions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#id CloudGcpIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.interconnect"></a>

```java
public CloudGcpIntegrationsInterconnect getInterconnect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

interconnect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#interconnect CloudGcpIntegrations#interconnect}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.kubernetes"></a>

```java
public CloudGcpIntegrationsKubernetes getKubernetes();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#kubernetes CloudGcpIntegrations#kubernetes}

---

##### `loadBalancing`<sup>Optional</sup> <a name="loadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.loadBalancing"></a>

```java
public CloudGcpIntegrationsLoadBalancing getLoadBalancing();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

load_balancing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#load_balancing CloudGcpIntegrations#load_balancing}

---

##### `memCache`<sup>Optional</sup> <a name="memCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.memCache"></a>

```java
public CloudGcpIntegrationsMemCache getMemCache();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

mem_cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#mem_cache CloudGcpIntegrations#mem_cache}

---

##### `pubSub`<sup>Optional</sup> <a name="pubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.pubSub"></a>

```java
public CloudGcpIntegrationsPubSub getPubSub();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

pub_sub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#pub_sub CloudGcpIntegrations#pub_sub}

---

##### `redis`<sup>Optional</sup> <a name="redis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.redis"></a>

```java
public CloudGcpIntegrationsRedis getRedis();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

redis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#redis CloudGcpIntegrations#redis}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.router"></a>

```java
public CloudGcpIntegrationsRouter getRouter();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

router block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#router CloudGcpIntegrations#router}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.run"></a>

```java
public CloudGcpIntegrationsRun getRun();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#run CloudGcpIntegrations#run}

---

##### `spanner`<sup>Optional</sup> <a name="spanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.spanner"></a>

```java
public CloudGcpIntegrationsSpanner getSpanner();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#spanner CloudGcpIntegrations#spanner}

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.sql"></a>

```java
public CloudGcpIntegrationsSql getSql();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#sql CloudGcpIntegrations#sql}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.storage"></a>

```java
public CloudGcpIntegrationsStorage getStorage();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#storage CloudGcpIntegrations#storage}

---

##### `virtualMachines`<sup>Optional</sup> <a name="virtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.virtualMachines"></a>

```java
public CloudGcpIntegrationsVirtualMachines getVirtualMachines();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

virtual_machines block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#virtual_machines CloudGcpIntegrations#virtual_machines}

---

##### `vpcAccess`<sup>Optional</sup> <a name="vpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsConfig.property.vpcAccess"></a>

```java
public CloudGcpIntegrationsVpcAccess getVpcAccess();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#vpc_access CloudGcpIntegrations#vpc_access}

---

### CloudGcpIntegrationsDataFlow <a name="CloudGcpIntegrationsDataFlow" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsDataFlow;

CloudGcpIntegrationsDataFlow.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsDataProc <a name="CloudGcpIntegrationsDataProc" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsDataProc;

CloudGcpIntegrationsDataProc.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsDataStore <a name="CloudGcpIntegrationsDataStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsDataStore;

CloudGcpIntegrationsDataStore.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseDatabase <a name="CloudGcpIntegrationsFireBaseDatabase" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFireBaseDatabase;

CloudGcpIntegrationsFireBaseDatabase.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseHosting <a name="CloudGcpIntegrationsFireBaseHosting" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFireBaseHosting;

CloudGcpIntegrationsFireBaseHosting.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireBaseStorage <a name="CloudGcpIntegrationsFireBaseStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFireBaseStorage;

CloudGcpIntegrationsFireBaseStorage.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFireStore <a name="CloudGcpIntegrationsFireStore" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFireStore;

CloudGcpIntegrationsFireStore.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsFunctions <a name="CloudGcpIntegrationsFunctions" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFunctions;

CloudGcpIntegrationsFunctions.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsInterconnect <a name="CloudGcpIntegrationsInterconnect" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsInterconnect;

CloudGcpIntegrationsInterconnect.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsKubernetes <a name="CloudGcpIntegrationsKubernetes" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsKubernetes;

CloudGcpIntegrationsKubernetes.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsLoadBalancing <a name="CloudGcpIntegrationsLoadBalancing" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsLoadBalancing;

CloudGcpIntegrationsLoadBalancing.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsMemCache <a name="CloudGcpIntegrationsMemCache" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsMemCache;

CloudGcpIntegrationsMemCache.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsPubSub <a name="CloudGcpIntegrationsPubSub" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsPubSub;

CloudGcpIntegrationsPubSub.builder()
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRedis <a name="CloudGcpIntegrationsRedis" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsRedis;

CloudGcpIntegrationsRedis.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRouter <a name="CloudGcpIntegrationsRouter" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsRouter;

CloudGcpIntegrationsRouter.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsRun <a name="CloudGcpIntegrationsRun" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsRun;

CloudGcpIntegrationsRun.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsSpanner <a name="CloudGcpIntegrationsSpanner" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsSpanner;

CloudGcpIntegrationsSpanner.builder()
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsSql <a name="CloudGcpIntegrationsSql" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsSql;

CloudGcpIntegrationsSql.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsStorage <a name="CloudGcpIntegrationsStorage" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsStorage;

CloudGcpIntegrationsStorage.builder()
//  .fetchTags(java.lang.Boolean|IResolvable)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | to fetch tags of the resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

to fetch tags of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#fetch_tags CloudGcpIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsVirtualMachines <a name="CloudGcpIntegrationsVirtualMachines" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsVirtualMachines;

CloudGcpIntegrationsVirtualMachines.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

### CloudGcpIntegrationsVpcAccess <a name="CloudGcpIntegrationsVpcAccess" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsVpcAccess;

CloudGcpIntegrationsVpcAccess.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | the data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

the data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.76.1/docs/resources/cloud_gcp_integrations#metrics_polling_interval CloudGcpIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGcpIntegrationsAlloyDbOutputReference <a name="CloudGcpIntegrationsAlloyDbOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsAlloyDbOutputReference;

new CloudGcpIntegrationsAlloyDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDbOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsAlloyDb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAlloyDb">CloudGcpIntegrationsAlloyDb</a>

---


### CloudGcpIntegrationsAppEngineOutputReference <a name="CloudGcpIntegrationsAppEngineOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsAppEngineOutputReference;

new CloudGcpIntegrationsAppEngineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngineOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsAppEngine getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsAppEngine">CloudGcpIntegrationsAppEngine</a>

---


### CloudGcpIntegrationsBigQueryOutputReference <a name="CloudGcpIntegrationsBigQueryOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsBigQueryOutputReference;

new CloudGcpIntegrationsBigQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQueryOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsBigQuery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigQuery">CloudGcpIntegrationsBigQuery</a>

---


### CloudGcpIntegrationsBigTableOutputReference <a name="CloudGcpIntegrationsBigTableOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsBigTableOutputReference;

new CloudGcpIntegrationsBigTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTableOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsBigTable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsBigTable">CloudGcpIntegrationsBigTable</a>

---


### CloudGcpIntegrationsComposerOutputReference <a name="CloudGcpIntegrationsComposerOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsComposerOutputReference;

new CloudGcpIntegrationsComposerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposerOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsComposer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsComposer">CloudGcpIntegrationsComposer</a>

---


### CloudGcpIntegrationsDataFlowOutputReference <a name="CloudGcpIntegrationsDataFlowOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsDataFlowOutputReference;

new CloudGcpIntegrationsDataFlowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlowOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsDataFlow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataFlow">CloudGcpIntegrationsDataFlow</a>

---


### CloudGcpIntegrationsDataProcOutputReference <a name="CloudGcpIntegrationsDataProcOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsDataProcOutputReference;

new CloudGcpIntegrationsDataProcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProcOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsDataProc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataProc">CloudGcpIntegrationsDataProc</a>

---


### CloudGcpIntegrationsDataStoreOutputReference <a name="CloudGcpIntegrationsDataStoreOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsDataStoreOutputReference;

new CloudGcpIntegrationsDataStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStoreOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsDataStore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsDataStore">CloudGcpIntegrationsDataStore</a>

---


### CloudGcpIntegrationsFireBaseDatabaseOutputReference <a name="CloudGcpIntegrationsFireBaseDatabaseOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference;

new CloudGcpIntegrationsFireBaseDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabaseOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsFireBaseDatabase getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseDatabase">CloudGcpIntegrationsFireBaseDatabase</a>

---


### CloudGcpIntegrationsFireBaseHostingOutputReference <a name="CloudGcpIntegrationsFireBaseHostingOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFireBaseHostingOutputReference;

new CloudGcpIntegrationsFireBaseHostingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHostingOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsFireBaseHosting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseHosting">CloudGcpIntegrationsFireBaseHosting</a>

---


### CloudGcpIntegrationsFireBaseStorageOutputReference <a name="CloudGcpIntegrationsFireBaseStorageOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFireBaseStorageOutputReference;

new CloudGcpIntegrationsFireBaseStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorageOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsFireBaseStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireBaseStorage">CloudGcpIntegrationsFireBaseStorage</a>

---


### CloudGcpIntegrationsFireStoreOutputReference <a name="CloudGcpIntegrationsFireStoreOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFireStoreOutputReference;

new CloudGcpIntegrationsFireStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStoreOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsFireStore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFireStore">CloudGcpIntegrationsFireStore</a>

---


### CloudGcpIntegrationsFunctionsOutputReference <a name="CloudGcpIntegrationsFunctionsOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsFunctionsOutputReference;

new CloudGcpIntegrationsFunctionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctionsOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsFunctions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsFunctions">CloudGcpIntegrationsFunctions</a>

---


### CloudGcpIntegrationsInterconnectOutputReference <a name="CloudGcpIntegrationsInterconnectOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsInterconnectOutputReference;

new CloudGcpIntegrationsInterconnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnectOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsInterconnect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsInterconnect">CloudGcpIntegrationsInterconnect</a>

---


### CloudGcpIntegrationsKubernetesOutputReference <a name="CloudGcpIntegrationsKubernetesOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsKubernetesOutputReference;

new CloudGcpIntegrationsKubernetesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetesOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsKubernetes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsKubernetes">CloudGcpIntegrationsKubernetes</a>

---


### CloudGcpIntegrationsLoadBalancingOutputReference <a name="CloudGcpIntegrationsLoadBalancingOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsLoadBalancingOutputReference;

new CloudGcpIntegrationsLoadBalancingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancingOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsLoadBalancing getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsLoadBalancing">CloudGcpIntegrationsLoadBalancing</a>

---


### CloudGcpIntegrationsMemCacheOutputReference <a name="CloudGcpIntegrationsMemCacheOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsMemCacheOutputReference;

new CloudGcpIntegrationsMemCacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCacheOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsMemCache getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsMemCache">CloudGcpIntegrationsMemCache</a>

---


### CloudGcpIntegrationsPubSubOutputReference <a name="CloudGcpIntegrationsPubSubOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsPubSubOutputReference;

new CloudGcpIntegrationsPubSubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSubOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsPubSub getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsPubSub">CloudGcpIntegrationsPubSub</a>

---


### CloudGcpIntegrationsRedisOutputReference <a name="CloudGcpIntegrationsRedisOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsRedisOutputReference;

new CloudGcpIntegrationsRedisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedisOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsRedis getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRedis">CloudGcpIntegrationsRedis</a>

---


### CloudGcpIntegrationsRouterOutputReference <a name="CloudGcpIntegrationsRouterOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsRouterOutputReference;

new CloudGcpIntegrationsRouterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouterOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsRouter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRouter">CloudGcpIntegrationsRouter</a>

---


### CloudGcpIntegrationsRunOutputReference <a name="CloudGcpIntegrationsRunOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsRunOutputReference;

new CloudGcpIntegrationsRunOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRunOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsRun getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsRun">CloudGcpIntegrationsRun</a>

---


### CloudGcpIntegrationsSpannerOutputReference <a name="CloudGcpIntegrationsSpannerOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsSpannerOutputReference;

new CloudGcpIntegrationsSpannerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpannerOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsSpanner getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSpanner">CloudGcpIntegrationsSpanner</a>

---


### CloudGcpIntegrationsSqlOutputReference <a name="CloudGcpIntegrationsSqlOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsSqlOutputReference;

new CloudGcpIntegrationsSqlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSqlOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsSql getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsSql">CloudGcpIntegrationsSql</a>

---


### CloudGcpIntegrationsStorageOutputReference <a name="CloudGcpIntegrationsStorageOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsStorageOutputReference;

new CloudGcpIntegrationsStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchTagsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.fetchTags"></a>

```java
public java.lang.Boolean|IResolvable getFetchTags();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorageOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsStorage">CloudGcpIntegrationsStorage</a>

---


### CloudGcpIntegrationsVirtualMachinesOutputReference <a name="CloudGcpIntegrationsVirtualMachinesOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsVirtualMachinesOutputReference;

new CloudGcpIntegrationsVirtualMachinesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachinesOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsVirtualMachines getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVirtualMachines">CloudGcpIntegrationsVirtualMachines</a>

---


### CloudGcpIntegrationsVpcAccessOutputReference <a name="CloudGcpIntegrationsVpcAccessOutputReference" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_gcp_integrations.CloudGcpIntegrationsVpcAccessOutputReference;

new CloudGcpIntegrationsVpcAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccessOutputReference.property.internalValue"></a>

```java
public CloudGcpIntegrationsVpcAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudGcpIntegrations.CloudGcpIntegrationsVpcAccess">CloudGcpIntegrationsVpcAccess</a>

---



