# `newrelic_cloud_aws_integrations`

Refer to the Terraform Registory for docs: [`newrelic_cloud_aws_integrations`](https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations).

# `cloudAwsIntegrations` Submodule <a name="`cloudAwsIntegrations` Submodule" id="@cdktf/provider-newrelic.cloudAwsIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsIntegrations <a name="CloudAwsIntegrations" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations newrelic_cloud_aws_integrations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrations;

CloudAwsIntegrations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .linkedAccountId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .alb(CloudAwsIntegrationsAlb)
//  .apiGateway(CloudAwsIntegrationsApiGateway)
//  .autoScaling(CloudAwsIntegrationsAutoScaling)
//  .awsAppSync(CloudAwsIntegrationsAwsAppSync)
//  .awsAthena(CloudAwsIntegrationsAwsAthena)
//  .awsCognito(CloudAwsIntegrationsAwsCognito)
//  .awsConnect(CloudAwsIntegrationsAwsConnect)
//  .awsDirectConnect(CloudAwsIntegrationsAwsDirectConnect)
//  .awsFsx(CloudAwsIntegrationsAwsFsx)
//  .billing(CloudAwsIntegrationsBilling)
//  .cloudtrail(CloudAwsIntegrationsCloudtrail)
//  .docDb(CloudAwsIntegrationsDocDb)
//  .ebs(CloudAwsIntegrationsEbs)
//  .elasticache(CloudAwsIntegrationsElasticache)
//  .health(CloudAwsIntegrationsHealth)
//  .id(java.lang.String)
//  .s3(CloudAwsIntegrationsS3)
//  .sqs(CloudAwsIntegrationsSqs)
//  .trustedAdvisor(CloudAwsIntegrationsTrustedAdvisor)
//  .vpc(CloudAwsIntegrationsVpc)
//  .xRay(CloudAwsIntegrationsXRay)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | The ID of the linked AWS account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsAppSync">awsAppSync</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | aws_app_sync block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsAthena">awsAthena</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | aws_athena block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsCognito">awsCognito</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | aws_cognito block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsConnect">awsConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | aws_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | aws_direct_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsFsx">awsFsx</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | aws_fsx block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.docDb">docDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | doc_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.elasticache">elasticache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | elasticache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | sqs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.trustedAdvisor">trustedAdvisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | trusted_advisor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | vpc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.xRay">xRay</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | x_ray block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.linkedAccountId"></a>

- *Type:* java.lang.Number

The ID of the linked AWS account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#linked_account_id CloudAwsIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.accountId"></a>

- *Type:* java.lang.Number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#account_id CloudAwsIntegrations#account_id}

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.alb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#alb CloudAwsIntegrations#alb}

---

##### `apiGateway`<sup>Optional</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.apiGateway"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#api_gateway CloudAwsIntegrations#api_gateway}

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.autoScaling"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#auto_scaling CloudAwsIntegrations#auto_scaling}

---

##### `awsAppSync`<sup>Optional</sup> <a name="awsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsAppSync"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

aws_app_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_app_sync CloudAwsIntegrations#aws_app_sync}

---

##### `awsAthena`<sup>Optional</sup> <a name="awsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsAthena"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

aws_athena block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_athena CloudAwsIntegrations#aws_athena}

---

##### `awsCognito`<sup>Optional</sup> <a name="awsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsCognito"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

aws_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_cognito CloudAwsIntegrations#aws_cognito}

---

##### `awsConnect`<sup>Optional</sup> <a name="awsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsConnect"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

aws_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_connect CloudAwsIntegrations#aws_connect}

---

##### `awsDirectConnect`<sup>Optional</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsDirectConnect"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

aws_direct_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_direct_connect CloudAwsIntegrations#aws_direct_connect}

---

##### `awsFsx`<sup>Optional</sup> <a name="awsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.awsFsx"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

aws_fsx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_fsx CloudAwsIntegrations#aws_fsx}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.billing"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#billing CloudAwsIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.cloudtrail"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#cloudtrail CloudAwsIntegrations#cloudtrail}

---

##### `docDb`<sup>Optional</sup> <a name="docDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.docDb"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

doc_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#doc_db CloudAwsIntegrations#doc_db}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.ebs"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#ebs CloudAwsIntegrations#ebs}

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.elasticache"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#elasticache CloudAwsIntegrations#elasticache}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.health"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#health CloudAwsIntegrations#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#s3 CloudAwsIntegrations#s3}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.sqs"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#sqs CloudAwsIntegrations#sqs}

---

##### `trustedAdvisor`<sup>Optional</sup> <a name="trustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.trustedAdvisor"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

trusted_advisor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#trusted_advisor CloudAwsIntegrations#trusted_advisor}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.vpc"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#vpc CloudAwsIntegrations#vpc}

---

##### `xRay`<sup>Optional</sup> <a name="xRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.Initializer.parameter.xRay"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#x_ray CloudAwsIntegrations#x_ray}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb">putAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway">putApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync">putAwsAppSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena">putAwsAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito">putAwsCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect">putAwsConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect">putAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx">putAwsFsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling">putBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail">putCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb">putDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs">putEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache">putElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth">putHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs">putSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor">putTrustedAdvisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay">putXRay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAlb">resetAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetApiGateway">resetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAutoScaling">resetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAppSync">resetAwsAppSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAthena">resetAwsAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsCognito">resetAwsCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsConnect">resetAwsConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsDirectConnect">resetAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsFsx">resetAwsFsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetBilling">resetBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetCloudtrail">resetCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetDocDb">resetDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetEbs">resetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetElasticache">resetElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetHealth">resetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetSqs">resetSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetTrustedAdvisor">resetTrustedAdvisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetVpc">resetVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetXRay">resetXRay</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAlb` <a name="putAlb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb"></a>

```java
public void putAlb(CloudAwsIntegrationsAlb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

---

##### `putApiGateway` <a name="putApiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway"></a>

```java
public void putApiGateway(CloudAwsIntegrationsApiGateway value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

---

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling"></a>

```java
public void putAutoScaling(CloudAwsIntegrationsAutoScaling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

---

##### `putAwsAppSync` <a name="putAwsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync"></a>

```java
public void putAwsAppSync(CloudAwsIntegrationsAwsAppSync value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAppSync.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

---

##### `putAwsAthena` <a name="putAwsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena"></a>

```java
public void putAwsAthena(CloudAwsIntegrationsAwsAthena value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsAthena.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

---

##### `putAwsCognito` <a name="putAwsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito"></a>

```java
public void putAwsCognito(CloudAwsIntegrationsAwsCognito value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

---

##### `putAwsConnect` <a name="putAwsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect"></a>

```java
public void putAwsConnect(CloudAwsIntegrationsAwsConnect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

---

##### `putAwsDirectConnect` <a name="putAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect"></a>

```java
public void putAwsDirectConnect(CloudAwsIntegrationsAwsDirectConnect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsDirectConnect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

---

##### `putAwsFsx` <a name="putAwsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx"></a>

```java
public void putAwsFsx(CloudAwsIntegrationsAwsFsx value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putAwsFsx.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

---

##### `putBilling` <a name="putBilling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling"></a>

```java
public void putBilling(CloudAwsIntegrationsBilling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putBilling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

---

##### `putCloudtrail` <a name="putCloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail"></a>

```java
public void putCloudtrail(CloudAwsIntegrationsCloudtrail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putCloudtrail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

---

##### `putDocDb` <a name="putDocDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb"></a>

```java
public void putDocDb(CloudAwsIntegrationsDocDb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putDocDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

---

##### `putEbs` <a name="putEbs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs"></a>

```java
public void putEbs(CloudAwsIntegrationsEbs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

---

##### `putElasticache` <a name="putElasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache"></a>

```java
public void putElasticache(CloudAwsIntegrationsElasticache value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putElasticache.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

---

##### `putHealth` <a name="putHealth" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth"></a>

```java
public void putHealth(CloudAwsIntegrationsHealth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

---

##### `putS3` <a name="putS3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3"></a>

```java
public void putS3(CloudAwsIntegrationsS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---

##### `putSqs` <a name="putSqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs"></a>

```java
public void putSqs(CloudAwsIntegrationsSqs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

---

##### `putTrustedAdvisor` <a name="putTrustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor"></a>

```java
public void putTrustedAdvisor(CloudAwsIntegrationsTrustedAdvisor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putTrustedAdvisor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

---

##### `putVpc` <a name="putVpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc"></a>

```java
public void putVpc(CloudAwsIntegrationsVpc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

---

##### `putXRay` <a name="putXRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay"></a>

```java
public void putXRay(CloudAwsIntegrationsXRay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.putXRay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAlb` <a name="resetAlb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAlb"></a>

```java
public void resetAlb()
```

##### `resetApiGateway` <a name="resetApiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetApiGateway"></a>

```java
public void resetApiGateway()
```

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAutoScaling"></a>

```java
public void resetAutoScaling()
```

##### `resetAwsAppSync` <a name="resetAwsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAppSync"></a>

```java
public void resetAwsAppSync()
```

##### `resetAwsAthena` <a name="resetAwsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsAthena"></a>

```java
public void resetAwsAthena()
```

##### `resetAwsCognito` <a name="resetAwsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsCognito"></a>

```java
public void resetAwsCognito()
```

##### `resetAwsConnect` <a name="resetAwsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsConnect"></a>

```java
public void resetAwsConnect()
```

##### `resetAwsDirectConnect` <a name="resetAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsDirectConnect"></a>

```java
public void resetAwsDirectConnect()
```

##### `resetAwsFsx` <a name="resetAwsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetAwsFsx"></a>

```java
public void resetAwsFsx()
```

##### `resetBilling` <a name="resetBilling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetBilling"></a>

```java
public void resetBilling()
```

##### `resetCloudtrail` <a name="resetCloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetCloudtrail"></a>

```java
public void resetCloudtrail()
```

##### `resetDocDb` <a name="resetDocDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetDocDb"></a>

```java
public void resetDocDb()
```

##### `resetEbs` <a name="resetEbs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetEbs"></a>

```java
public void resetEbs()
```

##### `resetElasticache` <a name="resetElasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetElasticache"></a>

```java
public void resetElasticache()
```

##### `resetHealth` <a name="resetHealth" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetHealth"></a>

```java
public void resetHealth()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetId"></a>

```java
public void resetId()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetS3"></a>

```java
public void resetS3()
```

##### `resetSqs` <a name="resetSqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetSqs"></a>

```java
public void resetSqs()
```

##### `resetTrustedAdvisor` <a name="resetTrustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetTrustedAdvisor"></a>

```java
public void resetTrustedAdvisor()
```

##### `resetVpc` <a name="resetVpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetVpc"></a>

```java
public void resetVpc()
```

##### `resetXRay` <a name="resetXRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.resetXRay"></a>

```java
public void resetXRay()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrations;

CloudAwsIntegrations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrations;

CloudAwsIntegrations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrations;

CloudAwsIntegrations.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference">CloudAwsIntegrationsAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference">CloudAwsIntegrationsApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference">CloudAwsIntegrationsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSync">awsAppSync</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference">CloudAwsIntegrationsAwsAppSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthena">awsAthena</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference">CloudAwsIntegrationsAwsAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognito">awsCognito</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference">CloudAwsIntegrationsAwsCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnect">awsConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference">CloudAwsIntegrationsAwsConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference">CloudAwsIntegrationsAwsDirectConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsx">awsFsx</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference">CloudAwsIntegrationsAwsFsxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference">CloudAwsIntegrationsBillingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference">CloudAwsIntegrationsCloudtrailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDb">docDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference">CloudAwsIntegrationsDocDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference">CloudAwsIntegrationsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticache">elasticache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference">CloudAwsIntegrationsElasticacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference">CloudAwsIntegrationsHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference">CloudAwsIntegrationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference">CloudAwsIntegrationsSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisor">trustedAdvisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference">CloudAwsIntegrationsTrustedAdvisorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference">CloudAwsIntegrationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRay">xRay</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference">CloudAwsIntegrationsXRayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.albInput">albInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGatewayInput">apiGatewayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScalingInput">autoScalingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSyncInput">awsAppSyncInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthenaInput">awsAthenaInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognitoInput">awsCognitoInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnectInput">awsConnectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnectInput">awsDirectConnectInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsxInput">awsFsxInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billingInput">billingInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrailInput">cloudtrailInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDbInput">docDbInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebsInput">ebsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticacheInput">elasticacheInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.healthInput">healthInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountIdInput">linkedAccountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqsInput">sqsInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisorInput">trustedAdvisorInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpcInput">vpcInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRayInput">xRayInput</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alb`<sup>Required</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.alb"></a>

```java
public CloudAwsIntegrationsAlbOutputReference getAlb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference">CloudAwsIntegrationsAlbOutputReference</a>

---

##### `apiGateway`<sup>Required</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGateway"></a>

```java
public CloudAwsIntegrationsApiGatewayOutputReference getApiGateway();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference">CloudAwsIntegrationsApiGatewayOutputReference</a>

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScaling"></a>

```java
public CloudAwsIntegrationsAutoScalingOutputReference getAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference">CloudAwsIntegrationsAutoScalingOutputReference</a>

---

##### `awsAppSync`<sup>Required</sup> <a name="awsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSync"></a>

```java
public CloudAwsIntegrationsAwsAppSyncOutputReference getAwsAppSync();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference">CloudAwsIntegrationsAwsAppSyncOutputReference</a>

---

##### `awsAthena`<sup>Required</sup> <a name="awsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthena"></a>

```java
public CloudAwsIntegrationsAwsAthenaOutputReference getAwsAthena();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference">CloudAwsIntegrationsAwsAthenaOutputReference</a>

---

##### `awsCognito`<sup>Required</sup> <a name="awsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognito"></a>

```java
public CloudAwsIntegrationsAwsCognitoOutputReference getAwsCognito();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference">CloudAwsIntegrationsAwsCognitoOutputReference</a>

---

##### `awsConnect`<sup>Required</sup> <a name="awsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnect"></a>

```java
public CloudAwsIntegrationsAwsConnectOutputReference getAwsConnect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference">CloudAwsIntegrationsAwsConnectOutputReference</a>

---

##### `awsDirectConnect`<sup>Required</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnect"></a>

```java
public CloudAwsIntegrationsAwsDirectConnectOutputReference getAwsDirectConnect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference">CloudAwsIntegrationsAwsDirectConnectOutputReference</a>

---

##### `awsFsx`<sup>Required</sup> <a name="awsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsx"></a>

```java
public CloudAwsIntegrationsAwsFsxOutputReference getAwsFsx();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference">CloudAwsIntegrationsAwsFsxOutputReference</a>

---

##### `billing`<sup>Required</sup> <a name="billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billing"></a>

```java
public CloudAwsIntegrationsBillingOutputReference getBilling();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference">CloudAwsIntegrationsBillingOutputReference</a>

---

##### `cloudtrail`<sup>Required</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrail"></a>

```java
public CloudAwsIntegrationsCloudtrailOutputReference getCloudtrail();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference">CloudAwsIntegrationsCloudtrailOutputReference</a>

---

##### `docDb`<sup>Required</sup> <a name="docDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDb"></a>

```java
public CloudAwsIntegrationsDocDbOutputReference getDocDb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference">CloudAwsIntegrationsDocDbOutputReference</a>

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebs"></a>

```java
public CloudAwsIntegrationsEbsOutputReference getEbs();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference">CloudAwsIntegrationsEbsOutputReference</a>

---

##### `elasticache`<sup>Required</sup> <a name="elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticache"></a>

```java
public CloudAwsIntegrationsElasticacheOutputReference getElasticache();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference">CloudAwsIntegrationsElasticacheOutputReference</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.health"></a>

```java
public CloudAwsIntegrationsHealthOutputReference getHealth();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference">CloudAwsIntegrationsHealthOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3"></a>

```java
public CloudAwsIntegrationsS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference">CloudAwsIntegrationsS3OutputReference</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqs"></a>

```java
public CloudAwsIntegrationsSqsOutputReference getSqs();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference">CloudAwsIntegrationsSqsOutputReference</a>

---

##### `trustedAdvisor`<sup>Required</sup> <a name="trustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisor"></a>

```java
public CloudAwsIntegrationsTrustedAdvisorOutputReference getTrustedAdvisor();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference">CloudAwsIntegrationsTrustedAdvisorOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpc"></a>

```java
public CloudAwsIntegrationsVpcOutputReference getVpc();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference">CloudAwsIntegrationsVpcOutputReference</a>

---

##### `xRay`<sup>Required</sup> <a name="xRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRay"></a>

```java
public CloudAwsIntegrationsXRayOutputReference getXRay();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference">CloudAwsIntegrationsXRayOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountIdInput"></a>

```java
public java.lang.Number getAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `albInput`<sup>Optional</sup> <a name="albInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.albInput"></a>

```java
public CloudAwsIntegrationsAlb getAlbInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

---

##### `apiGatewayInput`<sup>Optional</sup> <a name="apiGatewayInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.apiGatewayInput"></a>

```java
public CloudAwsIntegrationsApiGateway getApiGatewayInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.autoScalingInput"></a>

```java
public CloudAwsIntegrationsAutoScaling getAutoScalingInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

---

##### `awsAppSyncInput`<sup>Optional</sup> <a name="awsAppSyncInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAppSyncInput"></a>

```java
public CloudAwsIntegrationsAwsAppSync getAwsAppSyncInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

---

##### `awsAthenaInput`<sup>Optional</sup> <a name="awsAthenaInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsAthenaInput"></a>

```java
public CloudAwsIntegrationsAwsAthena getAwsAthenaInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

---

##### `awsCognitoInput`<sup>Optional</sup> <a name="awsCognitoInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsCognitoInput"></a>

```java
public CloudAwsIntegrationsAwsCognito getAwsCognitoInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

---

##### `awsConnectInput`<sup>Optional</sup> <a name="awsConnectInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsConnectInput"></a>

```java
public CloudAwsIntegrationsAwsConnect getAwsConnectInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

---

##### `awsDirectConnectInput`<sup>Optional</sup> <a name="awsDirectConnectInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsDirectConnectInput"></a>

```java
public CloudAwsIntegrationsAwsDirectConnect getAwsDirectConnectInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

---

##### `awsFsxInput`<sup>Optional</sup> <a name="awsFsxInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.awsFsxInput"></a>

```java
public CloudAwsIntegrationsAwsFsx getAwsFsxInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

---

##### `billingInput`<sup>Optional</sup> <a name="billingInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.billingInput"></a>

```java
public CloudAwsIntegrationsBilling getBillingInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

---

##### `cloudtrailInput`<sup>Optional</sup> <a name="cloudtrailInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.cloudtrailInput"></a>

```java
public CloudAwsIntegrationsCloudtrail getCloudtrailInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

---

##### `docDbInput`<sup>Optional</sup> <a name="docDbInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.docDbInput"></a>

```java
public CloudAwsIntegrationsDocDb getDocDbInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

---

##### `ebsInput`<sup>Optional</sup> <a name="ebsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.ebsInput"></a>

```java
public CloudAwsIntegrationsEbs getEbsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

---

##### `elasticacheInput`<sup>Optional</sup> <a name="elasticacheInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.elasticacheInput"></a>

```java
public CloudAwsIntegrationsElasticache getElasticacheInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

---

##### `healthInput`<sup>Optional</sup> <a name="healthInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.healthInput"></a>

```java
public CloudAwsIntegrationsHealth getHealthInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkedAccountIdInput`<sup>Optional</sup> <a name="linkedAccountIdInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountIdInput"></a>

```java
public java.lang.Number getLinkedAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.s3Input"></a>

```java
public CloudAwsIntegrationsS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---

##### `sqsInput`<sup>Optional</sup> <a name="sqsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.sqsInput"></a>

```java
public CloudAwsIntegrationsSqs getSqsInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

---

##### `trustedAdvisorInput`<sup>Optional</sup> <a name="trustedAdvisorInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.trustedAdvisorInput"></a>

```java
public CloudAwsIntegrationsTrustedAdvisor getTrustedAdvisorInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.vpcInput"></a>

```java
public CloudAwsIntegrationsVpc getVpcInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

---

##### `xRayInput`<sup>Optional</sup> <a name="xRayInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.xRayInput"></a>

```java
public CloudAwsIntegrationsXRay getXRayInput();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.linkedAccountId"></a>

```java
public java.lang.Number getLinkedAccountId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsIntegrationsAlb <a name="CloudAwsIntegrationsAlb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAlb;

CloudAwsIntegrationsAlb.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean)
//  .fetchExtendedInventory(IResolvable)
//  .fetchTags(java.lang.Boolean)
//  .fetchTags(IResolvable)
//  .loadBalancerPrefixes(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.loadBalancerPrefixes">loadBalancerPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchExtendedInventory"></a>

```java
public java.lang.Object getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.fetchTags"></a>

```java
public java.lang.Object getFetchTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `loadBalancerPrefixes`<sup>Optional</sup> <a name="loadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.loadBalancerPrefixes"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Specify each name or prefix for the LBs that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#load_balancer_prefixes CloudAwsIntegrations#load_balancer_prefixes}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsApiGateway <a name="CloudAwsIntegrationsApiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsApiGateway;

CloudAwsIntegrationsApiGateway.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
//  .stagePrefixes(java.util.List<java.lang.String>)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.stagePrefixes">stagePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `stagePrefixes`<sup>Optional</sup> <a name="stagePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.stagePrefixes"></a>

```java
public java.util.List<java.lang.String> getStagePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#stage_prefixes CloudAwsIntegrations#stage_prefixes}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsAutoScaling <a name="CloudAwsIntegrationsAutoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAutoScaling;

CloudAwsIntegrationsAutoScaling.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsAppSync <a name="CloudAwsIntegrationsAwsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsAppSync;

CloudAwsIntegrationsAwsAppSync.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsAthena <a name="CloudAwsIntegrationsAwsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsAthena;

CloudAwsIntegrationsAwsAthena.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsCognito <a name="CloudAwsIntegrationsAwsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsCognito;

CloudAwsIntegrationsAwsCognito.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsConnect <a name="CloudAwsIntegrationsAwsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsConnect;

CloudAwsIntegrationsAwsConnect.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsDirectConnect <a name="CloudAwsIntegrationsAwsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsDirectConnect;

CloudAwsIntegrationsAwsDirectConnect.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsAwsFsx <a name="CloudAwsIntegrationsAwsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsFsx;

CloudAwsIntegrationsAwsFsx.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsBilling <a name="CloudAwsIntegrationsBilling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsBilling;

CloudAwsIntegrationsBilling.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsCloudtrail <a name="CloudAwsIntegrationsCloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsCloudtrail;

CloudAwsIntegrationsCloudtrail.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsConfig <a name="CloudAwsIntegrationsConfig" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsConfig;

CloudAwsIntegrationsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .linkedAccountId(java.lang.Number)
//  .accountId(java.lang.Number)
//  .alb(CloudAwsIntegrationsAlb)
//  .apiGateway(CloudAwsIntegrationsApiGateway)
//  .autoScaling(CloudAwsIntegrationsAutoScaling)
//  .awsAppSync(CloudAwsIntegrationsAwsAppSync)
//  .awsAthena(CloudAwsIntegrationsAwsAthena)
//  .awsCognito(CloudAwsIntegrationsAwsCognito)
//  .awsConnect(CloudAwsIntegrationsAwsConnect)
//  .awsDirectConnect(CloudAwsIntegrationsAwsDirectConnect)
//  .awsFsx(CloudAwsIntegrationsAwsFsx)
//  .billing(CloudAwsIntegrationsBilling)
//  .cloudtrail(CloudAwsIntegrationsCloudtrail)
//  .docDb(CloudAwsIntegrationsDocDb)
//  .ebs(CloudAwsIntegrationsEbs)
//  .elasticache(CloudAwsIntegrationsElasticache)
//  .health(CloudAwsIntegrationsHealth)
//  .id(java.lang.String)
//  .s3(CloudAwsIntegrationsS3)
//  .sqs(CloudAwsIntegrationsSqs)
//  .trustedAdvisor(CloudAwsIntegrationsTrustedAdvisor)
//  .vpc(CloudAwsIntegrationsVpc)
//  .xRay(CloudAwsIntegrationsXRay)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.linkedAccountId">linkedAccountId</a></code> | <code>java.lang.Number</code> | The ID of the linked AWS account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.accountId">accountId</a></code> | <code>java.lang.Number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | auto_scaling block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAppSync">awsAppSync</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | aws_app_sync block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAthena">awsAthena</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | aws_athena block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsCognito">awsCognito</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | aws_cognito block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsConnect">awsConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | aws_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsDirectConnect">awsDirectConnect</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | aws_direct_connect block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsFsx">awsFsx</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | aws_fsx block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.billing">billing</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | billing block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.cloudtrail">cloudtrail</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | cloudtrail block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.docDb">docDb</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | doc_db block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.elasticache">elasticache</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | elasticache block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.sqs">sqs</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | sqs block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.trustedAdvisor">trustedAdvisor</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | trusted_advisor block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.vpc">vpc</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | vpc block. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.xRay">xRay</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | x_ray block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `linkedAccountId`<sup>Required</sup> <a name="linkedAccountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.linkedAccountId"></a>

```java
public java.lang.Number getLinkedAccountId();
```

- *Type:* java.lang.Number

The ID of the linked AWS account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#linked_account_id CloudAwsIntegrations#linked_account_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.accountId"></a>

```java
public java.lang.Number getAccountId();
```

- *Type:* java.lang.Number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#account_id CloudAwsIntegrations#account_id}

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.alb"></a>

```java
public CloudAwsIntegrationsAlb getAlb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#alb CloudAwsIntegrations#alb}

---

##### `apiGateway`<sup>Optional</sup> <a name="apiGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.apiGateway"></a>

```java
public CloudAwsIntegrationsApiGateway getApiGateway();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#api_gateway CloudAwsIntegrations#api_gateway}

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.autoScaling"></a>

```java
public CloudAwsIntegrationsAutoScaling getAutoScaling();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#auto_scaling CloudAwsIntegrations#auto_scaling}

---

##### `awsAppSync`<sup>Optional</sup> <a name="awsAppSync" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAppSync"></a>

```java
public CloudAwsIntegrationsAwsAppSync getAwsAppSync();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

aws_app_sync block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_app_sync CloudAwsIntegrations#aws_app_sync}

---

##### `awsAthena`<sup>Optional</sup> <a name="awsAthena" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsAthena"></a>

```java
public CloudAwsIntegrationsAwsAthena getAwsAthena();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

aws_athena block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_athena CloudAwsIntegrations#aws_athena}

---

##### `awsCognito`<sup>Optional</sup> <a name="awsCognito" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsCognito"></a>

```java
public CloudAwsIntegrationsAwsCognito getAwsCognito();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

aws_cognito block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_cognito CloudAwsIntegrations#aws_cognito}

---

##### `awsConnect`<sup>Optional</sup> <a name="awsConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsConnect"></a>

```java
public CloudAwsIntegrationsAwsConnect getAwsConnect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

aws_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_connect CloudAwsIntegrations#aws_connect}

---

##### `awsDirectConnect`<sup>Optional</sup> <a name="awsDirectConnect" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsDirectConnect"></a>

```java
public CloudAwsIntegrationsAwsDirectConnect getAwsDirectConnect();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

aws_direct_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_direct_connect CloudAwsIntegrations#aws_direct_connect}

---

##### `awsFsx`<sup>Optional</sup> <a name="awsFsx" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.awsFsx"></a>

```java
public CloudAwsIntegrationsAwsFsx getAwsFsx();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

aws_fsx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_fsx CloudAwsIntegrations#aws_fsx}

---

##### `billing`<sup>Optional</sup> <a name="billing" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.billing"></a>

```java
public CloudAwsIntegrationsBilling getBilling();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

billing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#billing CloudAwsIntegrations#billing}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.cloudtrail"></a>

```java
public CloudAwsIntegrationsCloudtrail getCloudtrail();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

cloudtrail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#cloudtrail CloudAwsIntegrations#cloudtrail}

---

##### `docDb`<sup>Optional</sup> <a name="docDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.docDb"></a>

```java
public CloudAwsIntegrationsDocDb getDocDb();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

doc_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#doc_db CloudAwsIntegrations#doc_db}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.ebs"></a>

```java
public CloudAwsIntegrationsEbs getEbs();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#ebs CloudAwsIntegrations#ebs}

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.elasticache"></a>

```java
public CloudAwsIntegrationsElasticache getElasticache();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

elasticache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#elasticache CloudAwsIntegrations#elasticache}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.health"></a>

```java
public CloudAwsIntegrationsHealth getHealth();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#health CloudAwsIntegrations#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#id CloudAwsIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.s3"></a>

```java
public CloudAwsIntegrationsS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#s3 CloudAwsIntegrations#s3}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.sqs"></a>

```java
public CloudAwsIntegrationsSqs getSqs();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#sqs CloudAwsIntegrations#sqs}

---

##### `trustedAdvisor`<sup>Optional</sup> <a name="trustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.trustedAdvisor"></a>

```java
public CloudAwsIntegrationsTrustedAdvisor getTrustedAdvisor();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

trusted_advisor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#trusted_advisor CloudAwsIntegrations#trusted_advisor}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.vpc"></a>

```java
public CloudAwsIntegrationsVpc getVpc();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#vpc CloudAwsIntegrations#vpc}

---

##### `xRay`<sup>Optional</sup> <a name="xRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsConfig.property.xRay"></a>

```java
public CloudAwsIntegrationsXRay getXRay();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

x_ray block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#x_ray CloudAwsIntegrations#x_ray}

---

### CloudAwsIntegrationsDocDb <a name="CloudAwsIntegrationsDocDb" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsDocDb;

CloudAwsIntegrationsDocDb.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsEbs <a name="CloudAwsIntegrationsEbs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsEbs;

CloudAwsIntegrationsEbs.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean)
//  .fetchExtendedInventory(IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.fetchExtendedInventory"></a>

```java
public java.lang.Object getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsElasticache <a name="CloudAwsIntegrationsElasticache" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsElasticache;

CloudAwsIntegrationsElasticache.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchTags(java.lang.Boolean)
//  .fetchTags(IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.fetchTags"></a>

```java
public java.lang.Object getFetchTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsHealth <a name="CloudAwsIntegrationsHealth" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsHealth;

CloudAwsIntegrationsHealth.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsS3 <a name="CloudAwsIntegrationsS3" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsS3;

CloudAwsIntegrationsS3.builder()
//  .fetchExtendedInventory(java.lang.Boolean)
//  .fetchExtendedInventory(IResolvable)
//  .fetchTags(java.lang.Boolean)
//  .fetchTags(IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchExtendedInventory"></a>

```java
public java.lang.Object getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.fetchTags"></a>

```java
public java.lang.Object getFetchTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsSqs <a name="CloudAwsIntegrationsSqs" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsSqs;

CloudAwsIntegrationsSqs.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchExtendedInventory(java.lang.Boolean)
//  .fetchExtendedInventory(IResolvable)
//  .fetchTags(java.lang.Boolean)
//  .fetchTags(IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .queuePrefixes(java.util.List<java.lang.String>)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determine if extra inventory data be collected or not. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specify if tags should be collected. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.queuePrefixes">queuePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchExtendedInventory`<sup>Optional</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchExtendedInventory"></a>

```java
public java.lang.Object getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determine if extra inventory data be collected or not.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_extended_inventory CloudAwsIntegrations#fetch_extended_inventory}

---

##### `fetchTags`<sup>Optional</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.fetchTags"></a>

```java
public java.lang.Object getFetchTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specify if tags should be collected.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_tags CloudAwsIntegrations#fetch_tags}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `queuePrefixes`<sup>Optional</sup> <a name="queuePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.queuePrefixes"></a>

```java
public java.util.List<java.lang.String> getQueuePrefixes();
```

- *Type:* java.util.List<java.lang.String>

Specify each name or prefix for the Queues that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#queue_prefixes CloudAwsIntegrations#queue_prefixes}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsTrustedAdvisor <a name="CloudAwsIntegrationsTrustedAdvisor" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsTrustedAdvisor;

CloudAwsIntegrationsTrustedAdvisor.builder()
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

### CloudAwsIntegrationsVpc <a name="CloudAwsIntegrationsVpc" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsVpc;

CloudAwsIntegrationsVpc.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .fetchNatGateway(java.lang.Boolean)
//  .fetchNatGateway(IResolvable)
//  .fetchVpn(java.lang.Boolean)
//  .fetchVpn(IResolvable)
//  .metricsPollingInterval(java.lang.Number)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchNatGateway">fetchNatGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specify if NAT gateway should be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchVpn">fetchVpn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specify if VPN should be monitored. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `fetchNatGateway`<sup>Optional</sup> <a name="fetchNatGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchNatGateway"></a>

```java
public java.lang.Object getFetchNatGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specify if NAT gateway should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_nat_gateway CloudAwsIntegrations#fetch_nat_gateway}

---

##### `fetchVpn`<sup>Optional</sup> <a name="fetchVpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.fetchVpn"></a>

```java
public java.lang.Object getFetchVpn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specify if VPN should be monitored.

May affect total data collection time and contribute to the Cloud provider API rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#fetch_vpn CloudAwsIntegrations#fetch_vpn}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Specify a Tag key associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_key CloudAwsIntegrations#tag_key}

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Specify a Tag value associated with the resources that you want to monitor. Filter values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#tag_value CloudAwsIntegrations#tag_value}

---

### CloudAwsIntegrationsXRay <a name="CloudAwsIntegrationsXRay" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsXRay;

CloudAwsIntegrationsXRay.builder()
//  .awsRegions(java.util.List<java.lang.String>)
//  .metricsPollingInterval(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | Specify each AWS region that includes the resources that you want to monitor. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | The data polling interval in seconds. |

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

Specify each AWS region that includes the resources that you want to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#aws_regions CloudAwsIntegrations#aws_regions}

---

##### `metricsPollingInterval`<sup>Optional</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

The data polling interval in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.23.0/docs/resources/cloud_aws_integrations#metrics_polling_interval CloudAwsIntegrations#metrics_polling_interval}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAwsIntegrationsAlbOutputReference <a name="CloudAwsIntegrationsAlbOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAlbOutputReference;

new CloudAwsIntegrationsAlbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetLoadBalancerPrefixes">resetLoadBalancerPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetLoadBalancerPrefixes` <a name="resetLoadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetLoadBalancerPrefixes"></a>

```java
public void resetLoadBalancerPrefixes()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput">loadBalancerPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixes">loadBalancerPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Object getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Object getFetchTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancerPrefixesInput`<sup>Optional</sup> <a name="loadBalancerPrefixesInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Object getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.fetchTags"></a>

```java
public java.lang.Object getFetchTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `loadBalancerPrefixes`<sup>Required</sup> <a name="loadBalancerPrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.loadBalancerPrefixes"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlbOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsAlb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAlb">CloudAwsIntegrationsAlb</a>

---


### CloudAwsIntegrationsApiGatewayOutputReference <a name="CloudAwsIntegrationsApiGatewayOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsApiGatewayOutputReference;

new CloudAwsIntegrationsApiGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetStagePrefixes">resetStagePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetStagePrefixes` <a name="resetStagePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetStagePrefixes"></a>

```java
public void resetStagePrefixes()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixesInput">stagePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixes">stagePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `stagePrefixesInput`<sup>Optional</sup> <a name="stagePrefixesInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getStagePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `stagePrefixes`<sup>Required</sup> <a name="stagePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.stagePrefixes"></a>

```java
public java.util.List<java.lang.String> getStagePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGatewayOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsApiGateway getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsApiGateway">CloudAwsIntegrationsApiGateway</a>

---


### CloudAwsIntegrationsAutoScalingOutputReference <a name="CloudAwsIntegrationsAutoScalingOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAutoScalingOutputReference;

new CloudAwsIntegrationsAutoScalingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScalingOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsAutoScaling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAutoScaling">CloudAwsIntegrationsAutoScaling</a>

---


### CloudAwsIntegrationsAwsAppSyncOutputReference <a name="CloudAwsIntegrationsAwsAppSyncOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsAppSyncOutputReference;

new CloudAwsIntegrationsAwsAppSyncOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSyncOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsAwsAppSync getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAppSync">CloudAwsIntegrationsAwsAppSync</a>

---


### CloudAwsIntegrationsAwsAthenaOutputReference <a name="CloudAwsIntegrationsAwsAthenaOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsAthenaOutputReference;

new CloudAwsIntegrationsAwsAthenaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthenaOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsAwsAthena getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsAthena">CloudAwsIntegrationsAwsAthena</a>

---


### CloudAwsIntegrationsAwsCognitoOutputReference <a name="CloudAwsIntegrationsAwsCognitoOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsCognitoOutputReference;

new CloudAwsIntegrationsAwsCognitoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognitoOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsAwsCognito getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsCognito">CloudAwsIntegrationsAwsCognito</a>

---


### CloudAwsIntegrationsAwsConnectOutputReference <a name="CloudAwsIntegrationsAwsConnectOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsConnectOutputReference;

new CloudAwsIntegrationsAwsConnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnectOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsAwsConnect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsConnect">CloudAwsIntegrationsAwsConnect</a>

---


### CloudAwsIntegrationsAwsDirectConnectOutputReference <a name="CloudAwsIntegrationsAwsDirectConnectOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsDirectConnectOutputReference;

new CloudAwsIntegrationsAwsDirectConnectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnectOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsAwsDirectConnect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsDirectConnect">CloudAwsIntegrationsAwsDirectConnect</a>

---


### CloudAwsIntegrationsAwsFsxOutputReference <a name="CloudAwsIntegrationsAwsFsxOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsAwsFsxOutputReference;

new CloudAwsIntegrationsAwsFsxOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsxOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsAwsFsx getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsAwsFsx">CloudAwsIntegrationsAwsFsx</a>

---


### CloudAwsIntegrationsBillingOutputReference <a name="CloudAwsIntegrationsBillingOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsBillingOutputReference;

new CloudAwsIntegrationsBillingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBillingOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsBilling getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsBilling">CloudAwsIntegrationsBilling</a>

---


### CloudAwsIntegrationsCloudtrailOutputReference <a name="CloudAwsIntegrationsCloudtrailOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsCloudtrailOutputReference;

new CloudAwsIntegrationsCloudtrailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrailOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsCloudtrail getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsCloudtrail">CloudAwsIntegrationsCloudtrail</a>

---


### CloudAwsIntegrationsDocDbOutputReference <a name="CloudAwsIntegrationsDocDbOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsDocDbOutputReference;

new CloudAwsIntegrationsDocDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDbOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsDocDb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsDocDb">CloudAwsIntegrationsDocDb</a>

---


### CloudAwsIntegrationsEbsOutputReference <a name="CloudAwsIntegrationsEbsOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsEbsOutputReference;

new CloudAwsIntegrationsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Object getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Object getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbsOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsEbs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsEbs">CloudAwsIntegrationsEbs</a>

---


### CloudAwsIntegrationsElasticacheOutputReference <a name="CloudAwsIntegrationsElasticacheOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsElasticacheOutputReference;

new CloudAwsIntegrationsElasticacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Object getFetchTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.fetchTags"></a>

```java
public java.lang.Object getFetchTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticacheOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsElasticache getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsElasticache">CloudAwsIntegrationsElasticache</a>

---


### CloudAwsIntegrationsHealthOutputReference <a name="CloudAwsIntegrationsHealthOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsHealthOutputReference;

new CloudAwsIntegrationsHealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealthOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsHealth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsHealth">CloudAwsIntegrationsHealth</a>

---


### CloudAwsIntegrationsS3OutputReference <a name="CloudAwsIntegrationsS3OutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsS3OutputReference;

new CloudAwsIntegrationsS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Object getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Object getFetchTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Object getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.fetchTags"></a>

```java
public java.lang.Object getFetchTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3OutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsS3">CloudAwsIntegrationsS3</a>

---


### CloudAwsIntegrationsSqsOutputReference <a name="CloudAwsIntegrationsSqsOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsSqsOutputReference;

new CloudAwsIntegrationsSqsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchExtendedInventory">resetFetchExtendedInventory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchTags">resetFetchTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetQueuePrefixes">resetQueuePrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchExtendedInventory` <a name="resetFetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchExtendedInventory"></a>

```java
public void resetFetchExtendedInventory()
```

##### `resetFetchTags` <a name="resetFetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetFetchTags"></a>

```java
public void resetFetchTags()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetQueuePrefixes` <a name="resetQueuePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetQueuePrefixes"></a>

```java
public void resetQueuePrefixes()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput">fetchExtendedInventoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTagsInput">fetchTagsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixesInput">queuePrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventory">fetchExtendedInventory</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTags">fetchTags</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixes">queuePrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventoryInput`<sup>Optional</sup> <a name="fetchExtendedInventoryInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventoryInput"></a>

```java
public java.lang.Object getFetchExtendedInventoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchTagsInput`<sup>Optional</sup> <a name="fetchTagsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTagsInput"></a>

```java
public java.lang.Object getFetchTagsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `queuePrefixesInput`<sup>Optional</sup> <a name="queuePrefixesInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixesInput"></a>

```java
public java.util.List<java.lang.String> getQueuePrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchExtendedInventory`<sup>Required</sup> <a name="fetchExtendedInventory" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchExtendedInventory"></a>

```java
public java.lang.Object getFetchExtendedInventory();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchTags`<sup>Required</sup> <a name="fetchTags" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.fetchTags"></a>

```java
public java.lang.Object getFetchTags();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `queuePrefixes`<sup>Required</sup> <a name="queuePrefixes" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.queuePrefixes"></a>

```java
public java.util.List<java.lang.String> getQueuePrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqsOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsSqs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsSqs">CloudAwsIntegrationsSqs</a>

---


### CloudAwsIntegrationsTrustedAdvisorOutputReference <a name="CloudAwsIntegrationsTrustedAdvisorOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsTrustedAdvisorOutputReference;

new CloudAwsIntegrationsTrustedAdvisorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisorOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsTrustedAdvisor getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsTrustedAdvisor">CloudAwsIntegrationsTrustedAdvisor</a>

---


### CloudAwsIntegrationsVpcOutputReference <a name="CloudAwsIntegrationsVpcOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsVpcOutputReference;

new CloudAwsIntegrationsVpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchNatGateway">resetFetchNatGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchVpn">resetFetchVpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetFetchNatGateway` <a name="resetFetchNatGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchNatGateway"></a>

```java
public void resetFetchNatGateway()
```

##### `resetFetchVpn` <a name="resetFetchVpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetFetchVpn"></a>

```java
public void resetFetchVpn()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGatewayInput">fetchNatGatewayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpnInput">fetchVpnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGateway">fetchNatGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpn">fetchVpn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchNatGatewayInput`<sup>Optional</sup> <a name="fetchNatGatewayInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGatewayInput"></a>

```java
public java.lang.Object getFetchNatGatewayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchVpnInput`<sup>Optional</sup> <a name="fetchVpnInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpnInput"></a>

```java
public java.lang.Object getFetchVpnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fetchNatGateway`<sup>Required</sup> <a name="fetchNatGateway" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchNatGateway"></a>

```java
public java.lang.Object getFetchNatGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fetchVpn`<sup>Required</sup> <a name="fetchVpn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.fetchVpn"></a>

```java
public java.lang.Object getFetchVpn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpcOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsVpc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsVpc">CloudAwsIntegrationsVpc</a>

---


### CloudAwsIntegrationsXRayOutputReference <a name="CloudAwsIntegrationsXRayOutputReference" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.newrelic.cloud_aws_integrations.CloudAwsIntegrationsXRayOutputReference;

new CloudAwsIntegrationsXRayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetMetricsPollingInterval">resetMetricsPollingInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetMetricsPollingInterval` <a name="resetMetricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.resetMetricsPollingInterval"></a>

```java
public void resetMetricsPollingInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingIntervalInput">metricsPollingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingInterval">metricsPollingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingIntervalInput`<sup>Optional</sup> <a name="metricsPollingIntervalInput" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingIntervalInput"></a>

```java
public java.lang.Number getMetricsPollingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metricsPollingInterval`<sup>Required</sup> <a name="metricsPollingInterval" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.metricsPollingInterval"></a>

```java
public java.lang.Number getMetricsPollingInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRayOutputReference.property.internalValue"></a>

```java
public CloudAwsIntegrationsXRay getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-newrelic.cloudAwsIntegrations.CloudAwsIntegrationsXRay">CloudAwsIntegrationsXRay</a>

---



